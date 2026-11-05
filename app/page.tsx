import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import MaterialCard from "@/components/MaterialCard";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BusinessSection from "@/components/BusinessSection";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import { business, imageSources } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-[#050505] py-16">
        <div className="container-boch grid gap-5 md:grid-cols-3">
          {[
            [Truck, "Ritiro presso il cliente", "Servizio pensato per aziende e privati."],
            [Zap, "Contatto rapido", "Richiedi informazioni tramite telefono o WhatsApp."],
            [ShieldCheck, "Approccio professionale", "Informazioni chiare e servizio organizzato."]
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="flex gap-4 border border-white/10 bg-[#111111] p-5">
              <Icon className="mt-1 shrink-0 text-[#ffc400]" size={25} />
              <div>
                <h2 className="font-black uppercase">{title as string}</h2>
                <p className="mt-1 text-sm text-white/55">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-boch py-20" id="materiali">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Cosa ritiriamo</p>
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

      <section className="bg-[#0b0b0b] py-20">
        <div className="container-boch">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Cosa facciamo</p>
            <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">I NOSTRI SERVIZI</h2>
          </div>
          <Services />
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

      <ServiceArea />

      <section className="container-boch grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">BOCH FERRO ROTTAMI</p>
          <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">
            UN CONTATTO PER IL TUO ROTTAME
          </h2>
          <p className="mt-7 max-w-xl leading-7 text-white/65">
            Raccontaci che materiale hai, dove si trova e la quantità indicativa. Ti ricontatteremo per verificare la disponibilità del ritiro.
          </p>
          <Link href="/contatti" className="focus-ring mt-8 inline-flex bg-[#ffc400] px-6 py-4 font-black text-black hover:bg-white">
            RICHIEDI UN RITIRO
          </Link>
        </div>
        <div className="relative min-h-[360px] overflow-hidden border border-white/10">
          <Image src={imageSources.metal} alt="Lavorazione e metalli in ambiente industriale" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

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
