/** Production Android APK hosted on superkalooki.com — sideload, not Play Store. */

export const ANDROID_PACKAGE_ID = 'com.game.superkalooki'
export const ANDROID_VERSION_NAME = '1.6'
export const ANDROID_VERSION_CODE = 63
export const ANDROID_APK_FILENAME = 'SuperKalooki-1.6-63.apk'
export const ANDROID_APK_PATH = `/downloads/${ANDROID_APK_FILENAME}`
export const ANDROID_PAGE_PATH = '/android/'

/** Public Android download. Set false to hide every Android button without removing the APK. */
export const ANDROID_DOWNLOAD_PUBLIC = true
export const ANDROID_APK_SHA256 =
  '5eea3dc802f829d28f8aaee1894d3555f4c2c3bac350b5cee0dd6223a78db0ee'

export function androidApkAbsoluteUrl(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com',
): string {
  return `${siteUrl.replace(/\/$/, '')}${ANDROID_APK_PATH}`
}
