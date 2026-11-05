import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servizi di Recupero Rottami Metallici",
  description:
    "Servizi di recupero rottami ferrosi, metalli non ferrosi, raccolta materiali metallici e soluzioni per aziende e cantieri.",
  alternates: { canonical: "/servizi" },
  openGraph: {
    title: "Servizi di Recupero Rottami Metallici | BOCH FERRO ROTTAMI",
    description:
      "Scopri i servizi di recupero e valorizzazione dei metalli per aziende e privati.",
    url: "/servizi",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/images/servizi/rottami-ferrosi.jpg", alt: "Servizi di recupero rottami metallici" }]
  }
};

export default function ServiziPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">BOCH FERRO ROTTAMI</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">I NOSTRI SERVIZI</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68">
        Soluzioni per il recupero e la valorizzazione dei metalli, con attenzione ai materiali e alle esigenze di aziende e privati.
      </p>
      <div className="mt-12">
        <Services items={services} />
      </div>
      <div className="mt-12 border border-white/10 bg-[#111111] p-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-lg font-black uppercase">Hai bisogno di un servizio di recupero rottami? Contattaci.</p>
        <Link href="/contatti" className="focus-ring mt-5 inline-flex items-center gap-2 bg-[#ffc400] px-6 py-4 font-black text-black hover:bg-white sm:mt-0">
          RICHIEDI UN PREVENTIVO <ArrowRight size={18} />
        </Link>
      </div>
      <div className="mt-20">
        <h2 className="mb-10 text-3xl font-black uppercase">Come funziona</h2>
        <HowItWorks />
      </div>
    </div>
  );
}
