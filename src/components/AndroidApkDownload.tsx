import {ANDROID_APK_FILENAME, ANDROID_APK_PATH, ANDROID_VERSION_CODE, ANDROID_VERSION_NAME} from '@/lib/android'

type Props = {
  className?: string
  /** Numbered install steps under the button (default true). */
  showSteps?: boolean
}

export function AndroidApkDownload({className = '', showSteps = true}: Props) {
  return (
    <div className={`flex flex-col gap-4 max-w-md ${className}`.trim()}>
      <a
        aria-label="Download Super Kalooki for Android"
        className="inline-flex items-center justify-center min-h-12 px-6 rounded-xl bg-gold text-felt-deep text-[1rem] font-semibold no-underline whitespace-nowrap transition-colors hover:bg-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        data-cta="android-apk"
        data-cta-version={`${ANDROID_VERSION_NAME}-${ANDROID_VERSION_CODE}`}
        download={ANDROID_APK_FILENAME}
        href={ANDROID_APK_PATH}
      >
        Download for Android
      </a>
      {showSteps ? (
        <div>
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
