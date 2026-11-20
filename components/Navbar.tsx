"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { business, formatDisplayNumber, getWhatsAppUrl, hasWhatsApp } from "@/lib/constants";

const links = [
  ["Home", "/"],
  ["Servizi", "/servizi"],
  ["Materiali", "/materiali"],
  ["Per Aziende", "/aziende"],
  ["Zona di Ritiro", "/zona-di-ritiro"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
  ["Contatti", "/contatti"]
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/95 backdrop-blur">
      <div className="container-boch flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="BOCH FERRO ROTTAMI - Home" onClick={() => setOpen(false)} className="focus-ring">
          <Image
            src="/images/boch-logo.png"
            alt="BOCH FERRO ROTTAMI"
            width={180}
            height={110}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="Navigazione principale">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="focus-ring text-xs font-bold uppercase tracking-wide text-white/80 transition hover:text-[#ffc400] xl:text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        {hasWhatsApp() ? (
          <a
            href={getWhatsAppUrl("Buongiorno, vorrei informazioni su ritiro e recupero rottami metallici.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chiama ora ${formatDisplayNumber(business.whatsapp)} su WhatsApp`}
            className="focus-ring hidden bg-[#ffc400] px-5 py-2.5 text-black transition hover:bg-white lg:flex lg:items-center lg:gap-3"
          >
            <Phone size={18} aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-sm font-black uppercase">CHIAMA ORA</span>
              <span className="block text-xs font-bold">{formatDisplayNumber(business.whatsapp)}</span>
            </span>
          </a>
        ) : (
          <Link
            href="/contatti"
            className="focus-ring hidden bg-[#ffc400] px-5 py-3 text-sm font-black text-black transition hover:bg-white lg:block"
          >
            RICHIEDI UN PREVENTIVO
          </Link>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-[#111111] lg:hidden" aria-label="Navigazione mobile">
          <div className="container-boch flex flex-col py-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-white/10 px-2 py-4 text-sm font-black uppercase"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#ffc400] px-4 py-4 text-center text-sm font-black text-black"
            >
              RICHIEDI UN PREVENTIVO
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
