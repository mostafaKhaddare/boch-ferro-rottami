import {
  Box,
  Cable,
  Factory,
  Settings,
  Wrench,
  Zap,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const icons = { wrench: Wrench, factory: Factory, cable: Cable, settings: Settings, box: Box, zap: Zap };

export default function MaterialCard({
  name,
  slug,
  description,
  icon
}: {
  name: string;
  slug: string;
  description: string;
  icon: keyof typeof icons;
}) {
  const Icon = icons[icon];

  return (
    <Link
      href={`/materiali/${slug}`}
      className="lift group focus-ring block border border-white/10 bg-[#111111] p-6"
    >
      <div className="mb-8 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center bg-[#ffc400] text-black">
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <ArrowUpRight className="text-white/30 transition group-hover:text-[#ffc400]" />
      </div>
      <h3 className="text-2xl font-black uppercase">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
    </Link>
  );
}
