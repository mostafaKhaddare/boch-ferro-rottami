import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { business } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "BOCH FERRO ROTTAMI | Ritiro Rottami Metallici in Piemonte",
    template: "%s | BOCH FERRO ROTTAMI"
  },
  description: business.description,
  applicationName: "BOCH FERRO ROTTAMI",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: business.name,
    title: "BOCH FERRO ROTTAMI | Ritiro Rottami Metallici in Piemonte",
    description: business.description
  },
  twitter: {
    card: "summary_large_image",
    title: "BOCH FERRO ROTTAMI",
    description: business.description
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    areaServed: business.areas.map((name) => ({
      "@type": "City",
      name
    }))
  };

  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-black/95 p-2 backdrop-blur">
          <a
            href="/contatti"
            className="focus-ring flex min-h-12 items-center justify-center bg-[#ffc400] px-4 text-sm font-black text-black"
          >
            RICHIEDI UN RITIRO
          </a>
          <a
            href="/contatti#whatsapp"
            className="focus-ring flex min-h-12 items-center justify-center border border-[#ffc400] bg-black px-4 text-sm font-black text-white"
          >
            WHATSAPP
          </a>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
