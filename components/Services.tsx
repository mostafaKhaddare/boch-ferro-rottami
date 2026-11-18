import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Coins, Factory, HardHat, Recycle, Truck } from "lucide-react";
import type { Service, ServiceIcon } from "@/lib/services";

const icons: Record<ServiceIcon, typeof Factory> = {
  factory: Factory,
  coins: Coins,
  truck: Truck,
  building: Building2,
  hardhat: HardHat,
  recycle: Recycle
};

export default function Services({ items }: { items: readonly Service[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.slug}
            className="lift group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111111]"
          >
            <Link
              href={`/servizi/${service.slug}`}
              className="focus-ring relative block aspect-[16/10] overflow-hidden"
              aria-label={`Scopri il servizio: ${service.title}`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center bg-[#ffc400] text-black shadow-lg">
                <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffc400]">{service.eyebrow}</p>
              <h3 className="mt-2 text-xl font-black uppercase leading-tight text-white">
                <Link href={`/servizi/${service.slug}`} className="focus-ring transition hover:text-[#ffc400]">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/68">{service.shortDescription}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  href={`/servizi/${service.slug}`}
                  className="focus-ring inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#ffc400] transition hover:text-white"
                >
                  Scopri il servizio <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/contatti?servizio=${service.slug}`}
                  className="focus-ring text-sm font-bold text-white/60 transition hover:text-white"
                >
                  Richiedi informazioni
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
