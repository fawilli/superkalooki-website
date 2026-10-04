import {AndroidMark} from '@/components/AndroidMark'
import {ANDROID_APK_FILENAME, ANDROID_APK_PATH, ANDROID_VERSION_CODE, ANDROID_VERSION_NAME} from '@/lib/android'

type Props = {
  className?: string
  /** Numbered install steps under the button (default true). */
  showSteps?: boolean
  /** Center the button when the parent CTA stack is centered. */
  centered?: boolean
  /** Gold only when this is the single primary on the Android page. */
  tone?: 'gold' | 'outline'
}

export function AndroidApkDownload({
  className = '',
  showSteps = true,
  centered = false,
  tone = 'outline',
}: Props) {
  return (
    <div className={`flex w-full max-w-md flex-col gap-4 ${centered ? 'items-center' : 'items-start'} ${className}`.trim()}>
      <a
        aria-label="Download Super Kalooki for Android"
        className={`sk-btn ${tone === 'gold' ? 'sk-btn--gold' : 'sk-btn--outline'}`}
        data-cta="android-apk"
        data-cta-version={`${ANDROID_VERSION_NAME}-${ANDROID_VERSION_CODE}`}
        download={ANDROID_APK_FILENAME}
        href={ANDROID_APK_PATH}
      >
        <AndroidMark className="size-6" />
        Download for Android
      </a>
      {showSteps ? (
        <div className={centered ? 'w-full text-left' : undefined}>
          <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-gold/80 m-0 mb-3">
            How to install
          </p>
          <ol className="text-[0.9375rem] text-ivory/70 leading-relaxed space-y-2 list-decimal pl-5 m-0">
            <li>Tap Download for Android.</li>
            <li>Open the file when it finishes. It usually appears at the bottom of the screen.</li>
            <li>Tap Install. If your phone asks for permission, tap Allow, then Install.</li>
          </ol>
        </div>
      ) : null}
    </div>
  )
}
