import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

/**
 * Installazione GTM consigliata per Next.js App Router:
 * - dataLayer inizializzato prima di qualsiasi script (beforeInteractive)
 * - gtm.js caricato in modo asincrono dopo l'idratazione (afterInteractive)
 * - noscript inserito subito dopo l'apertura di <body> in app/layout.tsx
 * Un solo ID, una sola installazione, nessun impatto sul rendering della pagina.
 */
export default function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-data-layer" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });`}
      </Script>
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
    </>
  );
}
