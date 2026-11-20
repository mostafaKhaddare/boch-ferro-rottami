import type { FaqItem } from "@/lib/faqs";

const defaultFaqs: FaqItem[] = [
  { q: "Quali materiali ritirate?", a: "Ferro, acciaio, rame, ottone, alluminio e cavi elettrici, in base al materiale e alle condizioni del ritiro." },
  { q: "Effettuate ritiri presso aziende?", a: "Sì, il sito è pensato anche per richieste B2B da officine, fabbri, serramentisti, elettricisti e altre attività." },
  { q: "Effettuate ritiri presso privati?", a: "È possibile richiedere informazioni per un ritiro presso privati; la disponibilità va verificata." },
  { q: "Operate a Nizza Monferrato e Canelli?", a: "Sono tra le principali zone indicate per il servizio, insieme ad altri comuni dell'area." },
  { q: "Posso inviare una foto del materiale?", a: "Sì. Puoi indicarlo nella richiesta e utilizzare WhatsApp per inviare rapidamente fotografie." },
  { q: "È possibile organizzare ritiri periodici?", a: "Per aziende con produzione regolare di rottami è possibile richiedere informazioni sui ritiri periodici." },
  { q: "Come posso richiedere un ritiro?", a: "Puoi utilizzare il modulo di contatto oppure contattarci tramite telefono o WhatsApp." }
];

export default function FAQ({ items = defaultFaqs }: { items?: readonly FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((faq) => (
        <details key={faq.q} className="group bg-[#111111]">
          <summary className="focus-ring cursor-pointer list-none px-5 py-5 font-black uppercase marker:hidden">
            <span className="flex items-center justify-between gap-6">
              {faq.q}
              <span className="text-2xl text-[#ffc400] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="max-w-4xl px-5 pb-6 text-sm leading-6 text-white/65">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
