import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FinalCta, PageHero, RatingBadge, SectionHeading } from "@/components/sections";
import { site } from "@/config/site";
import clinic from "@/assets/clinic.jpg";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Client Reviews | Brows & Bloom Aesthetic Clinic, Nagpur" },
      {
        name: "description",
        content:
          "Read client experiences of permanent makeup, microblading, lip blush and scalp micropigmentation at Brows & Bloom Aesthetic Clinic in Bajaj Nagar, Nagpur.",
      },
      { property: "og:title", content: "Loved by our clients | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Client experiences from Brows & Bloom Aesthetic Clinic, Nagpur — rated 5.0 on Google.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

function ReviewsPage() {
  const reviews = site.reviews;

  return (
    <>
      <PageHero
        eyebrow="Client Experiences"
        title="Loved by our clients."
        intro="Verified Google reviews from clients treated at our Bajaj Nagar studio."
        image={clinic}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="The Rating"
              title="Five stars, consistently."
              sub="Our Google rating is updated as new reviews are received."
            />
            <RatingBadge />
          </div>

          {reviews.length > 0 ? (
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <Reveal key={review.name + i} delay={(i % 3) * 90}>
                  <figure className="flex h-full flex-col border border-border p-8">
                    <span className="text-accent">★★★★★</span>
                    <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-primary">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border pt-5">
                      <p className="eyebrow text-foreground">{review.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {review.treatment}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-16 border border-border p-10 lg:p-16">
              <p className="font-serif text-2xl text-primary lg:text-3xl">
                Client reviews are published on our Google Business profile.
              </p>
              <p className="mt-5 max-w-xl text-muted-foreground">
                We only publish verified reviews here. Read what clients have written,
                straight from Google.
              </p>
            </div>
          )}

          <a
            href={site.rating.url}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-12 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
          >
            Read more reviews on Google
            <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
          </a>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
