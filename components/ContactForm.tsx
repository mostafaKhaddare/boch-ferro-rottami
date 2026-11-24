"use client";

import { FormEvent, useEffect, useState } from "react";
import { Camera, LoaderCircle, Send } from "lucide-react";
import { business, getWhatsAppUrl, hasWhatsApp } from "@/lib/constants";
import { serviceLabels } from "@/lib/serviceLabels";
import { pushDataLayer } from "@/lib/gtm";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [serviceSlug, setServiceSlug] = useState("");
  const [requestedMaterial, setRequestedMaterial] = useState("");
  const [requestedComune, setRequestedComune] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("servizio") ?? "";
    const material = params.get("materiale") ?? "";
    const comune = params.get("comune") ?? "";
    if (serviceLabels[slug]) setServiceSlug(slug);
    if (material && material.length <= 120) setRequestedMaterial(material);
    if (comune && comune.length <= 120) setRequestedComune(comune);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: String(data.get("nome") ?? ""),
      azienda: String(data.get("azienda") ?? ""),
      telefono: String(data.get("telefono") ?? ""),
      email: String(data.get("email") ?? ""),
      comune: String(data.get("comune") ?? ""),
      materiale: String(data.get("materiale") ?? ""),
      quantita: String(data.get("quantita") ?? ""),
      messaggio: String(data.get("messaggio") ?? ""),
      servizio: String(data.get("servizio") ?? ""),
      website: String(data.get("website") ?? "")
    };

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Invio non riuscito.");
      setStatus("success");
      pushDataLayer({
        event: "generate_lead",
        lead_type: "contact_request",
        service: payload.servizio || "generico",
        material: payload.materiale,
        city: payload.comune
      });
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Invio non riuscito.");
    }
  }

  const destination = process.env.NEXT_PUBLIC_EMAIL || business.email;
  const serviceTitle = serviceLabels[serviceSlug];

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-[#111111] p-6 sm:p-8">
      {serviceTitle ? (
        <p className="mb-6 border-l-4 border-[#ffc400] bg-black/40 px-4 py-3 text-sm leading-6 text-white/75">
          Richiesta per: <strong className="text-white">{serviceTitle}</strong>
        </p>
      ) : null}
      <input type="hidden" name="servizio" value={serviceSlug} />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold">
          Nome *
          <input required name="nome" autoComplete="name" maxLength={100} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Azienda
          <input name="azienda" autoComplete="organization" maxLength={120} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Telefono *
          <input required type="tel" name="telefono" autoComplete="tel" maxLength={50} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Email
          <input type="email" name="email" autoComplete="email" maxLength={150} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Comune *
          <input required name="comune" autoComplete="address-level2" maxLength={120} defaultValue={requestedComune} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold">
          Tipo di materiale *
          <select required name="materiale" defaultValue={requestedMaterial || ""} className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none">
            <option value="" disabled>Seleziona</option>
            {business.materials.map((material) => <option key={material.slug} value={material.name}>{material.name}</option>)}
            <option>Altro</option>
          </select>
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Quantità indicativa
          <input name="quantita" maxLength={200} placeholder="Es. quantità indicativa, cassoni o materiale presente" className="focus-ring mt-2 w-full border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Messaggio *
          <textarea required name="messaggio" rows={5} maxLength={2000} className="focus-ring mt-2 w-full resize-y border border-white/15 bg-black px-4 py-3 outline-none" />
        </label>
        <label className="hidden" aria-hidden="true">
          Non compilare
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        {hasWhatsApp() ? (
          <div className="md:col-span-2">
            <a
              href={getWhatsAppUrl("Buongiorno, vorrei inviarvi alcune foto del materiale da ritirare.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex min-h-14 items-center gap-3 border border-dashed border-[#ffc400]/50 bg-black/40 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-[#ffc400] hover:text-white"
            >
              <Camera size={20} className="shrink-0 text-[#ffc400]" aria-hidden="true" />
              Hai delle foto del materiale? Inviale su WhatsApp
            </a>
          </div>
        ) : null}
      </div>

      {status === "success" ? (
        <div className="mt-6 border border-[#ffc400]/40 bg-[#ffc400]/10 p-5 text-sm leading-6" role="status">
          <strong>Richiesta inviata.</strong> Ti ricontatteremo appena possibile{destination ? ` (${destination})` : ""}.
          {hasWhatsApp() ? (
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
        <>
          {status === "error" ? (
            <div className="mt-6 border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-100" role="alert">
              {message}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="focus-ring mt-7 inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>INVIO IN CORSO <LoaderCircle size={18} className="animate-spin" /></>
            ) : (
              <>INVIA RICHIESTA <Send size={18} /></>
            )}
          </button>
        </>
      )}

      <p className="mt-5 text-xs leading-5 text-white/60">
        * Campi obbligatori. I dati inviati saranno usati solo per rispondere alla richiesta. Consulta la{" "}
        <a href="/privacy" className="focus-ring underline hover:text-white">Privacy Policy</a>.
      </p>
    </form>
  );
}
