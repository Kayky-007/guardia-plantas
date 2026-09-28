import { WhatsAppIcon } from "@/components/ui/Icons";
import { waLink } from "@/data/site";

export default function WhatsAppButton() {
  const href = waLink(
    "Olá! Gostaria de conhecer os modelos de buquês e cestas disponíveis hoje."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Guardiã pelo WhatsApp"
      className="group fixed z-40 flex items-center gap-3"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <span className="pointer-events-none hidden -translate-x-2 rounded-petal border border-line2 bg-linen px-4 py-2.5 text-sm font-semibold text-moss opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Falar com a Guardiã
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-moss text-linen shadow-[0_10px_30px_rgba(41,51,31,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
    </a>
  );
}
