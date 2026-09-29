# Flow: Android APK download

**Project:** superkalooki-website
**User / job:** An Android player who wants Super Kalooki on their phone from superkalooki.com
**Business outcome:** Android acquisition via sideload APK; iOS App Store stays the peer CTA
**Design system:** infer from shipped UI (`globals.css` felt/gold/ivory)
**Recommendation:** Host the production APK on this site. Primary Android action is Download Android APK, with the SHA-256 digest beside the button. Install is the system unknown-source prompt.
**Do not:** Link to Google Play, show a Play badge, or present Android as a waitlist.

## Primary path
1. Visitor sees iOS App Store badge and Download Android APK on conversion surfaces.
2. They tap Download Android APK. The browser saves `SuperKalooki-1.6-57.apk`.
3. They open the file. Android asks to allow this site (unknown source), then Install.
4. Optional: they compare the on-page SHA-256 to `shasum -a 256` of the file.

## Edge paths
- Empty: N/A (file is static in `public/downloads/`).
- Loading: native browser download UI.
- Error / recovery: if the download fails, retry the same button; hash stays visible for a later verify.
- Permission denied: Android blocks unknown sources until the player allows this site.
- Cancel / back: leaving the prompt does not install; the APK remains in Downloads.

## Screens
| Screen | Purpose | Primary action | States |
|---|---|---|---|
| Home / Play / About badges | Dual-platform download | App Store or Download Android APK | SHA-256 beside Android button |
| `/android/` | Sideload instructions + verify | Download Android APK | Hash, version, install steps |
| Sticky bar (Android UA) | Resume download after scroll | Download Android APK | Hidden until scroll |

## Accessibility and platform
- Touch targets ≥ 44×44 on mobile; visible focus; reduced motion
- Platform: marketing web; Android install uses the OS unknown-source prompt
- Copy the digest without requiring hover; full hash remains visible (not truncated)

## Done when
- [ ] `https://superkalooki.com/downloads/SuperKalooki-1.6-57.apk` returns the APK
- [ ] SHA-256 on the page matches `d30f0d66bf8d66b0cc7dcb88c11dfe4120f445655cd4b5b96ab98a531caff3fd`
- [ ] No Google Play link or “coming soon” Play copy on conversion surfaces
- [ ] Copy describes allow-this-site, then Install
