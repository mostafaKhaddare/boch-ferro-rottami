import type { Metadata } from "next";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Zona di Ritiro",
  description: "Zone di servizio per il ritiro di rottami metallici nell'area di Nizza Monferrato, Canelli, Acqui Terme e Asti."
};

export default function ZonaPage() {
  return (
    <div>
      <section className="container-boch py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Servizio locale</p>
        <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">ZONA DI RITIRO</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
          Operiamo principalmente nell&apos;area di Nizza Monferrato, Canelli, Calamandrana, Incisa Scapaccino, Acqui Terme, Asti e comuni limitrofi.
        </p>
      </section>
      <ServiceArea />
    </div>
  );
}
