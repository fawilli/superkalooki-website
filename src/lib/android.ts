/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 60
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-60.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'
export const ANDROID_APK_SHA256 =
  '7941f7097605c6e5c44e0c945f3bfd8e9fecbdfade6b35c46a843e7b5020d3bf'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
