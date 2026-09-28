import Container from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/Icons";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-moss-deep py-16 text-sage2 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-3 font-display text-2xl font-semibold text-linen">
              <LeafIcon className="h-9 w-5 text-sage" />
              {site.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Floricultura, presentes e experiências em Itatiba.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="mb-4 text-xs font-semibold text-sage">Navegação</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-sage">Contato</h3>
            <p className="text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.neighborhood} — {site.address.city}/{site.address.state}
            </p>
            <p className="mt-3 text-sm">
              <a href={`tel:+${site.phoneE164}`} className="link-underline">
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              {site.hours.map((h) => (
                <span key={h.label} className="block">
                  {h.label} {h.value}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-sage">Redes</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#contato" className="link-underline">
                  Facebook [inserir link]
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-6 text-xs text-sage">
          © {site.name} — Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
