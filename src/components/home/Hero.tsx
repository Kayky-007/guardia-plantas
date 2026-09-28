"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { waLink } from "@/data/site";

export default function Hero() {
  const waHref = waLink(
    "Olá! Gostaria de conhecer os modelos de buquês e cestas disponíveis hoje."
  );

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-7"
        >
          <p className="text-sm font-medium text-olive">
            Floricultura no Centro de Itatiba, SP
          </p>
          <h1 className="mt-6 font-display text-[15vw] font-medium italic leading-[0.92] tracking-tight text-moss sm:text-6xl md:text-7xl lg:text-[88px]">
            Aqui a emoção floresce de verdade.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 max-w-md text-lg leading-relaxed text-[#3E4A2E]"
          >
            Buquês artesanais, cestas exclusivas e plantas que trazem vida e
            harmonia ao seu espaço em Itatiba.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-petal bg-moss px-8 py-4 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5"
            >
              Encomendar pelo WhatsApp
            </a>
            <a href="#produtos" className="link-underline text-sm font-semibold">
              Conhecer nossos produtos
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.6, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
          className="relative aspect-[5/7] w-full overflow-hidden rounded-[220px_220px_6px_6px] bg-sage2 lg:col-span-5"
        >
          <Image
            src="/images/hero.jpg"
            alt="Buquê em destaque na Guardiã Plantas"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
        </motion.div>
      </Container>

      <a
        href="#produtos"
        className="mx-auto mt-16 mb-10 flex w-fit items-center gap-3 px-6 text-[13px] font-medium text-olive md:mt-20 lg:ml-20 lg:mr-0"
      >
        <span className="block h-10 w-px bg-olive" />
        Descubra a Guardiã ↓
      </a>
    </section>
  );
}
