import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { LeafIcon } from "@/components/ui/Icons";
import { waLink } from "@/data/site";

export default function EmotionalSection() {
  return (
    <section className="bg-moss py-24 text-linen md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative h-72 overflow-hidden rounded md:h-[440px]">
            <Image
              src="/images/emocional.jpg"
              alt="Mãos entregando flores"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <LeafIcon className="h-11 w-6 text-sage" />
          <blockquote className="mt-8 font-display text-3xl font-normal leading-tight tracking-tight md:text-5xl">
            Flores não são apenas presentes. São formas de dizer aquilo que às
            vezes as palavras não conseguem.
          </blockquote>
          <a
            href={waLink("Olá! Quero ajuda para escolher flores para alguém especial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-petal border border-sage px-7 py-4 text-sm font-semibold transition-colors hover:bg-linen hover:text-moss"
          >
            Encontre uma forma de dizer
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
