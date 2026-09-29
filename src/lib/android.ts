/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 62
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-62.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'

/** Public Android download. Set false to hide every Android button without removing the APK. */
export const ANDROID_DOWNLOAD_PUBLIC = true
export const ANDROID_APK_SHA256 =
  '1a6826250a6fed303e0fbc8af787f8f3ed6a2b692b93d2bd27850413b02f0dba'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
