# Flow: Android download

**Project:** superkalooki-website
**User / job:** An Android player who wants Super Kalooki on their phone from superkalooki.com
**Business outcome:** Android acquisition via a one-tap download; iOS App Store stays the peer CTA
**Design system:** infer from shipped UI (`globals.css` felt/gold/ivory)
**Recommendation:** Gold **Download for Android** with the Android robot, paired with the App Store badge, plus three install steps. The phone scroll bar shows both buttons. No hashes, package names, or file jargon.
**Do not:** Show SHA-256, version codes, or “APK” in the UI. Do not use the Google Play badge.

## Primary path
1. Visitor taps **Download for Android**.
2. The file saves. They open it from the download bar or Downloads.
3. The phone asks to install. They tap Allow if asked, then Install.

## Edge paths
- Empty: N/A (file is static in `public/downloads/`).
- Loading: native browser download UI.
- Error / recovery: tap the same button again.
- Permission denied: tap Allow when the phone asks, then Install.
- Cancel / back: leaving the prompt does not install; the file stays in Downloads.

## Screens
| Screen | Purpose | Primary action | States |
|---|---|---|---|
| Home / Play / About | Dual-platform download | App Store or Download for Android | Three install steps under the Android button |
| `/android/` | Dedicated install page | Download for Android | Same button + steps, no extra metadata |
| Sticky bar (phones) | Both downloads after scroll | App Store and Android, side by side | Hidden until scroll; Android uses the robot mark |

## Accessibility and platform
- Touch targets ≥ 44×44 on mobile; visible focus; reduced motion
- Platform: marketing web; Android uses the system install prompt
- Copy names what the player taps — never SHA, package ID, or filename

## Done when
- [ ] Download button starts the file download
- [ ] Install steps are visible next to the button
- [ ] No SHA-256, package name, or “APK” in player-facing copy
