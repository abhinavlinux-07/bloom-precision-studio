import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FinalCta, PageHero, SectionHeading } from "@/components/sections";
import { services, smpService, academyImage } from "@/config/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      {
        title:
          "Permanent Makeup Services in Nagpur | Brows & Bloom Aesthetic Clinic",
      },
      {
        name: "description",
        content:
          "Microblading, ombre brows, lip blush, lip neutralization, permanent eyeliner, cheek blush and scalp micropigmentation at Brows & Bloom Aesthetic Clinic, Bajaj Nagar, Nagpur.",
      },
      { property: "og:title", content: "Our Services | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Specialised permanent makeup and micropigmentation treatments in Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature Treatments"
        title="Our services."
        intro="Precision treatments. Personalised for you."
        image={services[0]!.image}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-x-8 gap-y-14 lg:grid-cols-6">
            {services.map((service, i) => {
              const large = i % 3 === 0;
              return (
                <Reveal
                  key={service.slug}
                  delay={(i % 3) * 90}
                  className={large ? "lg:col-span-4" : "lg:col-span-2"}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group block"
                  >
                    <div className="img-zoom">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className={cn(
                          "w-full object-cover",
                          large ? "aspect-4/3" : "aspect-3/4",
                        )}
                      />
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <span className="eyebrow text-accent">{service.index}</span>
                      <h2 className="display mt-2 text-3xl text-primary lg:text-4xl">
                        {service.name}
                      </h2>
                      <p className="mt-3 max-w-md text-sm text-muted-foreground">
                        {service.summary}
                      </p>
                      <span className="eyebrow mt-5 inline-flex items-center gap-2 text-foreground/70 transition-colors group-hover:text-accent">
                        Explore Treatment{" "}
                        <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <Reveal>
            <Link to="/smp" className="group block">
              <div className="img-zoom">
                <img
                  src={smpService.image}
                  alt="Scalp micropigmentation"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <span className="eyebrow text-accent">07</span>
                <h2 className="display mt-2 text-3xl text-primary lg:text-4xl">
                  Scalp Micropigmentation
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {smpService.summary}
                </p>
                <span className="eyebrow mt-5 inline-flex items-center gap-2 text-foreground/70 group-hover:text-accent">
                  Explore SMP <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/academy" className="group block">
              <div className="img-zoom">
                <img
                  src={academyImage}
                  alt="Professional PMU training"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <span className="eyebrow text-accent">08</span>
                <h2 className="display mt-2 text-3xl text-primary lg:text-4xl">
                  Professional PMU Training
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Short-term professional training and certification covering brows, lip
                  techniques, eyeliner techniques and practical training.
                </p>
                <span className="eyebrow mt-5 inline-flex items-center gap-2 text-foreground/70 group-hover:text-accent">
                  Explore the Academy{" "}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="A consultation comes first."
            sub="Every treatment begins with a conversation about suitability, expectations and design — no obligation to book a procedure."
          />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
