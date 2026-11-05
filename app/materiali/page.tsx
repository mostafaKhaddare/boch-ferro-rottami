import type { Metadata } from "next";
import MaterialCard from "@/components/MaterialCard";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Materiali",
  description: "Ferro, acciaio, rame, ottone, alluminio e cavi: materiali per cui puoi richiedere informazioni sul ritiro."
};

export default function MaterialiPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Cosa ritiriamo</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">MATERIALI</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
        Ferro, acciaio e metalli non ferrosi. Per qualsiasi materiale non presente nell&apos;elenco, contattaci per una verifica.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {business.materials.map((material) => <MaterialCard key={material.slug} {...material} />)}
      </div>
    </div>
  );
}
