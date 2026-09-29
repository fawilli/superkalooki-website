/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 64
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-64.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'

/** Public Android download. Set false to hide every Android button without removing the APK. */
export const ANDROID_DOWNLOAD_PUBLIC = true
export const ANDROID_APK_SHA256 =
  '0e5abda70db063f736ccf42c734d1e63aeda6fea7cd033835f05273f4f991c82'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
