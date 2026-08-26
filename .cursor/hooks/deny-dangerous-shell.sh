#!/usr/bin/env bash
# Portfolio-portable deny hook for beforeShellExecution.
# Blocks force-push and secret-exfil patterns.
# Prod deploy/promote CLIs are allowed (founder confirms in chat per deploy skills).
# Kill switch: touch ~/.cursor/ai-org-hooks.off  → allow all (then Reload Window).
# Fail-closed when paired with failClosed: true in hooks.json.
set -euo pipefail

input=$(cat)

# Founder kill switch — disables this entire hook (force-push/exfil too).
if [[ -f "${HOME}/.cursor/ai-org-hooks.off" ]]; then
  printf '%s\n' '{"permission":"allow"}'
  exit 0
fi

cmd=""
if command -v python3 >/dev/null 2>&1; then
  cmd=$(printf '%s' "$input" | python3 -c 'import sys,json; print(json.load(sys.stdin).get("command") or "")' 2>/dev/null || true)
elif command -v node >/dev/null 2>&1; then
  cmd=$(printf '%s' "$input" | node -e 'let d="";process.stdin.on("data",c=>d+=c);process.stdin.on("end",()=>{try{console.log(JSON.parse(d).command||"")}catch{console.log("")}}')
else
  cmd="$input"
fi

deny() {
  local msg="$1"
  # Fixed JSON — messages are static literals from this script only
  case "$msg" in
    force) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook: force-push is not allowed for unattended or agent sessions.","agent_message":"Blocked by AI org hook: force-push is not allowed for unattended or agent sessions."}' ;;
    secret) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook: possible secret exfiltration pattern.","agent_message":"Blocked by AI org hook: possible secret exfiltration pattern."}' ;;
    *) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook.","agent_message":"Blocked by AI org hook."}' ;;
  esac
  exit 0
}

deny_iso() {
  printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook: git must run in one product repo, not the SSD root or a mixed path. Open the product folder and start a new chat.","agent_message":"Blocked by AI org hook: cross-project git. Use git -C <bound-path> inside one registry project only."}'
  exit 0
}

# Force push
if echo "$cmd" | grep -Eqi 'git[[:space:]]+push[[:space:]]+.*--force|[[:space:]]+-f[[:space:]]+.*origin|push[[:space:]]+--force-with-lease'; then
  deny force
fi

# Cross-project / SSD-root git (project isolation)
if echo "$cmd" | grep -Eqi 'git[[:space:]]+-C[[:space:]]+"?/Volumes/SSD"?[[:space:]]'; then
  deny_iso
fi
if echo "$cmd" | grep -Eqi 'git[[:space:]]+(add|commit|push|mv|rm|restore|stash)'; then
  hits=$(printf '%s' "$cmd" | python3 -c '
import sys
cmd=sys.stdin.read()
names=["StrataIQ","SuperKalooki","superkalooki-website","JobSearchAI","Tournament Manager","VerixCredit","ScriberInk","fawilli-workspace"]
print(sum(1 for n in names if ("/Volumes/SSD/"+n) in cmd))
' 2>/dev/null || echo 0)
  if [ "${hits:-0}" -ge 2 ]; then
    deny_iso
  fi
fi

# Secret exfil patterns
if echo "$cmd" | grep -Eqi 'curl[[:space:]].*(Authorization:|x-api-key|api_key=)|env[[:space:]]*\|[[:space:]]*curl|cat[[:space:]]+.*\.(pem|p12|key)[[:space:]]*\|[[:space:]]*curl|printenv[[:space:]]*\|[[:space:]]*(curl|nc|wget)'; then
  deny secret
fi

printf '%s\n' '{"permission":"allow"}'
exit 0
