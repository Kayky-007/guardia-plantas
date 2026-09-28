export const site = {
  name: "Guardiã Plantas",
  tagline: "Aqui a emoção floresce de verdade.",
  phoneDisplay: "(11) 99284-6992",
  phoneE164: "5511992846992",
  instagramHandle: "@guardiaplantas",
  instagramUrl: "https://www.instagram.com/guardiaplantas/",
  address: {
    street: "Rua Rui Barbosa, 558",
    neighborhood: "Centro",
    city: "Itatiba",
    state: "SP",
    reference: "Ao lado do Açaí dos Tomé",
    mapsQuery:
      "Guardiã Plantas, Rua Rui Barbosa, 558, Itatiba SP",
  },
  hours: [
    { label: "Segunda a sexta", value: "09h às 18h" },
    { label: "Sábado", value: "08h às 18h" },
    { label: "Domingo", value: "08h às 12h" },
  ],
  rating: {
    value: "4,8",
    count: "mais de 140 avaliações",
    url: "https://www.google.com/maps/search/?api=1&query=Guardi%C3%A3+Plantas%2C+Rua+Rui+Barbosa%2C+558%2C+Itatiba+SP",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Buquês & Arranjos", href: "#produtos" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Entregas", href: "#entregas" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contato", href: "#contato" },
];

export type Category = {
  id: string;
  title: string;
  description?: string;
  image: string; // path under /public/images
  wa: string;
};

export const categories: Category[] = [
  {
    id: "buques",
    title: "Buquês & Arranjos",
    description:
      "Composições artesanais para declarar, agradecer, pedir desculpas ou simplesmente lembrar de alguém.",
    image: "/images/categoria-buques.jpg",
    wa: waLink("Olá! Gostaria de ver os modelos de buquês e arranjos."),
  },
  {
    id: "cestas",
    title: "Cestas & Presentes",
    description: "Cestas montadas com carinho para aniversários, datas especiais e surpresas.",
    image: "/images/categoria-cestas.jpg",
    wa: waLink("Olá! Gostaria de ver as cestas e presentes disponíveis."),
  },
  {
    id: "orquideas",
    title: "Orquídeas & Flores",
    image: "/images/categoria-orquideas.jpg",
    wa: waLink("Olá! Gostaria de saber quais orquídeas e flores vocês têm hoje."),
  },
  {
    id: "plantas",
    title: "Plantas & Folhagens",
    image: "/images/categoria-plantas.jpg",
    wa: waLink("Olá! Gostaria de ver as plantas e folhagens disponíveis."),
  },
];

export type Product = {
  id: string;
  title: string;
  image: string;
  wa: string;
};

export const products: Product[] = [
  { id: "p-buques", title: "Buquês", image: "/images/produto-buques.jpg", wa: waLink("Olá! Quais buquês estão disponíveis hoje?") },
  { id: "p-cestas", title: "Cestas", image: "/images/produto-cestas.jpg", wa: waLink("Olá! Quais cestas estão disponíveis hoje?") },
  { id: "p-arranjos", title: "Arranjos", image: "/images/produto-arranjos.jpg", wa: waLink("Olá! Quais arranjos estão disponíveis hoje?") },
  { id: "p-orquideas", title: "Orquídeas", image: "/images/produto-orquideas.jpg", wa: waLink("Olá! Quais orquídeas estão disponíveis hoje?") },
  { id: "p-plantas", title: "Plantas", image: "/images/produto-plantas.jpg", wa: waLink("Olá! Quais plantas estão disponíveis hoje?") },
  { id: "p-presentes", title: "Presentes", image: "/images/produto-presentes.jpg", wa: waLink("Olá! Quais presentes estão disponíveis hoje?") },
];

export type InstaPost = {
  id: string;
  image: string;
  kind: "post" | "reel";
  tall?: boolean;
  href?: string; // link do post; sem ele, o card leva ao perfil
  video?: string; // reel sem imagem de capa: mostra o primeiro quadro do vídeo
};

// Usado quando a busca no Instagram falha, demora ou não está configurada.
export const instagramPosts: InstaPost[] = [
  { id: "ig-1", image: "/images/instagram-1.jpg", kind: "reel", tall: true },
  { id: "ig-2", image: "/images/instagram-2.jpg", kind: "post" },
  { id: "ig-3", image: "/images/instagram-3.jpg", kind: "post" },
  { id: "ig-4", image: "/images/instagram-4.jpg", kind: "post" },
  { id: "ig-5", image: "/images/instagram-5.jpg", kind: "reel" },
  { id: "ig-6", image: "/images/instagram-6.jpg", kind: "post" },
];

export type GoogleReview = {
  id: string;
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  when?: string; // ex.: "há 2 meses"
};

// Usado quando a busca no Google falha, demora ou não está configurada.
// Troque pelos trechos de duas avaliações reais (copiadas uma única vez).
export const googleReviewsFallback: GoogleReview[] = [
  { id: "gr-1", author: "[Nome do cliente]", rating: 5, text: "[Trecho de uma avaliação real do Google]" },
  { id: "gr-2", author: "[Nome do cliente]", rating: 5, text: "[Trecho de uma avaliação real do Google]" },
];

// Ajustes das integrações automáticas. As credenciais NÃO ficam aqui:
// elas vão nas variáveis de ambiente (veja .env.example).
export const integrations = {
  instagram: {
    limit: 6, // quantidade de posts na grade
    timeoutMs: 5000, // desiste e usa o conteúdo estático após esse tempo
    revalidateSeconds: 60 * 60, // busca de novo no máximo a cada 1 hora
    graphApiVersion: "v23.0", // versão da Graph API da Meta (atualizar a cada ~2 anos)
  },
  googleReviews: {
    limit: 2, // quantidade de cards de avaliação
    minRating: 5, // só mostra avaliações com essa nota ou maior
    minChars: 40, // ignora avaliações curtas demais ("Ótimo!")
    maxChars: 220, // corta textos longos para caber no card
    timeoutMs: 5000,
    revalidateSeconds: 12 * 60 * 60, // a cada 12 horas
  },
};

export const values = [
  { title: "Empresa de propriedade feminina", description: "Somos uma empresa de propriedade feminina." },
  { title: "Ambiente inclusivo", description: "Um espaço inclusivo e LGBTQ+ friendly, onde todo mundo é bem-vindo." },
  { title: "Acessibilidade", description: "Acessibilidade para cadeirantes." },
  { title: "Wi-Fi gratuito", description: "Wi-Fi gratuito para quem quiser ficar um pouco mais." },
  { title: "Ambiente acolhedor", description: "Um ambiente acolhedor, cheio de verde e de conversa boa." },
];
