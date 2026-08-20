import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BookButton, FinalCta, RatingBadge, SectionHeading } from "@/components/sections";
import {
  site,
  fullAddress,
  directionsUrl,
  mapEmbedUrl,
  telHref,
  whatsappHref,
} from "@/config/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title:
          "Contact & Book a Consultation | Brows & Bloom Aesthetic Clinic, Nagpur",
      },
      {
        name: "description",
        content:
          "Visit Brows & Bloom Aesthetic Clinic at 57, Central Bazar Road, Bajaj Nagar, Nagpur. Book a permanent makeup consultation, call or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact Brows & Bloom Aesthetic Clinic" },
      {
        property: "og:description",
        content:
          "Book a consultation at our Bajaj Nagar studio in Nagpur — permanent makeup, micropigmentation and PMU training.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 pt-40 pb-16 lg:px-10 lg:pt-48">
          <Reveal>
            <p className="eyebrow text-accent">Visit Us</p>
            <h1 className="display mt-6 max-w-3xl text-5xl text-primary sm:text-7xl">
              Step into
              <br />
              Brows &amp; Bloom.
            </h1>
            <p className="mt-7 max-w-xl text-muted-foreground">
              Our studio is on Central Bazar Road in Bajaj Nagar, Nagpur. Appointments
              are one-to-one, so please book ahead.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 pb-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-32">
          <Reveal>
            <div className="aspect-4/3 w-full overflow-hidden border border-border">
              <iframe
                title={`Map to ${site.legalName}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="space-y-8">
              <div>
                <dt className="eyebrow text-accent">Address</dt>
                <dd className="mt-3 font-serif text-2xl leading-snug text-primary">
                  {site.legalName}
                  <br />
                  {site.address.line1},
                  <br />
                  {site.address.line2},
                  <br />
                  {site.address.city}, {site.address.state} – {site.address.pin}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent">Phone</dt>
                <dd className="mt-3">
                  <a href={telHref} className="link-underline text-foreground">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent">Email</dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline text-foreground"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent">Hours</dt>
                <dd className="mt-3 space-y-1 text-muted-foreground">
                  {site.hours.map((entry) => (
                    <p key={entry.days}>
                      <span className="text-foreground">{entry.days}</span> ·{" "}
                      {entry.time}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <BookButton label="Book a Consultation" />
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="eyebrow border border-foreground px-8 py-4 text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get Directions
              </a>
              <a
                href={telHref}
                className="eyebrow border border-foreground px-8 py-4 text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="eyebrow border border-foreground px-8 py-4 text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10">
              <RatingBadge />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{fullAddress}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Consultation"
            title="Tell us what you're looking for."
            sub="Share your details and preferred timing, and we'll get in touch to confirm your consultation."
          />
          <div className="mt-9">
            <BookButton label="Request a Consultation" />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
