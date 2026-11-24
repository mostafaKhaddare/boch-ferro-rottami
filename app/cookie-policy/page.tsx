import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";
import { GTM_ID } from "@/lib/gtm";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Cookie Policy | BOCH FERRO ROTTAMI",
    description:
      "Informazioni sui cookie e sugli strumenti di misurazione utilizzati dal sito di BOCH FERRO ROTTAMI tramite Google Tag Manager.",
    path: "/cookie-policy"
  }),
  robots: { index: true, follow: true }
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <div className="container-boch py-14 sm:py-20">
        <h1 className="yellow-line text-4xl font-black uppercase sm:text-6xl">COOKIE POLICY</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Questa pagina descrive gli strumenti di misurazione utilizzati dal sito di {business.name}.
        </p>

        <div className="mt-12 grid max-w-4xl gap-10">
          <section>
            <h2 className="text-2xl font-black uppercase">Cookie tecnici</h2>
            <p className="mt-4 leading-8 text-white/65">
              Il codice del sito non utilizza cookie per profilare gli utenti né per memorizzare preferenze di navigazione. Le funzionalità del sito, incluso il modulo di contatto, funzionano senza installare cookie di profilazione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase">Google Tag Manager</h2>
            <p className="mt-4 leading-8 text-white/65">
              Il sito carica Google Tag Manager con l&apos;ID {GTM_ID}. Tramite questo container è possibile attivare strumenti di analisi e pubblicità (ad esempio Google Analytics e Google Ads), che potrebbero installare cookie o trattare dati di navigazione.
            </p>
            <p className="mt-4 leading-8 text-white/65">
              L&apos;attivazione e la configurazione del consenso per questi strumenti vanno gestite all&apos;interno del container GTM. In assenza di tag che li richiamano, nessuno strumento di misurazione aggiuntivo viene caricato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase">Come gestire i cookie</h2>
            <p className="mt-4 leading-8 text-white/65">
              Puoi bloccare o rimuovere i cookie tramite le impostazioni del browser. Tieni presente che disabilitare tutti i cookie può limitare il funzionamento di alcune funzionalità dei siti che visiti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase">Ulteriori informazioni</h2>
            <p className="mt-4 leading-8 text-white/65">
              Per chiarimenti su come vengono trattati i dati personali, consulta la{" "}
              <Link href="/privacy" className="focus-ring font-black text-[#ffc400] hover:text-white">Privacy Policy</Link>{" "}
              oppure utilizza i canali della{" "}
              <Link href="/contatti" className="focus-ring font-black text-[#ffc400] hover:text-white">pagina contatti</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
