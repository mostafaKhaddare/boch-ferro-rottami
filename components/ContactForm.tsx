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
          <input required name="nome" autoComplete="name" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Azienda
          <input name="azienda" autoComplete="organization" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Telefono *
          <input required type="tel" name="telefono" autoComplete="tel" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Email
          <input type="email" name="email" autoComplete="email" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Comune *
          <input required name="comune" autoComplete="address-level2" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
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
          Quantità indicativa
          <input name="quantita" placeholder="Es. quantità indicativa, cassoni o materiale presente" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Messaggio *
          <textarea required name="messaggio" rows={5} className="focus-ring mt-2 w-full resize-y border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="md:col-span-2">
          <span className="text-sm font-bold">Foto del materiale (opzionale)</span>
          <span className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-white/20 bg-black px-4 py-4 text-sm text-white/60 hover:border-[#ffc400]">
            <Upload size={18} aria-hidden="true" />
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
        <div className="mt-6 border border-[#ffc400]/40 bg-[#ffc400]/10 p-5 text-sm leading-6" role="status">
          <strong>Richiesta registrata localmente.</strong> Collega questo modulo al tuo endpoint email/CRM per l&apos;invio effettivo.
          {business.whatsapp ? (
            <a
              href={getWhatsAppUrl("Buongiorno, vorrei informazioni su recupero rottami metallici.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex bg-[#ffc400] px-5 py-3 font-black text-black"
            >
              CONTATTA SU WHATSAPP
            </a>
          ) : null}
        </div>
      ) : (
        <button type="submit" className="focus-ring mt-7 inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black hover:bg-white">
          INVIA RICHIESTA <Send size={18} />
        </button>
      )}

      <p className="mt-5 text-xs leading-5 text-white/40">
        * Campi obbligatori. Il modulo va collegato a un provider/API prima dell&apos;uso in produzione.
      </p>
    </form>
  );
}
