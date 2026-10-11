/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.8'
export const ANDROID_VERSION_CODE = 72
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.8-72.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'

/** Public Android download. Set false to hide every Android button without removing the APK. */
export const ANDROID_DOWNLOAD_PUBLIC = true
export const ANDROID_APK_SHA256 =
  '03f3a5c06fa684a5847aa3fc605e96f4b06daced913e17387e7ae3566bd39f93'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
