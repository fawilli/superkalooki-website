/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 61
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-61.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'
export const ANDROID_APK_SHA256 =
  'c9beb6ae4438c780587b361923a66f55074b6fa59687e19f7cf490b46fab904d'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
