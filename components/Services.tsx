import { Building2, Home, RefreshCcw, Recycle } from "lucide-react";

const services = [
  ["Ritiro presso aziende", "Ritiriamo presso officine, fabbri, carpenterie, serramentisti e attività industriali.", Building2],
  ["Ritiro presso privati", "Possibilità di ritiro presso privati, secondo disponibilità e condizioni.", Home],
  ["Ritiri periodici", "Per aziende con produzione regolare di rottami, possibilità di organizzare ritiri periodici.", RefreshCcw],
  ["Recupero rottami metallici", "Gestione e avvio a recupero dei materiali metallici secondo la normativa applicabile.", Recycle]
] as const;

export default function Services() {
  return (
    <div className="grid gap-px bg-white/10 sm:grid-cols-2">
      {services.map(([title, text, Icon]) => (
        <article key={title} className="bg-[#111111] p-7">
          <Icon className="mb-8 text-[#ffc400]" size={34} />
          <h3 className="text-xl font-black uppercase">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
        </article>
      ))}
    </div>
  );
}
