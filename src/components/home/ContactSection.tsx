import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site, waLink } from "@/data/site";

export default function ContactSection() {
  const waHref = waLink(
    "Olá! Gostaria de conhecer os modelos de buquês e cestas disponíveis hoje."
  );

  return (
    <section id="contato" className="bg-moss py-28 text-linen md:py-36">
      <Container className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-4xl font-medium leading-[0.98] tracking-tight md:text-7xl">
            Vamos fazer esse momento florescer?
          </h2>
          <p className="mt-9 max-w-lg text-lg leading-relaxed text-[#D5D8C4]">
            Conte para a gente o que você está imaginando. Nossa equipe pode
            ajudar você a encontrar flores, presentes e experiências para
            tornar o momento ainda mais especial.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-8 lg:col-span-5">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] items-center justify-center gap-3 rounded-petal bg-clay px-6 text-center text-base font-semibold text-linen transition-colors hover:bg-clay-deep md:min-h-[84px] md:text-lg"
          >
            <WhatsAppIcon className="h-6 w-6 shrink-0" />
            Falar com a Guardiã pelo WhatsApp
          </a>
          <div className="flex flex-col justify-between gap-2 border-t border-[#4A5436] pt-6 sm:flex-row sm:items-center">
            <a href={`tel:+${site.phoneE164}`} className="font-display text-2xl md:text-3xl">
              {site.phoneDisplay}
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display text-2xl italic md:text-3xl">
              {site.instagramHandle}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
