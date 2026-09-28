import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/data/site";

const details = [
  { label: "Grupos", value: "De 5 a 15 pessoas" },
  { label: "Formato", value: "Experiência privada, com agendamento" },
  { label: "Ocasiões", value: "Aniversários, datas comemorativas e encontros entre amigas" },
  { label: "À mesa", value: "Cafés e chás temáticos, em mesa colonial e caseira" },
];

export default function TeaExperience() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="relative min-h-[320px] overflow-hidden rounded lg:col-span-5">
          <Image
            src="/images/cafe-cha.jpg"
            alt="Mesa de café e chá cercada por flores"
            fill
            sizes="40vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="rounded bg-linen p-10 shadow-[inset_0_0_0_10px_#F2EEE4,inset_0_0_0_11px_#CDBFA5] md:p-16 lg:col-span-7"
        >
          <p className="font-display text-xl italic text-clay">Cafés &amp; chás na Guardiã</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Momentos que florescem à mesa.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#3E4A2E]">
            Experiências privadas com cafés e chás temáticos para o seu grupo,
            servidos numa mesa caseira cercada por flores.
          </p>
          <dl className="mt-8 flex flex-col">
            {details.map((d, i) => (
              <div
                key={d.label}
                className={`grid grid-cols-[110px_1fr] gap-6 border-t border-[#DDD3BF] py-4 md:grid-cols-[150px_1fr] ${
                  i === details.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="text-xs font-semibold text-olive md:text-sm">{d.label}</dt>
                <dd className="text-sm leading-relaxed md:text-base">{d.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={waLink("Olá! Gostaria de agendar um café ou chá para um grupo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-petal bg-moss px-7 py-4 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5"
          >
            Agendar uma experiência
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
