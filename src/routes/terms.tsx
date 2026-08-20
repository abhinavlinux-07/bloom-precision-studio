import { createFileRoute } from "@tanstack/react-router";
import { site, fullAddress } from "@/config/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Brows & Bloom Aesthetic Clinic" },
      {
        name: "description",
        content:
          "Terms and conditions for using the Brows & Bloom Aesthetic Clinic website, submitting consultation requests and booking permanent makeup appointments in Nagpur.",
      },
      { property: "og:title", content: "Terms & Conditions | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Website and appointment terms for Brows & Bloom Aesthetic Clinic, Nagpur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
        <p className="eyebrow text-accent">Legal</p>
        <h1 className="display mt-6 text-5xl text-primary sm:text-6xl">
          Terms &amp; Conditions
        </h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl text-primary">Website content</h2>
            <p className="mt-3">
              Information on this website is provided for general guidance about our
              treatments and training. It is not medical advice and does not guarantee
              any particular outcome.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Consultations and bookings</h2>
            <p className="mt-3">
              Submitting a consultation request is an enquiry, not a confirmed
              appointment. Appointments are confirmed by our team directly. Suitability
              for any treatment is assessed in person before it is carried out.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Results</h2>
            <p className="mt-3">
              Permanent makeup and micropigmentation results, healing and longevity vary
              between individuals depending on skin type, lifestyle and aftercare.
              Images shown are representative of treatment styles.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Intellectual property</h2>
            <p className="mt-3">
              The brand name, logo, text and imagery on this website belong to{" "}
              {site.legalName} and may not be reproduced without permission.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Contact</h2>
            <p className="mt-3">
              {site.legalName}, {fullAddress}. Email:{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-foreground">
                {site.email}
              </a>
              .
            </p>
          </section>
          <p className="text-xs italic">
            These terms are a general template and should be reviewed before
            publication.
          </p>
        </div>
      </div>
    </main>
  );
}
