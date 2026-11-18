import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-boch flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Errore 404</p>
      <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">Pagina non trovata</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
        L&apos;indirizzo cercato non è disponibile. Puoi tornare alla home, consultare i servizi di recupero rottami oppure contattarci direttamente.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="focus-ring inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black hover:bg-white">
          <ArrowLeft size={18} /> TORNA ALLA HOME
        </Link>
        <Link href="/servizi" className="focus-ring inline-flex min-h-14 items-center gap-2 border border-white/25 px-7 font-black hover:border-[#ffc400] hover:text-[#ffc400]">
          VEDI I SERVIZI <ArrowRight size={18} />
        </Link>
        <Link href="/contatti" className="focus-ring inline-flex min-h-14 items-center gap-2 border border-white/25 px-7 font-black hover:border-[#ffc400] hover:text-[#ffc400]">
          CONTATTACI
        </Link>
      </div>
    </section>
  );
}
