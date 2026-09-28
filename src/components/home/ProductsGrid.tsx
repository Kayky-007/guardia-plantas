import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/site";

export default function ProductsGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            O que você encontra na Guardiã.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#3E4A2E]">
            Os modelos mudam com a estação e com as flores que chegam. Para
            saber o que está disponível hoje, fale com a gente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05} className={i % 2 === 1 ? "lg:mt-12" : ""}>
              <a href={p.wa} target="_blank" rel="noopener noreferrer" className="tile group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <Image src={p.image} alt={p.title} fill sizes="200px" className="photo-zoom object-cover" />
                </div>
                <h3 className="mt-3 font-display text-xl font-medium md:text-2xl">{p.title}</h3>
                <span className="mt-1 block text-xs font-semibold text-clay md:text-sm">
                  Consultar disponibilidade
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
