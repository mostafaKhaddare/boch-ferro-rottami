import { Phone } from "lucide-react";
import { getPhoneUrl } from "@/lib/constants";

export default function CallButton() {
  return (
    <a
      href={getPhoneUrl()}
      aria-label="Chiama BOCH FERRO ROTTAMI"
      className="focus-ring fixed bottom-20 right-24 z-40 hidden h-14 w-14 items-center justify-center rounded-full border border-[#ffc400] bg-black text-[#ffc400] shadow-2xl md:flex"
    >
      <Phone size={23} />
    </a>
  );
}
