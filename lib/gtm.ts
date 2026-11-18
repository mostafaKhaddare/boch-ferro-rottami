export const GTM_ID = "GTM-N3MXCJDG";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Invia un evento al dataLayer senza interrompere l'esperienza se GTM non è disponibile. */
export function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
