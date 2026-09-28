import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { DeliveryIcon } from "@/components/ui/Icons";
import { site, waLink } from "@/data/site";

export default function DeliverySection() {
  return (
    <section id="entregas" className="bg-sage2/60 py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <DeliveryIcon className="h-9 w-9 text-olive" />
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Seu carinho chega até onde precisa.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Fazemos entregas na região com todo o cuidado que cada momento
            merece.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3E4A2E]">
            Para confirmar endereço, data e horário, consulte a
            disponibilidade com a nossa equipe.
          </p>
          <a
            href={waLink("Olá! Gostaria de consultar uma entrega de flores.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-petal bg-moss px-7 py-4 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5"
          >
            Consultar entrega pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[280px] overflow-hidden rounded bg-linen lg:col-span-7">
          <svg viewBox="0 0 700 480" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
            <path d="M-20 120 C140 110 260 150 420 130 S640 90 720 110" stroke="#E0D8C8" strokeWidth="14" />
            <path d="M-20 330 C120 320 220 350 380 340 S600 300 720 320" stroke="#E0D8C8" strokeWidth="14" />
            <path d="M180 -20 C170 120 200 260 180 500" stroke="#E0D8C8" strokeWidth="10" />
            <path d="M470 -20 C480 140 450 300 490 500" stroke="#E0D8C8" strokeWidth="10" />
            <path d="M60 -20 L110 500 M600 -20 L640 500 M-20 230 L720 210 M-20 420 L720 440" stroke="#E8E1D3" strokeWidth="5" />
            <path d="M330 236 C390 236 400 180 470 172 S580 150 640 90" stroke="#9E5A4F" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
            <circle cx="640" cy="90" r="5" fill="#9E5A4F" />
            <circle cx="330" cy="236" r="10" fill="#29331F" />
            <circle cx="330" cy="236" r="3.5" fill="#F2EEE4" />
          </svg>
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 rounded bg-moss px-4 py-3 text-linen">
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-0.5 text-xs">
              {site.address.street} — {site.address.neighborhood}, {site.address.city}
            </p>
          </div>
          <p className="absolute bottom-3 right-4 text-[11px] text-olive">Mapa ilustrativo</p>
        </Reveal>
      </Container>
    </section>
  );
}
