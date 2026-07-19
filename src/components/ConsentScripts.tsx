import Script from 'next/script'

/** Cookiebot + Google Consent Mode v2 defaults (ported from legacy site). */
export function ConsentScripts() {
  return (
    <>
      <Script
        id="cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        strategy="beforeInteractive"
        data-cbid="f538bdab-f48a-43a4-857b-4bd65378ff41"
        data-blockingmode="auto"
        type="text/javascript"
      />
      <Script id="consent-mode-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_personalization: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', false);
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GT-KFHT9GHL"
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-KFHT9GHL');
          gtag('config', 'G-SL2JT4PC9T');
        `}
      </Script>
    </>
  )
}
