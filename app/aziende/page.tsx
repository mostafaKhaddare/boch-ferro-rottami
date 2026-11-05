import type { Metadata } from "next";
import Link from "next/link";
import { Check, Factory, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Per Aziende",
  description: "Ritiro di rottami metallici per officine, fabbri, carpenterie, serramentisti e altre attività."
};

const points = [
  "Ritiro direttamente presso la tua attività",
  "Possibilità di organizzare ritiri periodici",
  "Contatto rapido tramite telefono o WhatsApp",
  "Valutazione del materiale e della quantità",
  "Servizio orientato alle esigenze delle attività locali"
];

export default function AziendePage() {
  return (
    <div>
      <section className="metal-noise border-b border-white/10">
        <div className="container-boch py-20 sm:py-28">
          <Factory className="text-[#ffc400]" size={42} />
          <h1 className="yellow-line mt-5 max-w-4xl text-5xl font-black uppercase leading-tight sm:text-7xl">
            SEI UN&apos;AZIENDA?
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-bold leading-8 text-white/75">
            Hai rottami metallici da ritirare? Parliamone.
          </p>
        </div>
      </section>

      <section className="container-boch grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black uppercase">A chi ci rivolgiamo</h2>
          <p className="mt-5 leading-7 text-white/60">
            Officine meccaniche, fabbri, carpenterie, serramentisti, elettricisti, idraulici, imprese edili, aziende agricole e attività industriali.
          </p>
          <Link href="/contatti" className="focus-ring mt-8 inline-flex items-center gap-2 bg-[#ffc400] px-6 py-4 font-black text-black">
            RICHIEDI UN RITIRO <ArrowRight size={18} />
          </Link>
        </div>
        <div className="border border-white/10 bg-[#111111] p-7">
          <ul className="grid gap-5">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-bold">
                <Check className="shrink-0 text-[#ffc400]" size={19} /> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
