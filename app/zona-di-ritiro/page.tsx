import type { Metadata } from "next";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Zona di Servizio",
  description:
    "Zona di servizio per recupero e raccolta di rottami metallici nelle aree indicate in Piemonte. Contattaci per verificare la disponibilità.",
  alternates: { canonical: "/zona-di-ritiro" }
};

export default function ZonaPage() {
  return (
    <div>
      <section className="container-boch py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Servizio locale</p>
        <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">ZONA DI SERVIZIO</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
          Operiamo principalmente nelle aree indicate. Contattaci per verificare la disponibilità del servizio nella tua zona.
        </p>
      </section>
      <ServiceArea />
    </div>
  );
}
