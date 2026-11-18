import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MaterialCard from "@/components/MaterialCard";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Materiali Metallici",
  description:
    "Ferro, acciaio, rame, ottone, alluminio e cavi: materiali metallici trattati per recupero e valorizzazione.",
  alternates: { canonical: "/materiali" }
};

export default function MaterialiPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Materiali" }]} />
      <div className="container-boch py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Cosa trattiamo</p>
        <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">MATERIALI</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
          Ferro, acciaio e metalli non ferrosi. Per ogni materiale trovi informazioni su cosa ritiriamo, come avviene il recupero e quali servizi sono collegati.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.materials.map((material) => <MaterialCard key={material.slug} {...material} />)}
        </div>
        <p className="mt-10 text-sm text-white/60">
          Per materiali non presenti nell&apos;elenco, contattaci per una verifica. Scopri anche i{" "}
          <Link href="/servizi" className="focus-ring font-black text-[#ffc400] hover:text-white">servizi di recupero e ritiro</Link>.
        </p>
      </div>
    </>
  );
}
