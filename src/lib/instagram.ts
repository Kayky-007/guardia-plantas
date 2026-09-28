// Busca os posts mais recentes do Instagram no servidor (nunca no navegador),
// para que o token não apareça no código do site.
//
// Duas fontes possíveis, escolhidas pelas variáveis de ambiente:
//   1. BEHOLD_FEED_URL → feed JSON do Behold.so. Exige que a dona da conta
//      faça login no Behold; se estiver preenchida, tem prioridade.
//   2. META_ACCESS_TOKEN + INSTAGRAM_USER_ID → Business Discovery da Graph
//      API: a SUA conta profissional lê os posts públicos do perfil em
//      site.instagramHandle, sem acesso à conta da loja.
// Sem nenhuma das duas, ou se a busca falhar, usa instagramPosts de site.ts.

import { instagramPosts, integrations, site, type InstaPost } from "@/data/site";

const { limit, timeoutMs, revalidateSeconds, graphApiVersion } = integrations.instagram;

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  isReel?: boolean;
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: { medium?: { mediaUrl?: string }; large?: { mediaUrl?: string } };
};

type GraphMedia = {
  id: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
};

export async function getInstagramPosts(): Promise<InstaPost[]> {
  try {
    const { BEHOLD_FEED_URL, META_ACCESS_TOKEN, INSTAGRAM_USER_ID } = process.env;
    const posts = BEHOLD_FEED_URL
      ? await fromBehold(BEHOLD_FEED_URL)
      : META_ACCESS_TOKEN && INSTAGRAM_USER_ID
        ? await fromBusinessDiscovery(META_ACCESS_TOKEN, INSTAGRAM_USER_ID)
        : [];

    if (posts.length > 0) return posts.slice(0, limit);
  } catch (err) {
    console.error("[instagram] falha ao buscar posts, usando conteúdo estático:", err);
  }
  return instagramPosts;
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: revalidateSeconds },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json() as Promise<T>;
}

async function fromBehold(feedUrl: string): Promise<InstaPost[]> {
  const data = await getJson<{ posts?: BeholdPost[] }>(feedUrl);
  return (data.posts ?? []).flatMap((p): InstaPost[] => {
    const isVideo = p.mediaType === "VIDEO";
    const image =
      p.sizes?.large?.mediaUrl ?? p.sizes?.medium?.mediaUrl ?? (isVideo ? p.thumbnailUrl : p.mediaUrl);
    if (!image) return [];
    return [{ id: p.id, image, kind: isVideo || p.isReel ? "reel" : "post", href: p.permalink }];
  });
}

// Business Discovery não devolve capa dos vídeos, então reels viram <video>.
async function fromBusinessDiscovery(token: string, myUserId: string): Promise<InstaPost[]> {
  const username = site.instagramHandle.replace("@", "");
  const fields = `business_discovery.username(${username}){media.limit(${limit + 4}){id,permalink,media_type,media_url}}`;
  const url = `https://graph.facebook.com/${graphApiVersion}/${myUserId}?fields=${encodeURIComponent(fields)}&access_token=${token}`;
  const data = await getJson<{ business_discovery?: { media?: { data?: GraphMedia[] } } }>(url);
  return (data.business_discovery?.media?.data ?? []).flatMap((m): InstaPost[] => {
    if (!m.media_url) return [];
    return m.media_type === "VIDEO"
      ? [{ id: m.id, image: "", video: m.media_url, kind: "reel", href: m.permalink }]
      : [{ id: m.id, image: m.media_url, kind: "post", href: m.permalink }];
  });
}
