import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { PinIcon, ClockIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export default function LocationSection() {
  return (
    <section id="localizacao" className="bg-sand py-24 md:py-32">
      <Container className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Venha viver a experiência Guardiã.
          </h2>
          <address className="mt-9 flex items-start gap-4 not-italic">
            <PinIcon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-clay" />
            <span className="text-lg leading-relaxed">
              {site.address.street}
              <br />
              {site.address.neighborhood} — {site.address.city}/{site.address.state}
              <br />
              <span className="font-display text-lg italic text-olive">{site.address.reference}</span>
            </span>
          </address>

          <h3 className="mt-9 flex items-center gap-3 text-sm font-semibold text-olive">
            <ClockIcon className="h-5 w-5" />
            Horários
          </h3>
          <dl className="mt-3 max-w-sm">
            {site.hours.map((h, i) => (
              <div
                key={h.label}
                className={`flex justify-between border-t border-line2 py-3.5 ${
                  i === site.hours.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="text-base">{h.label}</dt>
                <dd className="text-base font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={site.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-petal bg-moss px-7 py-4 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5"
          >
            Como chegar
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[400px] overflow-hidden rounded border border-line2 bg-linen lg:col-span-7">
          <svg viewBox="0 0 700 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
            <path d="M-20 160 L720 130 M-20 330 L720 350 M-20 490 L720 470" stroke="#E0D8C8" strokeWidth="14" />
            <path d="M160 -20 L200 620 M390 -20 L370 620 M580 -20 L610 620" stroke="#E0D8C8" strokeWidth="10" />
            <circle cx="380" cy="340" r="10" fill="#29331F" />
            <circle cx="380" cy="340" r="3.5" fill="#F2EEE4" />
          </svg>
          <p className="absolute left-6 top-6 rounded bg-sand/95 px-3 py-2 text-xs font-medium">
            Aqui entra o mapa do Google Maps incorporado
          </p>
          <a
            href={site.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 rounded-petal border border-moss bg-linen px-5 py-3 text-sm font-semibold"
          >
            Abrir no Google Maps
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
