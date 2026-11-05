 "use client";

import { FormEvent, useState } from "react";
import { Send, Upload } from "lucide-react";
import { business, getWhatsAppUrl } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-[#111111] p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold">
          Nome *
          <input required name="nome" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Azienda
          <input name="azienda" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Telefono *
          <input required type="tel" name="telefono" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Email
          <input type="email" name="email" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Comune *
          <input required name="comune" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Tipo di materiale *
          <select required name="materiale" defaultValue="" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none">
            <option value="" disabled>Seleziona</option>
            <option>Ferro</option>
            <option>Acciaio</option>
            <option>Rame</option>
            <option>Ottone</option>
            <option>Alluminio</option>
            <option>Cavi elettrici</option>
            <option>Altro</option>
          </select>
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Quantità stimata
          <input name="quantita" placeholder="Es. 500 kg / 2 cassoni / quantità indicativa" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Messaggio *
          <textarea required name="messaggio" rows={5} className="focus-ring mt-2 w-full resize-y border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="md:col-span-2">
          <span className="text-sm font-bold">Foto del materiale (opzionale)</span>
          <span className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-white/20 bg-black px-4 py-4 text-sm text-white/60 hover:border-[#ffc400]">
            <Upload size={18} />
            {fileName || "Scegli una foto"}
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            />
          </span>
        </label>
      </div>

      {submitted ? (
        <div className="mt-6 border border-[#ffc400]/40 bg-[#ffc400]/10 p-5 text-sm leading-6">
          <strong>Richiesta preparata.</strong> Il modulo è pronto per essere collegato a un endpoint email/CRM. Per il contatto immediato, usa WhatsApp.
          <a
            href={getWhatsAppUrl("Buongiorno, vorrei richiedere un ritiro di rottami metallici.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex bg-[#ffc400] px-5 py-3 font-black text-black"
          >
            CONTATTA SU WHATSAPP
          </a>
        </div>
      ) : (
        <button type="submit" className="focus-ring mt-7 inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black hover:bg-white">
          INVIA RICHIESTA <Send size={18} />
        </button>
      )}

      <p className="mt-5 text-xs leading-5 text-white/40">
        * Campi obbligatori. Nessun invio email viene simulato: collega il form al tuo provider/API quando configuri la parte backend.
        {business.email ? ` Email configurata: ${business.email}` : ""}
      </p>
    </form>
  );
}
