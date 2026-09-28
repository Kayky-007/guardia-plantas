import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { StarIcon } from "@/components/ui/Icons";
import { integrations, site } from "@/data/site";
import { getGoogleReviews, type GoogleReviewsData } from "@/lib/google-reviews";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28">
      <Suspense fallback={<SocialProofContent data={null} />}>
        <LiveSocialProof />
      </Suspense>
    </section>
  );
}

async function LiveSocialProof() {
  const data = await getGoogleReviews();
  return <SocialProofContent data={data} />;
}

// data === null → estado de carregamento (nota estática + cards em skeleton).
function SocialProofContent({ data }: { data: GoogleReviewsData | null }) {
  const rating = data?.rating ?? site.rating.value;
  const count = data?.count ?? site.rating.count;
  const url = data?.url ?? site.rating.url;

  return (
    <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="flex items-end gap-6">
          <p className="font-display text-8xl font-medium leading-[0.8] tracking-tight md:text-9xl">
            {rating}
          </p>
          <div>
            <div role="img" aria-label={`Nota ${rating} de 5 estrelas`} className="flex gap-1 text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed">no Google, com {count}</p>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-8 inline-block text-sm font-semibold"
        >
          Ver avaliações no Google
        </a>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
        {data
          ? data.reviews.map((review, i) => (
              <Reveal key={review.id} delay={i * 0.1}>
                <figure className="flex h-full min-h-48 flex-col justify-between gap-6 rounded border border-dashed border-[#BFB49D] p-7">
                  <blockquote className="font-display text-xl italic leading-snug text-olive">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="text-xs font-semibold text-olive">
                    {review.authorUrl ? (
                      <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                        {review.author}
                      </a>
                    ) : (
                      review.author
                    )}{" "}
                    · Google{review.when ? ` · ${review.when}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))
          : Array.from({ length: integrations.googleReviews.limit }).map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="h-48 animate-pulse rounded border border-dashed border-[#BFB49D] bg-sand/40"
              />
            ))}
      </div>
    </Container>
  );
}
