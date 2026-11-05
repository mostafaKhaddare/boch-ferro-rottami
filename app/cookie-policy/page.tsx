import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <h1 className="text-5xl font-black uppercase">COOKIE POLICY</h1>
      <p className="mt-8 max-w-3xl leading-8 text-white/60">
        Questa pagina è un segnaposto da completare in base ai cookie e agli strumenti effettivamente utilizzati dal sito prima della pubblicazione definitiva.
      </p>
    </div>
  );
}
