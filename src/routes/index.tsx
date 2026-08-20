import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import {
  BookButton,
  FaqAccordion,
  FinalCta,
  ProcessTimeline,
  RatingBadge,
  SectionHeading,
} from "@/components/sections";
import {
  services,
  smpService,
  academyImage,
  transformations,
} from "@/config/services";
import { site } from "@/config/site";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import expert from "@/assets/expert.jpg";
import clinic from "@/assets/clinic.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "Brows & Bloom Aesthetic Clinic | Permanent Makeup & Microblading in Nagpur",
      },
      {
        name: "description",
        content:
          "Brows & Bloom Aesthetic Clinic offers specialised permanent makeup, microblading, ombre brows, lip blush, permanent eyeliner, scalp micropigmentation and professional PMU training in Nagpur.",
      },
      {
        property: "og:title",
        content: "Brows & Bloom Aesthetic Clinic | Permanent Makeup in Nagpur",
      },
      {
        property: "og:description",
        content:
          "Personalised permanent makeup and micropigmentation in Bajaj Nagar, Nagpur. Beauty, designed with precision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trustItems = [
  "Personalised Design",
  "Specialised PMU",
  "Precision Techniques",
  "Professional Training",
];

const whyItems = [
  {
    title: "Personalised Design",
    text: "Every face is different. Your treatment should be too.",
  },
  {
    title: "Precision Technique",
    text: "Careful planning and detailed application guide every procedure.",
  },
  {
    title: "Specialised Focus",
    text: "Dedicated expertise in permanent makeup and micropigmentation.",
  },
  {
    title: "Guided Aftercare",
    text: "Support and guidance beyond your appointment.",
  },
];

const categories = ["Brows", "Lips", "Eyeliner", "SMP"] as const;

function Home() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Brows");
  const visible = transformations.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-svh items-end overflow-hidden bg-espresso">
        <img
          src={hero}
          alt="Close-up portrait showing naturally enhanced brows and soft lip pigmentation"
          width={1600}
          height={1200}
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-36 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow text-blush">
              Permanent Makeup • Micropigmentation • Training
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-7 text-[3.25rem] leading-[0.95] text-ivory sm:text-8xl lg:text-[8.5rem]">
              Beauty,
              <br />
              designed with
              <br />
              precision.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-lg text-base text-ivory/80">
              Personalised permanent makeup and micropigmentation treatments designed
              to enhance your natural features — not change them.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookButton
                label="Book a Consultation"
                className="bg-ivory text-espresso"
              />
              <a
                href="#services"
                className="eyebrow inline-flex items-center gap-2 border border-ivory/50 px-8 py-4 text-ivory transition-colors hover:bg-ivory hover:text-espresso"
              >
                Explore Services <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-12 inline-flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ivory/25 pt-6">
              <span className="text-accent">★★★★★</span>
              <span className="eyebrow text-ivory/85">
                {site.rating.score} {site.rating.label}
                {site.rating.count ? ` · ${site.rating.count} reviews` : ""}
              </span>
              <span className="text-xs text-ivory/55">Trusted by clients in Nagpur</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 lg:px-10">
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-10">
              <span className="eyebrow text-foreground/75">{item}</span>
              {i < trustItems.length - 1 ? (
                <span className="hidden text-accent sm:inline">•</span>
              ) : null}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-36">
          <Reveal className="img-zoom">
            <img
              src={about}
              alt="Brow mapping and measurement during a treatment at Brows & Bloom"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="About Brows & Bloom" title="More than makeup." />
            <div className="mt-7 max-w-lg space-y-5 text-base text-muted-foreground">
              <p>
                Permanent makeup is not about becoming someone else. It&apos;s about
                enhancing the features that already make you unique.
              </p>
              <p>
                At Brows &amp; Bloom, every treatment begins with understanding your
                individual features, preferences and aesthetic goals.
              </p>
            </div>
            <Link
              to="/about"
              className="eyebrow link-underline mt-9 inline-flex items-center gap-2 text-primary"
            >
              Discover Our Story <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading
            eyebrow="Signature Treatments"
            title="Our signature services."
            sub="Precision treatments. Personalised for you."
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 lg:grid-cols-6">
            {services.map((service, i) => {
              const large = i === 0 || i === 3;
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
                    <div className="mt-6 flex items-start justify-between gap-6 border-t border-border pt-5">
                      <div>
                        <span className="eyebrow text-accent">{service.index}</span>
                        <h3 className="display mt-2 text-3xl text-primary lg:text-4xl">
                          {service.name}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                          {service.short}
                        </p>
                      </div>
                      <span className="eyebrow flex shrink-0 items-center gap-2 pt-2 text-foreground/70 transition-colors group-hover:text-accent">
                        <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16">
            <Link
              to="/services"
              className="eyebrow link-underline inline-flex items-center gap-2 text-primary"
            >
              View All Services <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-36">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="The Results Speak" title="Real transformations." />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "eyebrow border px-5 py-3 transition-colors",
                    activeCategory === category
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground/70 hover:border-primary",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <BeforeAfter
                  before={item.before}
                  after={item.after}
                  label={item.treatment}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <Link
              to="/transformations"
              className="eyebrow link-underline inline-flex items-center gap-2 text-primary"
            >
              View All Transformations{" "}
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
            <p className="text-xs text-muted-foreground italic">
              Individual results and healing may vary.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-primary">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading light title="Why Brows & Bloom?" eyebrow="The Difference" />
          <div className="mt-16 grid gap-px border-t border-ivory/20 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="border-b border-ivory/20 py-10 sm:border-r sm:pr-8 sm:pl-8 lg:pl-8"
              >
                <span className="font-serif text-4xl text-blush/60">0{i + 1}</span>
                <h3 className="eyebrow mt-6 text-ivory">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-ivory/65">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading eyebrow="The Experience" title="Your journey to bloom." />
          <ProcessTimeline />
        </div>
      </section>

      {/* SMP */}
      <section className="bg-espresso">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
          <Reveal className="img-zoom order-2 lg:order-1">
            <img
              src={smpService.image}
              alt="Side profile showing natural-looking scalp micropigmentation"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow text-blush/80">Scalp Micropigmentation</p>
            <h2 className="display mt-6 text-4xl text-ivory sm:text-5xl lg:text-6xl">
              Redefine the look
              <br />
              of hair density.
            </h2>
            <p className="mt-7 max-w-md text-ivory/70">{smpService.summary}</p>
            <Link
              to="/smp"
              className="eyebrow link-underline mt-9 inline-flex items-center gap-2 text-ivory"
            >
              Explore SMP <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-36">
          <Reveal>
            <p className="eyebrow text-accent">Brows &amp; Bloom Academy</p>
            <h2 className="display mt-6 text-4xl text-primary sm:text-5xl lg:text-6xl">
              Learn the art.
              <br />
              Master the precision.
            </h2>
            <p className="mt-7 max-w-md text-muted-foreground">
              Professional PMU training designed for aspiring artists and beauty
              professionals looking to develop specialised skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Microblading",
                "Lip Pigmentation",
                "Permanent Eyeliner",
                "Hands-on Training",
              ].map((tag) => (
                <span
                  key={tag}
                  className="eyebrow border border-border px-4 py-2.5 text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/academy"
              className="eyebrow link-underline mt-9 inline-flex items-center gap-2 text-primary"
            >
              Explore the Academy <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="img-zoom">
            <img
              src={academyImage}
              alt="PMU training session with hands-on practice"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* EXPERT */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-36">
          <Reveal className="img-zoom">
            <img
              src={expert}
              alt="Lead permanent makeup artist at Brows & Bloom Aesthetic Clinic"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Meet the Expert"
              title="The expert behind the precision."
            />
            <div className="mt-7 max-w-lg space-y-5 text-muted-foreground">
              <p>
                Every treatment at Brows &amp; Bloom is guided by one belief: the best
                permanent makeup is the kind nobody can identify as permanent makeup.
              </p>
              <p>
                Consultation, mapping and pigment selection are treated as three
                separate disciplines — because a beautiful result depends on all three
                being right for your face.
              </p>
            </div>
            <dl className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
              {[
                ["Name", "To be confirmed"],
                ["Specialisation", "Brows, lips & micropigmentation"],
                ["Experience", "To be confirmed"],
                ["Certifications", "To be confirmed"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="eyebrow text-muted-foreground">{label}</dt>
                  <dd className="mt-2 font-serif text-xl text-primary">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/about"
              className="eyebrow link-underline mt-9 inline-flex items-center gap-2 text-primary"
            >
              Meet the Expert <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading
            eyebrow="Client Experiences"
            title="Loved by our clients."
          />
          {site.reviews.length > 0 ? (
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {site.reviews.map((review, i) => (
                <Reveal key={review.name} delay={i * 90} className="border border-border p-8">
                  <span className="text-accent">★★★★★</span>
                  <p className="mt-5 font-serif text-xl leading-snug text-foreground">
                    “{review.quote}”
                  </p>
                  <p className="eyebrow mt-6 text-foreground">{review.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {review.treatment}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mt-14 max-w-2xl border border-border p-10">
              <RatingBadge />
              <p className="mt-6 text-muted-foreground">
                Our clients share their experiences on Google. Verified reviews will be
                featured here — read them all on our Google Business profile.
              </p>
            </Reveal>
          )}
          <div className="mt-12">
            <a
              href={site.rating.url}
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline inline-flex items-center gap-2 text-primary"
            >
              Read More Reviews on Google{" "}
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36">
          <SectionHeading eyebrow="Good to know" title="Questions, answered." />
          <div>
            <FaqAccordion />
            <Link
              to="/faq"
              className="eyebrow link-underline mt-10 inline-flex items-center gap-2 text-primary"
            >
              All FAQs <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Follow the transformation." />
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline text-accent"
            >
              {site.social.instagramHandle}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              services[0]!.image,
              services[2]!.image,
              clinic,
              services[4]!.image,
              smpService.image,
              academyImage,
            ].map((image, i) => (
              <a
                key={i}
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group img-zoom relative block",
                  i === 2 && "col-span-2 row-span-2 sm:col-span-1 lg:col-span-2",
                )}
              >
                <img
                  src={image}
                  alt="Brows & Bloom work on Instagram"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-ivory" strokeWidth={1.25} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-0 lg:grid-cols-2">
          <iframe
            title="Brows & Bloom Aesthetic Clinic location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${site.legalName}, ${site.address.line1}, ${site.address.line2}, ${site.address.city}`,
            )}&output=embed`}
            loading="lazy"
            className="h-[340px] w-full border-0 lg:h-full lg:min-h-[520px]"
          />
          <div className="px-5 py-20 lg:px-16">
            <SectionHeading eyebrow="Visit Us" title="Step into Brows & Bloom." />
            <address className="mt-8 space-y-1 font-serif text-2xl leading-snug text-foreground not-italic">
              <p>{site.legalName}</p>
              <p className="text-muted-foreground">{site.address.line1},</p>
              <p className="text-muted-foreground">{site.address.line2},</p>
              <p className="text-muted-foreground">
                {site.address.city}, {site.address.state} – {site.address.pin}
              </p>
            </address>
            <div className="mt-10">
              <Link
                to="/contact"
                className="eyebrow link-underline inline-flex items-center gap-2 text-primary"
              >
                Directions, Call &amp; WhatsApp{" "}
                <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
