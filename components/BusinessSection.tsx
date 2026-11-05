import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const customers = [
  "Officine meccaniche",
  "Fabbri e carpenterie",
  "Serramentisti",
  "Elettricisti e idraulici",
  "Imprese edili",
  "Aziende agricole e industrie"
];

export default function BusinessSection() {
  return (
    <section className="metal-noise border-y border-white/10">
      <div className="container-boch grid gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Servizio B2B</p>
          <h2 className="yellow-line mt-3 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
            SEI UN&apos;AZIENDA?
          </h2>
          <p className="mt-7 max-w-2xl text-2xl font-black">
            Hai rottami metallici da ritirare?
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Ci rivolgiamo a imprese e attività che producono rottami metallici e vogliono organizzare un ritiro.
          </p>
          <Link
            href="/contatti"
            className="focus-ring mt-8 inline-flex items-center gap-2 bg-[#ffc400] px-6 py-4 font-black text-black hover:bg-white"
          >
            PARLA CON NOI <ArrowRight size={19} />
          </Link>
        </div>

        <div className="border border-white/10 bg-black/40 p-7">
          <p className="mb-5 text-xs font-black uppercase tracking-widest text-white/45">Clienti ideali</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {customers.map((customer) => (
              <li key={customer} className="flex items-center gap-3 text-sm font-bold">
                <Check size={18} className="shrink-0 text-[#ffc400]" />
                {customer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
