"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LeafIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { nav, site, waLink } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const waHref = waLink(
    "Olá! Gostaria de conhecer os modelos de buquês e cestas disponíveis hoje."
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-linen/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(41,51,31,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-24 md:px-10 lg:px-20">
        <a href="#inicio" aria-label="Guardiã Plantas, início" className="flex items-center gap-3 text-moss">
          <LeafIcon className="h-8 w-5 text-olive md:h-9 md:w-5" />
          <span className="font-display text-xl font-semibold tracking-tight md:text-[28px]">
            Guardiã Plantas
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-7 text-sm font-medium lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-petal bg-moss px-6 py-3 text-sm font-semibold text-linen transition-transform hover:-translate-y-0.5 lg:flex"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Encomendar pelo WhatsApp
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Encomendar pelo WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-moss text-linen lg:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-moss lg:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="h-6 w-6">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="h-6 w-6">
                <path d="M4 9h16M4 15h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            aria-label="Principal, celular"
            className="flex flex-col bg-linen px-6 pb-8 lg:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-t border-line py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            ))}
            <p className="mt-4 border-t border-line pt-4 text-sm text-olive">
              {site.address.street} — {site.address.neighborhood}, {site.address.city}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
