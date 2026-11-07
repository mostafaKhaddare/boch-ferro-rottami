import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Recycle, ShieldCheck, Truck } from "lucide-react";
import Hero from "@/components/Hero";
import MaterialCard from "@/components/MaterialCard";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BusinessSection from "@/components/BusinessSection";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import { business, heroSlides, services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BOCH FERRO ROTTAMI | Recupero e Commercio Rottami Metallici",
  description:
    "BOCH FERRO ROTTAMI: recupero e commercio di rottami ferrosi e metalli non ferrosi. Scopri i servizi dedicati ad aziende e privati.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BOCH FERRO ROTTAMI | Recupero e Commercio Rottami Metallici",
    description:
      "BOCH FERRO ROTTAMI: recupero e commercio di rottami ferrosi e metalli non ferrosi. Scopri i servizi dedicati ad aziende e privati.",
    url: "/",
    locale: "it_IT",
    type: "website",
    siteName: business.name,
    images: [{ url: "/images/hero/rottami-metallici.jpg", alt: "Recupero e commercio rottami metallici" }]
  }
};

export default function HomePage() {
  return (
    <>
      <Hero slides={heroSlides} />
            <ServiceArea />

      <section className="bg-[#050505] py-16">
        <div className="container-boch grid gap-5 md:grid-cols-3">
          {[
            [Truck, "Soluzioni per aziende e privati", "Servizi dedicati alla raccolta e al recupero di materiali metallici."],
            [Recycle, "Valorizzazione dei materiali", "Gestione orientata al recupero di ferro, rame, alluminio, ottone e altri metalli."],
            [ShieldCheck, "Approccio professionale", "Informazioni chiare e attenzione alle esigenze del settore industriale e privato."]
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="flex gap-4 border border-white/10 bg-[#111111] p-5">
              <Icon className="mt-1 shrink-0 text-[#ffc400]" size={25} />
              <div>
                <h2 className="font-black uppercase">{title as string}</h2>
                <p className="mt-1 text-sm text-white/60">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="container-boch py-20" id="materiali">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Cosa trattiamo</p>
            <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">MATERIALI</h2>
          </div>
          <Link href="/materiali" className="focus-ring inline-flex items-center gap-2 text-sm font-black text-[#ffc400] hover:text-white">
            VEDI TUTTI I MATERIALI <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.materials.map((material) => <MaterialCard key={material.slug} {...material} />)}
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-20" id="servizi">
        <div className="container-boch">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">I nostri servizi</p>
            <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">
              Soluzioni per il Recupero e la Valorizzazione dei Metalli
            </h2>
            <p className="mt-6 text-base leading-7 text-white/65">
              Affidabilità, attenzione ai materiali e soluzioni dedicate al settore industriale e privato.
            </p>
          </div>
          <Services items={services} />
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border border-white/10 bg-[#111111] p-6 sm:flex-row sm:items-center">
            <p className="text-lg font-black uppercase">Hai bisogno di un servizio di recupero rottami? Contattaci.</p>
            <Link href="/contatti" className="focus-ring inline-flex items-center gap-2 bg-[#ffc400] px-6 py-4 font-black text-black transition hover:bg-white">
              RICHIEDI UN PREVENTIVO <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-boch py-20">
        <div className="mb-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Semplice e diretto</p>
          <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">COME FUNZIONA</h2>
        </div>
        <HowItWorks />
      </section>

      <BusinessSection />


      <section className="bg-[#0b0b0b] py-20">
        <div className="container-boch">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Domande frequenti</p>
            <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">FAQ</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
