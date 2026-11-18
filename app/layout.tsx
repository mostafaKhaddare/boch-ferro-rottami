import type { Metadata } from "next";
import "./globals.css";
import { business, getWhatsAppUrl, hasWhatsApp } from "@/lib/constants";
import { GTM_ID } from "@/lib/gtm";
import GoogleTagManager from "@/components/GoogleTagManager";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "BOCH FERRO ROTTAMI | Recupero e Commercio Rottami Metallici",
    template: "%s | BOCH FERRO ROTTAMI"
  },
  description:
    "BOCH FERRO ROTTAMI: recupero e commercio di rottami ferrosi e metalli non ferrosi. Scopri i servizi dedicati ad aziende e privati.",
  applicationName: "BOCH FERRO ROTTAMI",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  verification: {
    google: "DpMjB0T5x_tUthToHe_m7h5C2fNmQtRigagMM8oQYi4"
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: business.name,
    url: "/",
    title: "BOCH FERRO ROTTAMI | Recupero e Commercio Rottami Metallici",
    description:
      "Recupero e commercio di rottami ferrosi e metalli non ferrosi per aziende e privati.",
    images: [{ url: "/images/hero/boch-hero.webp", width: 1920, height: 1072, alt: "Recupero rottami metallici" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BOCH FERRO ROTTAMI | Recupero e Commercio Rottami Metallici",
    description:
      "Recupero e commercio di rottami ferrosi e metalli non ferrosi per aziende e privati.",
    images: ["/images/hero/boch-hero.webp"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = business.siteUrl.replace(/\/$/, "");

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.siteUrl,
    description: business.description,
    logo: `${siteUrl}/images/boch-logo.png`,
    ...(business.email ? { email: business.email } : {}),
    areaServed: { "@type": "AdministrativeArea", name: business.areaServedName }
  };

  // RecyclingCenter è un sottotipo di LocalBusiness: solo dati verificati presenti nel progetto.
  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    name: business.name,
    url: business.siteUrl,
    description: business.description,
    image: `${siteUrl}/images/hero/boch-hero.webp`,
    ...(business.email ? { email: business.email } : {}),
    areaServed: business.areas.map((name) => ({ "@type": "City", name }))
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.siteUrl,
    inLanguage: "it-IT"
  };

  return (
    <html lang="it">
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <GoogleTagManager />
        <a href="#contenuto" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-[#ffc400] focus:px-4 focus:py-2 focus:font-black focus:text-black">
          Salta al contenuto
        </a>
        <Navbar />
        <main id="contenuto">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <div className={`fixed bottom-0 left-0 right-0 z-50 grid border-t border-white/10 bg-black/95 p-2 backdrop-blur md:hidden ${hasWhatsApp() ? "grid-cols-2" : "grid-cols-1"}`}>
          <a href="/contatti" className="focus-ring flex min-h-12 items-center justify-center bg-[#ffc400] px-3 text-center text-xs font-black text-black sm:text-sm">
            RICHIEDI UN PREVENTIVO
          </a>
          {hasWhatsApp() ? (
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="focus-ring flex min-h-12 items-center justify-center border border-[#ffc400] bg-black px-4 text-sm font-black text-white">
              WHATSAPP
            </a>
          ) : null}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </body>
    </html>
  );
}
