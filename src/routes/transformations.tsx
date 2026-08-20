import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FinalCta, PageHero } from "@/components/sections";
import { transformations } from "@/config/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/transformations")({
  component: TransformationsPage,
  head: () => ({
    meta: [
      {
        title: "Transformations Gallery | Brows & Bloom Aesthetic Clinic, Nagpur",
      },
      {
        name: "description",
        content:
          "Before and after transformations for microblading, ombre brows, lip blush, permanent eyeliner and scalp micropigmentation at Brows & Bloom Aesthetic Clinic, Nagpur.",
      },
      { property: "og:title", content: "Real Transformations | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Explore before and after results from our permanent makeup and micropigmentation treatments in Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/transformations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/transformations" }],
  }),
});

const filters = ["All", "Brows", "Lips", "Eyeliner", "SMP"] as const;

function TransformationsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All"
      ? transformations
      : transformations.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        eyebrow="The Results Speak"
        title="Real transformations."
        intro="Drag each slider to compare before and after. Individual results and healing may vary."
        image={transformations[0]!.after}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  "eyebrow border px-5 py-3 transition-colors",
                  active === filter
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-primary",
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 90}>
                <BeforeAfter
                  before={item.before}
                  after={item.after}
                  label={item.treatment}
                />
              </Reveal>
            ))}
          </div>

          <p className="mt-14 text-xs text-muted-foreground italic">
            Individual results and healing may vary. Images shown are representative of
            treatment styles.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
