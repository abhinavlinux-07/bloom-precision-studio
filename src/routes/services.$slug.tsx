import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import {
  BookButton,
  FaqAccordion,
  FinalCta,
  ProcessTimeline,
  SectionHeading,
} from "@/components/sections";
import { services } from "@/config/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServicePage,
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [{ title: "Treatment unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.seoDescription },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-espresso">
        <img
          src={service.image}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-40 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow text-blush">
              {service.index} · Permanent Makeup
            </p>
            <h1 className="display mt-6 max-w-3xl text-5xl text-ivory sm:text-7xl lg:text-8xl">
              {service.name}
            </h1>
            <p className="mt-7 max-w-xl text-ivory/80">{service.summary}</p>
            <div className="mt-10">
              <BookButton
                label="Book a Consultation"
                service={service.name}
                className="bg-ivory text-espresso"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="About the treatment" title="What it is." />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-muted-foreground">
              {service.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-border pt-7">
              <p className="eyebrow text-accent">Who may consider it</p>
              <ul className="mt-5 space-y-3">
                {service.considerations.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground">
                    <span className="text-accent">—</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-xs text-muted-foreground italic">
              Suitability is assessed individually during consultation. Individual
              results and healing may vary.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="The Process" title="How it works." />
          <ProcessTimeline />
        </div>
      </section>

      {service.before ? (
        <section className="bg-background">
          <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
            <SectionHeading
              eyebrow="Transformation Gallery"
              title="Before and after."
            />
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal>
                <BeforeAfter
                  before={service.before}
                  after={service.image}
                  label={service.name}
                />
              </Reveal>
            </div>
            <p className="mt-10 text-xs text-muted-foreground italic">
              Individual results and healing may vary.
            </p>
          </div>
        </section>
      ) : null}

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Also explore" title="Other treatments." />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: other.slug }}
                  className="group block"
                >
                  <div className="img-zoom">
                    <img
                      src={other.image}
                      alt={other.name}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                  </div>
                  <h3 className="display mt-5 text-2xl text-primary">{other.name}</h3>
                  <span className="eyebrow mt-3 inline-flex items-center gap-2 text-foreground/70 group-hover:text-accent">
                    Explore <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            Ready to explore
            <br />
            this treatment?
          </>
        }
        text={`Book a consultation to discuss ${service.name.toLowerCase()} and whether it suits you.`}
        service={service.name}
      />
    </>
  );
}
