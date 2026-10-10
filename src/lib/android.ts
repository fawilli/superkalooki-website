/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.8'
export const ANDROID_VERSION_CODE = 71
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.8-71.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'

/** Public Android download. Set false to hide every Android button without removing the APK. */
export const ANDROID_DOWNLOAD_PUBLIC = true
export const ANDROID_APK_SHA256 =
  '80f8211863b43ec6add6196c8727049e4bf5d09ea54f07703c4f89c10e2fad38'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
