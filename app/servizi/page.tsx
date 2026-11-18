import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import { business } from "@/lib/constants";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servizi di Recupero Rottami Metallici",
  description:
    "Servizi di recupero, ritiro e acquisto di rottami ferrosi e metalli non ferrosi per aziende, privati, cantieri e attività agricole in Piemonte.",
  alternates: { canonical: "/servizi" },
  openGraph: {
    title: "Servizi di Recupero Rottami Metallici | BOCH FERRO ROTTAMI",
    description:
      "Scopri i servizi di recupero, ritiro e valorizzazione dei metalli per aziende e privati.",
    url: "/servizi",
    locale: "it_IT",
    type: "website",
    siteName: business.name,
    images: [{ url: "/images/servizi/ritiro-rottami.jpg", alt: "Servizi di recupero rottami metallici" }]
  }
};

export default function ServiziPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Servizi" }]} />
      <div className="container-boch py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">BOCH FERRO ROTTAMI</p>
        <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">I NOSTRI SERVIZI</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68">
          Ritiro, recupero, selezione e acquisto di rottami metallici. Ogni servizio è pensato per una tipologia di materiale e di cliente: scegli quello che descrive meglio la tua richiesta.
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
        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-black uppercase">Servizio locale in Piemonte</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/65">
            Operiamo a {business.areas.slice(0, -1).join(", ")} e {business.areas.at(-1)}, oltre che nei comuni limitrofi. Indicaci sempre il comune nella richiesta: verifichiamo la disponibilità in base al materiale.
          </p>
          <Link href="/zona-di-ritiro" className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-black text-[#ffc400] hover:text-white">
            VEDI LA ZONA DI SERVIZIO <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
