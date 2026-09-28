import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/site";

export default function Categories() {
  const [buques, cestas, orquideas, plantas] = categories;

  return (
    <section id="produtos" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-none tracking-tight md:text-6xl">
            Escolha por onde começar.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#3E4A2E]">
            Buquês artesanais, cestas pensadas para quem vai receber, orquídeas
            e plantas para trazer vida à casa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a href={buques.wa} target="_blank" rel="noopener noreferrer" className="tile group block">
              <div className="relative h-[380px] overflow-hidden rounded md:h-[620px]">
                <Image src={buques.image} alt={buques.title} fill sizes="60vw" className="photo-zoom object-cover" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-10">
                <div>
                  <h3 className="font-display text-3xl font-medium md:text-4xl">{buques.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#3E4A2E]">{buques.description}</p>
                </div>
                <span className="link-underline shrink-0 text-sm font-semibold text-clay">
                  Ver modelos no WhatsApp
                </span>
              </div>
            </a>
          </Reveal>

          <div className="flex flex-col gap-12 lg:col-span-5 lg:pt-20">
            <Reveal delay={0.1}>
              <a href={cestas.wa} target="_blank" rel="noopener noreferrer" className="tile group block">
                <div className="relative h-64 overflow-hidden rounded">
                  <Image src={cestas.image} alt={cestas.title} fill sizes="40vw" className="photo-zoom object-cover" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{cestas.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3E4A2E]">{cestas.description}</p>
                <span className="link-underline mt-3 inline-block text-sm font-semibold text-clay">
                  Consultar disponibilidade
                </span>
              </a>
            </Reveal>

            <div className="grid grid-cols-2 gap-6">
              {[orquideas, plantas].map((cat) => (
                <Reveal key={cat.id} delay={0.15}>
                  <a href={cat.wa} target="_blank" rel="noopener noreferrer" className="tile group block">
                    <div className="relative h-48 overflow-hidden rounded-[80px_80px_4px_4px]">
                      <Image src={cat.image} alt={cat.title} fill sizes="20vw" className="photo-zoom object-cover" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-medium leading-tight">{cat.title}</h3>
                    <span className="link-underline mt-2 inline-block text-sm font-semibold text-clay">
                      Consultar
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
