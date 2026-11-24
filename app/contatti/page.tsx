import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { business, formatDisplayNumber, getPhoneUrl, getWhatsAppUrl, hasPhone, hasWhatsApp } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contatti e Richiesta Ritiro | BOCH FERRO ROTTAMI",
  description:
    "Contatta BOCH FERRO ROTTAMI per ritiro, recupero e acquisto di rottami metallici. Indica materiale, comune e quantità indicativa.",
  path: "/contatti",
  imageAlt: "Contatti BOCH FERRO ROTTAMI"
});

export default function ContattiPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contatti" }]} />
      <div className="container-boch py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Contatto</p>
        <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">Richiedi il ritiro dei tuoi rottami metallici</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
          Indicaci il materiale, il comune e una quantità indicativa. Ti ricontatteremo per verificare le informazioni e la disponibilità del servizio nelle aree servite in Piemonte.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
          <ContactForm />

          <aside className="space-y-4" aria-label="Canali di contatto">
            {hasWhatsApp() ? (
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp"
                className="focus-ring block border border-[#ffc400]/40 bg-[#ffc400] p-6 text-black"
              >
                <MessageCircle size={30} aria-hidden="true" />
                <h2 className="mt-6 text-xl font-black uppercase">WhatsApp</h2>
                <p className="mt-2 text-sm font-bold">Scrivici per informazioni sul materiale.</p>
              </a>
            ) : null}

            {hasPhone() ? (
              <a href={getPhoneUrl()} className="focus-ring block border border-white/10 bg-[#111111] p-6">
                <Phone size={27} className="text-[#ffc400]" aria-hidden="true" />
                <h2 className="mt-6 text-xl font-black uppercase">Telefono</h2>
                <p className="mt-2 text-sm text-white/60">{formatDisplayNumber(business.phone)}</p>
              </a>
            ) : null}

            {business.email ? (
              <a href={`mailto:${business.email}`} className="focus-ring block border border-white/10 bg-[#111111] p-6">
                <Mail size={27} className="text-[#ffc400]" aria-hidden="true" />
                <h2 className="mt-6 text-xl font-black uppercase">Email</h2>
                <p className="mt-2 text-sm text-white/60">{business.email}</p>
              </a>
            ) : null}

            {(business.legalName || business.address || business.vat || business.hours) ? (
              <div className="border border-white/10 bg-[#111111] p-6">
                <h2 className="text-xl font-black uppercase">Dati dell&apos;attività</h2>
                <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-white/65">
                  {business.legalName ? <p className="font-bold text-white/85">{business.legalName}</p> : null}
                  {business.address ? <p>{business.address}</p> : null}
                  {business.vat ? <p>P.IVA {business.vat}</p> : null}
                  {business.hours ? <p>Orari: {business.hours}</p> : null}
                </address>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </>
  );
}
