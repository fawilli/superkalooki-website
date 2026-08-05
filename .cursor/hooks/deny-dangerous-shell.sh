#!/usr/bin/env bash
# Portfolio-portable deny hook for beforeShellExecution.
# Blocks force-push, common prod deploy CLIs, and secret-exfil patterns.
# Fail-closed when paired with failClosed: true in hooks.json.
set -euo pipefail

input=$(cat)
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
    prod) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook: production deploy/promote requires founder approval (agent-runtime).","agent_message":"Blocked by AI org hook: production deploy/promote requires founder approval (agent-runtime)."}' ;;
    secret) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook: possible secret exfiltration pattern.","agent_message":"Blocked by AI org hook: possible secret exfiltration pattern."}' ;;
    *) printf '%s\n' '{"permission":"deny","user_message":"Blocked by AI org hook.","agent_message":"Blocked by AI org hook."}' ;;
  esac
  exit 0
}

# Force push
if echo "$cmd" | grep -Eqi 'git[[:space:]]+push[[:space:]]+.*--force|[[:space:]]+-f[[:space:]]+.*origin|push[[:space:]]+--force-with-lease'; then
  deny force
fi

# Prod deploy CLIs / promote scripts (portable patterns — not product-specific)
if echo "$cmd" | grep -Eqi 'vercel[[:space:]]+(--prod|deploy[[:space:]]+.*--prod)|doctl[[:space:]]+apps[[:space:]]+create-deployment|ship-marketing\.sh[[:space:]]+--prod|promote-to-prod|deploy\.sh[[:space:]]+prod|kubectl[[:space:]]+.*[[:space:]]+apply.*prod'; then
  deny prod
fi

# Secret exfil patterns
if echo "$cmd" | grep -Eqi 'curl[[:space:]].*(Authorization:|x-api-key|api_key=)|env[[:space:]]*\|[[:space:]]*curl|cat[[:space:]]+.*\.(pem|p12|key)[[:space:]]*\|[[:space:]]*curl|printenv[[:space:]]*\|[[:space:]]*(curl|nc|wget)'; then
  deny secret
fi

printf '%s\n' '{"permission":"allow"}'
exit 0
