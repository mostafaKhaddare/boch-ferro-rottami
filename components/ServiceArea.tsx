import { MapPin } from "lucide-react";
import { business } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="industrial-grid bg-[#0a0a0a]">
      <div className="container-boch grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Zona di ritiro</p>
          <h2 className="yellow-line mt-3 text-4xl font-black uppercase sm:text-5xl">
            DOVE EFFETTUIAMO IL RITIRO
          </h2>
          <p className="mt-7 leading-7 text-white/65">
            Operiamo principalmente nell&apos;area indicata. Contattaci per verificare la disponibilità del servizio nella tua zona.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {business.areas.map((area) => (
            <div key={area} className="flex items-center gap-3 bg-[#111111] p-5">
              <MapPin size={19} className="text-[#ffc400]" />
              <span className="font-black uppercase">{area}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 bg-[#111111] p-5 sm:col-span-2">
            <MapPin size={19} className="text-[#ffc400]" />
            <span className="font-black uppercase">Comuni limitrofi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
