export type ClientPlatform = 'ios' | 'android' | 'other'

export function detectClientPlatform(userAgent: string): ClientPlatform {
  if (/android/i.test(userAgent)) return 'android'
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios'
  return 'other'
}
