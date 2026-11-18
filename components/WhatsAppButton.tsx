import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, hasWhatsApp } from "@/lib/constants";

export default function WhatsAppButton() {
  if (!hasWhatsApp()) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatta BOCH FERRO ROTTAMI su WhatsApp"
      className="focus-ring fixed bottom-20 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#ffc400] text-black shadow-2xl md:flex"
    >
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}
