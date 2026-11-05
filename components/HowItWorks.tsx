const steps = [
  ["01", "CONTATTACI", "Chiamaci o scrivici su WhatsApp."],
  ["02", "DESCRIVI IL MATERIALE", "Indicaci il tipo e la quantità indicativa."],
  ["03", "ORGANIZZIAMO IL RITIRO", "Concordiamo insieme modalità e disponibilità."]
];

export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map(([number, title, text]) => (
        <article key={number} className="relative border-t-2 border-[#ffc400] pt-7">
          <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#ffc400] text-lg font-black text-black">
            {number}
          </div>
          <h3 className="text-xl font-black uppercase">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
        </article>
      ))}
    </div>
  );
}
