const faqs = [
  ["Quali materiali ritirate?", "Ferro, acciaio, rame, ottone, alluminio e cavi elettrici, in base al materiale e alle condizioni del ritiro."],
  ["Effettuate ritiri presso aziende?", "Sì, il sito è pensato anche per richieste B2B da officine, fabbri, serramentisti, elettricisti e altre attività."],
  ["Effettuate ritiri presso privati?", "È possibile richiedere informazioni per un ritiro presso privati; la disponibilità va verificata."],
  ["Operate a Nizza Monferrato e Canelli?", "Sono tra le principali zone indicate per il servizio, insieme ad altri comuni dell'area."],
  ["Posso inviare una foto del materiale?", "Sì. Puoi indicarlo nella richiesta e utilizzare WhatsApp per inviare rapidamente fotografie."],
  ["È possibile organizzare ritiri periodici?", "Per aziende con produzione regolare di rottami è possibile richiedere informazioni sui ritiri periodici."],
  ["Come posso richiedere un ritiro?", "Puoi utilizzare il modulo di contatto oppure contattarci tramite telefono o WhatsApp."]
];

export default function FAQ() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map(([question, answer]) => (
        <details key={question} className="group bg-[#111111]">
          <summary className="focus-ring cursor-pointer list-none px-5 py-5 font-black uppercase marker:hidden">
            <span className="flex items-center justify-between gap-6">
              {question}
              <span className="text-2xl text-[#ffc400] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="max-w-4xl px-5 pb-6 text-sm leading-6 text-white/65">{answer}</p>
        </details>
      ))}
    </div>
  );
}
