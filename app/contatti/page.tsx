import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { business, getPhoneUrl, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Richiedi un ritiro di rottami metallici presso BOCH FERRO ROTTAMI."
};

export default function ContattiPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Contatto</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">RICHIEDI UN RITIRO</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
        Indicaci il materiale, il comune e la quantità indicativa. Per una risposta più rapida puoi usare WhatsApp.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
        <ContactForm />

        <aside className="space-y-4">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" id="whatsapp" className="focus-ring block border border-[#ffc400]/40 bg-[#ffc400] p-6 text-black">
            <MessageCircle size={30} />
            <h2 className="mt-6 text-xl font-black uppercase">WhatsApp</h2>
            <p className="mt-2 text-sm font-bold">Scrivici per informazioni e foto del materiale.</p>
          </a>

          <a href={getPhoneUrl()} className="focus-ring block border border-white/10 bg-[#111111] p-6">
            <Phone size={27} className="text-[#ffc400]" />
            <h2 className="mt-6 text-xl font-black uppercase">Chiama ora</h2>
            <p className="mt-2 text-sm text-white/55">{business.phone || "Numero da configurare"}</p>
          </a>

          <a href={business.email ? `mailto:${business.email}` : "#"} className="focus-ring block border border-white/10 bg-[#111111] p-6">
            <Mail size={27} className="text-[#ffc400]" />
            <h2 className="mt-6 text-xl font-black uppercase">Email</h2>
            <p className="mt-2 text-sm text-white/55">{business.email || "Email da configurare"}</p>
          </a>
        </aside>
      </div>
    </div>
  );
}
