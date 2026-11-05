import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Coins, Factory, HardHat, Scale, Truck } from "lucide-react";

type Service = {
  title: string;
  image: string;
  alt: string;
  description: string;
  icon: string;
};

const icons = {
  factory: Factory,
  coins: Coins,
  truck: Truck,
  building: Building2,
  hardhat: HardHat,
  scale: Scale
} as const;

export default function Services({ items }: { items: readonly Service[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => {
        const Icon = icons[service.icon as keyof typeof icons] ?? Factory;
        return (
          <article
            key={service.title}
            className="lift group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111111]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center bg-[#ffc400] text-black shadow-lg">
                <Icon size={22} strokeWidth={2.4} />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-black uppercase leading-tight text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/68">{service.description}</p>
              <Link
                href="/contatti"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#ffc400] transition hover:text-white"
              >
                Richiedi informazioni <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
