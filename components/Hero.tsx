import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Truck } from "lucide-react";
import { imageSources } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10">
      <Image
        src={imageSources.hero}
        alt="Rottami metallici in un ambiente industriale"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      <div className="absolute inset-0 industrial-grid opacity-40" />

      <div className="container-boch relative flex min-h-[680px] items-center py-20">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 border border-[#ffc400]/40 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#ffc400]">
            <Truck size={16} /> Piemonte · Ritiro locale
          </div>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
            RITIRO <span className="text-[#ffc400]">ROTTAMI</span> METALLICI
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-bold text-white sm:text-2xl">
            Ferro, rame, ottone, alluminio e cavi.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Ritiro presso aziende e privati in Piemonte, con particolare attenzione a Nizza Monferrato, Canelli, Calamandrana, Incisa Scapaccino, Acqui Terme e Asti.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contatti"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffc400] px-7 text-base font-black text-black transition hover:bg-white"
            >
              RICHIEDI UN RITIRO <ArrowRight size={20} />
            </Link>
            <Link
              href="/contatti#whatsapp"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 border border-[#ffc400] bg-black/60 px-7 text-base font-black text-white transition hover:bg-[#ffc400] hover:text-black"
            >
              <MessageCircle size={20} /> WHATSAPP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
