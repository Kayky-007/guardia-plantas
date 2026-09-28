import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guardiaplantas.com.br"),
  title: "Guardiã Plantas | Floricultura em Itatiba, SP",
  description:
    "Buquês artesanais, cestas exclusivas, orquídeas e plantas em Itatiba-SP. Encomende pelo WhatsApp e receba com todo o cuidado que o momento merece.",
  keywords: [
    "floricultura Itatiba",
    "floricultura Itatiba SP",
    "buquê em Itatiba",
    "flores em Itatiba",
    "cestas em Itatiba",
    "presentes em Itatiba",
    "entrega de flores Itatiba",
    "orquídeas Itatiba",
    "arranjos florais Itatiba",
  ],
  openGraph: {
    title: "Guardiã Plantas | Floricultura em Itatiba, SP",
    description: "Aqui a emoção floresce de verdade. Buquês, cestas, orquídeas e plantas em Itatiba-SP.",
    url: "https://www.guardiaplantas.com.br",
    siteName: "Guardiã Plantas",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FloristShop",
  name: site.name,
  image: "https://www.guardiaplantas.com.br/images/hero.jpg",
  telephone: `+${site.phoneE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "12:00" },
  ],
  sameAs: [site.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "140",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
