import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="container-boch py-16 sm:py-24">
      <h1 className="text-5xl font-black uppercase">PRIVACY POLICY</h1>
      <p className="mt-8 max-w-3xl leading-8 text-white/60">
        Questa pagina è un segnaposto da completare con l&apos;informativa privacy effettiva, il titolare del trattamento, le finalità, i tempi di conservazione e gli eventuali fornitori utilizzati dal sito prima della pubblicazione definitiva.
      </p>
    </div>
  );
}
