// Busca nota, total e avaliações da ficha do Google via Places API (New),
// no servidor. A chave fica em GOOGLE_PLACES_API_KEY e nunca vai ao navegador.
//
// A API devolve no máximo 5 avaliações, ordenadas por relevância. Daqui
// filtramos as de nota alta e com texto, e mostramos as primeiras.
// Se a busca falhar ou nada passar no filtro, usa os dados estáticos de site.ts.

import { googleReviewsFallback, integrations, site, type GoogleReview } from "@/data/site";

const { limit, minRating, minChars, maxChars, timeoutMs, revalidateSeconds } = integrations.googleReviews;

type PlaceReview = {
  name: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text?: { text: string };
  originalText?: { text: string };
  authorAttribution?: { displayName?: string; uri?: string };
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlaceReview[];
};

export type GoogleReviewsData = {
  rating: string; // "4,8"
  count: string; // "142 avaliações"
  url: string;
  reviews: GoogleReview[];
};

const fallback: GoogleReviewsData = {
  rating: site.rating.value,
  count: site.rating.count,
  url: site.rating.url,
  reviews: googleReviewsFallback,
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return fallback;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: revalidateSeconds },
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const place = (await res.json()) as PlaceDetails;

    const reviews = (place.reviews ?? [])
      .map((r): GoogleReview => ({
        id: r.name,
        author: r.authorAttribution?.displayName ?? "Cliente Google",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        when: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.rating >= minRating && r.text.length >= minChars)
      .slice(0, limit)
      .map((r) => ({ ...r, text: truncate(r.text, maxChars) }));

    return {
      rating: place.rating ? place.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 }) : fallback.rating,
      count: place.userRatingCount ? `${place.userRatingCount} avaliações` : fallback.count,
      url: place.googleMapsUri ?? fallback.url,
      // Se nenhuma avaliação passar no filtro, mostra as estáticas.
      reviews: reviews.length > 0 ? reviews : googleReviewsFallback,
    };
  } catch (err) {
    console.error("[google-reviews] falha ao buscar avaliações, usando conteúdo estático:", err);
    return fallback;
  }
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : max).replace(/[\s,.;:!?-]+$/, "")}…`;
}
