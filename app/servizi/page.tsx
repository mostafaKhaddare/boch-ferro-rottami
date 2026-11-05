import type { Metadata } from "next";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Servizi di ritiro e recupero di rottami metallici per aziende e privati."
};

export default function ServiziPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">BOCH FERRO ROTTAMI</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">SERVIZI</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
        Soluzioni per organizzare il ritiro di rottami metallici presso aziende e privati.
      </p>
      <div className="mt-12"><Services /></div>
      <div className="mt-20">
        <h2 className="mb-10 text-3xl font-black uppercase">Come funziona</h2>
        <HowItWorks />
      </div>
    </div>
  );
}
