/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 57
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-57.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'
export const ANDROID_APK_SHA256 =
  'd30f0d66bf8d66b0cc7dcb88c11dfe4120f445655cd4b5b96ab98a531caff3fd'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
