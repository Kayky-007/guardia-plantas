# Guardiã Plantas — Site

Site institucional da Floricultura Guardiã Plantas (Itatiba-SP), feito em
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Como rodar

Pré-requisito: Node.js 18 ou mais recente.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/
    layout.tsx      # fontes, metadata, SEO, JSON-LD (LocalBusiness)
    page.tsx         # monta a home juntando as seções
    globals.css
  components/
    layout/           Header, Footer, WhatsAppButton
    home/              Hero, Categories, EmotionalSection, FlowerBar,
                       TeaExperience, ProductsGrid, DeliverySection,
                       SocialProof, InstagramGallery, AboutSection,
                       LocationSection, ContactSection
    ui/                Container, Reveal (animação de scroll), Icons
  data/
    site.ts           Todos os textos, telefone, endereço, horários,
                       categorias, produtos e posts do Instagram.
                       Comece por aqui para editar conteúdo.
public/
  images/              Fotos do site (hoje com placeholders).
```

## Trocando as fotos

Todas as imagens ficam em `public/images/` com nomes fixos. Basta
substituir o arquivo mantendo o mesmo nome — não precisa editar código:

| Arquivo                          | Onde aparece                          | Proporção sugerida |
|-----------------------------------|----------------------------------------|---------------------|
| hero.jpg                          | Topo, foto principal                   | vertical (5:7)       |
| categoria-buques.jpg               | Categoria "Buquês & Arranjos"          | vertical             |
| categoria-cestas.jpg                | Categoria "Cestas & Presentes"         | horizontal           |
| categoria-orquideas.jpg             | Categoria "Orquídeas & Flores"         | horizontal           |
| categoria-plantas.jpg               | Categoria "Plantas & Folhagens"        | horizontal           |
| emocional.jpg                      | Seção "Flores não são apenas presentes"| horizontal           |
| flower-bar.jpg                     | Flower Bar, foto grande                | vertical (5:7)       |
| flower-bar-detalhe.jpg              | Flower Bar, detalhe pequeno            | quadrada             |
| cafe-cha.jpg                       | Cafés & Chás                           | vertical             |
| produto-buques.jpg ... produto-presentes.jpg | Grade "O que você encontra" (6 fotos) | vertical (3:4) |
| instagram-1.jpg ... instagram-6.jpg | Galeria do Instagram (6 fotos, a 1ª é maior — melhor pra reel) | variado |

Se quiser usar outros nomes de arquivo, ajuste os caminhos em
`src/data/site.ts`.

## Editando textos, telefone e horários

Está tudo centralizado em `src/data/site.ts`: nome, telefone, endereço,
horários, categorias, produtos e posts do Instagram. Editar esse arquivo
já atualiza o site inteiro, inclusive os links do WhatsApp (cada botão
manda uma mensagem pronta diferente) e o JSON-LD de SEO local em
`src/app/layout.tsx`.

## O que falta plugar

- **Avaliações reais do Google**: hoje há duas caixas de exemplo na seção
  de prova social (`SocialProof.tsx`). Troque pelo texto real das
  avaliações quando tiver.
- **Mapa do Google**: a seção de localização (`LocationSection.tsx`) tem
  um mapa ilustrativo em SVG. Para usar o mapa real, troque o bloco do
  SVG por um `<iframe>` do Google Maps Embed, usando o endereço em
  `src/data/site.ts`.
- **Instagram**: os 6 espaços da galeria (`InstagramGallery.tsx`) hoje
  são estáticos. Para automatizar, dá pra plugar a API do Instagram
  Basic Display ou um serviço como o Elfsight/SnapWidget.
- **Link do Facebook**: está marcado como "[inserir link]" no rodapé.

## Instagram e avaliações do Google automáticos

As seções de Instagram e de avaliações buscam conteúdo sozinhas, no
servidor, e guardam em cache. Se a busca falhar, demorar mais de 5 s ou
as credenciais não estiverem configuradas, o site mostra o conteúdo
estático de `src/data/site.ts` (`instagramPosts` e `googleReviewsFallback`).

- Código: `src/lib/instagram.ts` e `src/lib/google-reviews.ts`
- Ajustes (quantidade, nota mínima, frequência): `integrations` em `src/data/site.ts`
- Credenciais: copie `.env.example` para `.env.local` e cadastre as mesmas
  variáveis no painel da hospedagem.

Frequência: Instagram a cada 1 h, Google a cada 12 h, página regerada no
máximo a cada 1 h. Requer hospedagem com servidor Next.js (Vercel, Netlify,
`next start`); não funciona com `output: "export"`.

### Instagram (Business Discovery, sem acesso à conta da loja)
Funciona se o @guardiaplantas for conta Profissional (Comercial ou Criador).
Isso aparece no perfil: há uma categoria, como "Floricultura", abaixo do nome.

1. Com o seu próprio Instagram, mude para conta Profissional e ligue-o a
   uma Página do Facebook sua (Instagram → Configurações → Central de Contas).
2. Em https://developers.facebook.com crie um app do tipo "Business" e
   adicione o produto "Instagram" (API com Login do Facebook).
3. No Graph API Explorer, gere um token de usuário com as permissões
   `instagram_basic`, `pages_show_list`, `pages_read_engagement` e
   `business_management`, e troque-o por um token de longa duração.
4. Chame `GET /me/accounts?fields=access_token,instagram_business_account`
   com esse token. O `access_token` que volta é o token da Página (não
   expira): coloque em `META_ACCESS_TOKEN`. O `instagram_business_account.id`
   vai em `INSTAGRAM_USER_ID`.
5. O app pode ficar em modo de desenvolvimento, pois só você o usa.

Depois da entrega, se a dona quiser, dá para trocar pelo Behold.so: ela
conecta a conta dela em https://behold.so, cria um feed JSON e a URL vai em
`BEHOLD_FEED_URL`.

### Google (Places API New)
1. Em https://console.cloud.google.com crie um projeto, ative o faturamento
   e ative a "Places API (New)".
2. Crie uma chave de API restrita à Places API (New).
3. Em "Cotas", limite a Place Details a ~100 requisições/dia para nunca
   gerar cobrança.
4. Ache o Place ID em
   https://developers.google.com/maps/documentation/places/web-service/place-id
5. Preencha `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID`.
