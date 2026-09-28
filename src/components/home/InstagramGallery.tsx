import { Suspense } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { InstagramIcon, PlayIcon } from "@/components/ui/Icons";
import { integrations, site } from "@/data/site";
import { getInstagramPosts } from "@/lib/instagram";

export default function InstagramGallery() {
  return (
    <section id="instagram" className="bg-moss py-24 text-linen md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Florescendo todos os dias no Instagram.
          </h2>
          <div className="text-left lg:text-right">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-underline font-display text-3xl italic">
              {site.instagramHandle}
            </a>
            <p className="mt-2 text-xs text-sage">Conteúdo do Instagram da Guardiã Plantas</p>
          </div>
        </div>

        <Suspense fallback={<GridSkeleton />}>
          <InstagramGrid />
        </Suspense>

        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 rounded-petal border border-sage px-7 py-4 text-sm font-semibold transition-colors hover:bg-linen hover:text-moss"
        >
          <InstagramIcon className="h-[18px] w-[18px]" />
          Ver mais no Instagram
        </a>
      </Container>
    </section>
  );
}

const gridClass = "mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4";

async function InstagramGrid() {
  const posts = await getInstagramPosts();
  return (
    <div className={gridClass}>
      {posts.map((post, i) => (
        <Reveal
          key={post.id}
          delay={(i % 4) * 0.05}
          className={i === 0 ? "row-span-2" : ""}
        >
          <a
            href={post.href ?? site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.kind === "reel" ? "Reel da Guardiã Plantas no Instagram" : "Post da Guardiã Plantas no Instagram"}
            className="tile group relative block h-full min-h-[170px] overflow-hidden rounded"
          >
            {post.video && !post.image ? (
              <video
                src={`${post.video}#t=0.1`}
                muted
                playsInline
                preload="metadata"
                className="photo-zoom absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image src={post.image} alt="" fill sizes="25vw" className="photo-zoom object-cover" />
            )}
            {post.kind === "reel" && (
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linen/90 text-moss md:h-16 md:w-16">
                <PlayIcon className="ml-0.5 h-4 w-4 md:h-6 md:w-6" />
              </span>
            )}
            <span className="absolute bottom-2 left-2 rounded bg-linen/90 px-2 py-1 text-[11px] font-medium text-moss">
              {post.kind === "reel" ? "Reel" : "Post"}
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className={gridClass} aria-busy="true" aria-label="Carregando posts do Instagram">
      {Array.from({ length: integrations.instagram.limit }).map((_, i) => (
        <div
          key={i}
          className={`min-h-[170px] animate-pulse rounded bg-linen/10 ${i === 0 ? "row-span-2" : ""}`}
        />
      ))}
    </div>
  );
}
