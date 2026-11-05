import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pb-24 md:pb-8">
      <div className="container-boch grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src="/images/boch-logo.png" alt="BOCH FERRO ROTTAMI" width={180} height={110} className="h-16 w-auto object-contain" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">{business.tagline}</p>
          <p className="mt-3 text-xs text-white/35">Ferro • Rame • Ottone • Alluminio • Cavi</p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-[#ffc400]">Navigazione</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <Link href="/servizi" className="hover:text-white">Servizi</Link>
            <Link href="/materiali" className="hover:text-white">Materiali</Link>
            <Link href="/aziende" className="hover:text-white">Per Aziende</Link>
            <Link href="/zona-di-ritiro" className="hover:text-white">Zona di Ritiro</Link>
            <Link href="/contatti" className="hover:text-white">Contatti</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-[#ffc400]">Zone</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/60">
            {business.areas.slice(0, 6).map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </div>
      <div className="container-boch flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 BOCH FERRO ROTTAMI</span>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
