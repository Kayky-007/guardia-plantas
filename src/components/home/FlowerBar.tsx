import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/data/site";

const steps = [
  "Escolha as flores que conversam com você.",
  "Monte a composição com a nossa orientação.",
  "Leve para casa um arranjo com a sua assinatura.",
];

export default function FlowerBar() {
  return (
    <section id="experiencias" className="py-24 md:py-36">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="font-display text-2xl italic text-clay">Flower Bar</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Seu arranjo. Sua escolha. Sua história.
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#3E4A2E]">
            Uma experiência dentro da loja: você escolhe as flores, uma a uma,
            e monta o seu próprio arranjo com a orientação da nossa equipe.
          </p>
          <ol className="mt-10 flex max-w-lg flex-col">
            {steps.map((step, i) => (
              <li
                key={step}
                className={`flex items-baseline gap-6 border-t border-line py-4 ${
                  i === steps.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="w-5 font-display text-2xl text-clay">{i + 1}</span>
                <span className="text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <a
            href={waLink("Olá! Quero saber mais sobre o Flower Bar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-petal bg-moss px-7 py-4 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5"
          >
            Conhecer o Flower Bar
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative lg:col-span-6">
          <div className="relative ml-auto aspect-[5/7] w-full max-w-md overflow-hidden rounded-[200px_200px_6px_6px] bg-blush">
            <Image
              src="/images/flower-bar.jpg"
              alt="Cliente montando um arranjo no Flower Bar"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="relative -mt-16 h-40 w-40 overflow-hidden rounded border-8 border-linen bg-sage2 md:h-52 md:w-52">
            <Image src="/images/flower-bar-detalhe.jpg" alt="Flores do balcão" fill sizes="200px" className="object-cover" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
