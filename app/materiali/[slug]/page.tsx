import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { business } from "@/lib/constants";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return business.materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = business.materials.find((item) => item.slug === slug);
  if (!material) return { title: "Materiale" };
  return {
    title: `Ritiro ${material.name}`,
    description: `${material.description} BOCH FERRO ROTTAMI.`
  };
}

export default async function MaterialDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = business.materials.find((item) => item.slug === slug);
  if (!material) notFound();

  return (
    <div className="container-boch py-16 sm:py-24">
      <Link href="/materiali" className="focus-ring inline-flex items-center gap-2 text-sm font-black text-[#ffc400]">
        <ArrowLeft size={17} /> TORNA AI MATERIALI
      </Link>
      <p className="mt-12 text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Materiale</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">{material.name}</h1>
      <p className="mt-8 max-w-2xl text-xl leading-8 text-white/65">{material.description}</p>
      <p className="mt-5 max-w-2xl leading-7 text-white/50">
        Per verificare disponibilità, quantità e modalità del ritiro, inviaci una richiesta con il comune e una descrizione del materiale.
      </p>
      <Link href="/contatti" className="focus-ring mt-9 inline-flex items-center gap-2 bg-[#ffc400] px-6 py-4 font-black text-black">
        RICHIEDI UN RITIRO <ArrowRight size={18} />
      </Link>
    </div>
  );
}
