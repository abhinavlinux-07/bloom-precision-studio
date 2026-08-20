import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  FinalCta,
  PageHero,
  ProcessTimeline,
  SectionHeading,
} from "@/components/sections";
import clinic from "@/assets/clinic.jpg";
import expert from "@/assets/expert.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Brows & Bloom Aesthetic Clinic, Nagpur" },
      {
        name: "description",
        content:
          "Brows & Bloom is a specialised permanent makeup and micropigmentation clinic in Bajaj Nagar, Nagpur, built around personalised design and precise technique.",
      },
      { property: "og:title", content: "About Brows & Bloom Aesthetic Clinic" },
      {
        property: "og:description",
        content:
          "A specialised permanent makeup studio in Nagpur focused on personalised, natural-looking enhancement.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Brows & Bloom"
        title="More than makeup."
        intro="A specialised aesthetic clinic in Nagpur dedicated to permanent makeup and cosmetic micropigmentation."
        image={clinic}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-36">
          <Reveal>
            <SectionHeading eyebrow="Our Philosophy" title="Enhancement, never imitation." />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base text-muted-foreground">
            <p>
              Permanent makeup is not about becoming someone else. It&apos;s about
              enhancing the features that already make you unique.
            </p>
            <p>
              At Brows &amp; Bloom, every treatment begins with understanding your
              individual features, preferences and aesthetic goals. Only then do we
              discuss shape, tone and technique.
            </p>
            <p>
              We are not a general beauty parlour. Our focus is narrow on purpose —
              brows, lips, eyeliner, cheeks and scalp micropigmentation — because
              specialised work asks for specialised attention.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10 lg:py-32">
          <Reveal className="img-zoom">
            <img
              src={about}
              alt="Precision brow mapping at Brows & Bloom Aesthetic Clinic"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="The Clinic" title="Considered, calm, precise." />
            <p className="mt-7 text-muted-foreground">
              Our studio on Central Bazar Road in Bajaj Nagar was designed as a quiet
              space for detailed work — single-client appointments, unhurried mapping
              and time to talk through every decision before treatment begins.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-36">
          <Reveal className="img-zoom">
            <img
              src={expert}
              alt="Lead permanent makeup artist at Brows & Bloom"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Meet the Expert"
              title="The expert behind the precision."
            />
            <p className="mt-7 max-w-lg text-muted-foreground">
              Details below are placeholders and can be updated with the founder&apos;s
              confirmed name, experience and certifications.
            </p>
            <dl className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
              {[
                ["Name", "To be confirmed"],
                ["Experience", "To be confirmed"],
                ["Certifications", "To be confirmed"],
                ["Specialisation", "Brows, lips, eyeliner & SMP"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="eyebrow text-muted-foreground">{label}</dt>
                  <dd className="mt-2 font-serif text-xl text-primary">{value}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="mt-9 border-l border-accent pl-6 font-serif text-2xl leading-snug text-primary">
              “The best permanent makeup is the kind nobody can identify as permanent
              makeup.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="The Experience" title="Your journey to bloom." />
          <ProcessTimeline />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
