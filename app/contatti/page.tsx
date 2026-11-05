import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { business, getPhoneUrl, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta BOCH FERRO ROTTAMI per informazioni su recupero, raccolta e valorizzazione di rottami metallici.",
  alternates: { canonical: "/contatti" }
};

export default function ContattiPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Contatto</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">RICHIEDI INFORMAZIONI</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
        Indicaci il materiale, il comune e una quantità indicativa. Ti ricontatteremo per verificare le informazioni e la disponibilità del servizio.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
        <ContactForm />

        <aside className="space-y-4" aria-label="Canali di contatto">
          <a
            href={getWhatsAppUrl()}
            target={business.whatsapp ? "_blank" : undefined}
            rel={business.whatsapp ? "noopener noreferrer" : undefined}
            id="whatsapp"
            className="focus-ring block border border-[#ffc400]/40 bg-[#ffc400] p-6 text-black"
          >
            <MessageCircle size={30} aria-hidden="true" />
            <h2 className="mt-6 text-xl font-black uppercase">WhatsApp</h2>
            <p className="mt-2 text-sm font-bold">
              {business.whatsapp ? "Scrivici per informazioni sul materiale." : "Numero WhatsApp da configurare."}
            </p>
          </a>

          <a href={getPhoneUrl()} className="focus-ring block border border-white/10 bg-[#111111] p-6">
            <Phone size={27} className="text-[#ffc400]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-black uppercase">Telefono</h2>
            <p className="mt-2 text-sm text-white/60">{business.phone || "Numero da configurare"}</p>
          </a>

          <a href={business.email ? `mailto:${business.email}` : "#"} className="focus-ring block border border-white/10 bg-[#111111] p-6">
            <Mail size={27} className="text-[#ffc400]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-black uppercase">Email</h2>
            <p className="mt-2 text-sm text-white/60">{business.email || "Email da configurare"}</p>
          </a>
        </aside>
      </div>
    </div>
  );
}
