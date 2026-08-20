import { createFileRoute } from "@tanstack/react-router";
import { FaqAccordion, FinalCta, PageHero } from "@/components/sections";
import { generalFaqs } from "@/config/services";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Permanent Makeup FAQ | Brows & Bloom Aesthetic Clinic, Nagpur" },
      {
        name: "description",
        content:
          "Answers to common questions about permanent makeup, microblading, ombre brows, healing, touch-ups, suitability, scalp micropigmentation and PMU training in Nagpur.",
      },
      { property: "og:title", content: "Questions, answered | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Common questions about permanent makeup and micropigmentation at Brows & Bloom Aesthetic Clinic, Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Questions, answered."
        intro="Information about treatments, healing and suitability. Anything specific to you is discussed during consultation."
        image={about}
      />

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-10 lg:py-32">
          <FaqAccordion items={generalFaqs} />
          <p className="mt-12 text-xs text-muted-foreground italic">
            This information is general and not medical advice. Suitability and results
            vary between individuals.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
