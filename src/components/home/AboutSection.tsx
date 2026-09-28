import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  LeafIcon,
  WomenIcon,
  HeartHandsIcon,
  WheelchairIcon,
  WifiIcon,
  DoorIcon,
} from "@/components/ui/Icons";
import { values } from "@/data/site";

const icons = [WomenIcon, HeartHandsIcon, WheelchairIcon, WifiIcon, DoorIcon];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <LeafIcon className="h-11 w-6 text-olive" />
          <h2 className="mt-7 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Um lugar para os momentos que importam.
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-relaxed">
            Na Guardiã, flores são uma forma de cuidar das pessoas. Cada
            buquê, cesta ou arranjo que sai da nossa loja no Centro de Itatiba
            carrega a história de alguém: um aniversário, uma reconciliação,
            uma saudade, uma chegada.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3E4A2E]">
            Por isso o atendimento é próximo e sem pressa. A gente quer
            entender para quem é, o que você quer dizer e como esse momento
            merece ser lembrado.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded bg-sand p-9 lg:col-span-5">
          <h3 className="font-display text-2xl font-medium">Como recebemos você</h3>
          <ul className="mt-7 flex flex-col gap-5">
            {values.map((v, i) => {
              const Icon = icons[i];
              return (
                <li key={v.title} className="flex items-start gap-4 text-sm leading-relaxed">
                  <Icon className="h-[22px] w-[22px] shrink-0 text-clay" />
                  <span>{v.description}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
