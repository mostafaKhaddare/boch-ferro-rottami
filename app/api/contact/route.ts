import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  azienda?: string;
  telefono?: string;
  email?: string;
  comune?: string;
  materiale?: string;
  quantita?: string;
  messaggio?: string;
  servizio?: string;
  website?: string;
};

const MAX_LENGTHS: Record<keyof Payload, number> = {
  nome: 100,
  azienda: 120,
  telefono: 50,
  email: 150,
  comune: 120,
  materiale: 120,
  quantita: 200,
  messaggio: 2000,
  servizio: 120,
  website: 0
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const required = [body.nome, body.telefono, body.comune, body.materiale, body.messaggio];
  if (required.some((v) => !String(v ?? "").trim())) {
    return NextResponse.json({ error: "Compila i campi obbligatori." }, { status: 400 });
  }

  const oversized = (Object.keys(MAX_LENGTHS) as Array<keyof Payload>).some((key) => {
    const value = body[key];
    return typeof value !== "undefined" && String(value).length > MAX_LENGTHS[key];
  });
  if (oversized) {
    return NextResponse.json({ error: "Uno o più campi superano la lunghezza consentita." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? process.env.NEXT_PUBLIC_EMAIL;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpSecure = (process.env.SMTP_SECURE ?? "true") === "true";

  if (!to || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email non configurata. Imposta SMTP_USER, SMTP_PASS e CONTACT_TO_EMAIL nel server." },
      { status: 503 }
    );
  }

  const rows: Array<[string, string]> = [
    ["Nome", body.nome],
    ["Azienda", body.azienda],
    ["Telefono", body.telefono],
    ["Email", body.email],
    ["Comune", body.comune],
    ["Servizio richiesto", body.servizio],
    ["Materiale", body.materiale],
    ["Quantità indicativa", body.quantita],
    ["Messaggio", body.messaggio]
  ]
    .filter((entry): entry is [string, string] => Boolean(String(entry[1] ?? "").trim()))
    .map(([key, value]) => [key, String(value).trim()] as [string, string]);

  const subject = `Richiesta contatto sito - ${safeHeader(String(body.nome))} (${safeHeader(String(body.comune))})`;
  const text = rows.map(([key, value]) => `${key}: ${value}`).join("\n");
  const html = `<h2>Nuova richiesta dal sito</h2><table cellpadding="6" cellspacing="0" border="0">${rows
    .map(
      ([key, value]) =>
        `<tr><td><strong>${escapeHtml(key)}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("")}</table>`;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass }
    });

    await transporter.sendMail({
      from: `BOCH FERRO ROTTAMI <${smtpUser}>`,
      to,
      subject,
      text,
      html,
      replyTo: body.email?.trim() || undefined
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Invio email non riuscito.", detail: process.env.NODE_ENV === "development" ? detail : undefined },
      { status: 502 }
    );
  }
}
