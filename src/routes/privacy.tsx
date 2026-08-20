import { createFileRoute } from "@tanstack/react-router";
import { site, fullAddress } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Brows & Bloom Aesthetic Clinic" },
      {
        name: "description",
        content:
          "How Brows & Bloom Aesthetic Clinic in Nagpur collects, uses and protects the personal information shared through consultation requests and enquiries.",
      },
      { property: "og:title", content: "Privacy Policy | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Privacy practices for enquiries and consultation requests at Brows & Bloom Aesthetic Clinic.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
        <p className="eyebrow text-accent">Legal</p>
        <h1 className="display mt-6 text-5xl text-primary sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl text-primary">Information we collect</h2>
            <p className="mt-3">
              When you submit a consultation request or contact us, we collect the name,
              phone number, email address, treatment interest and any message you
              choose to share. We do not collect payment details through this website.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">How we use it</h2>
            <p className="mt-3">
              Your details are used only to respond to your enquiry, schedule or confirm
              appointments, and share treatment or aftercare information you have asked
              for.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Sharing</h2>
            <p className="mt-3">
              We do not sell your information. Details may be handled by service
              providers we use to run the clinic and this website (for example
              messaging, email or scheduling tools), and may be disclosed where required
              by law.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-primary">Retention and your rights</h2>
            <p className="mt-3">
              We keep enquiry records only as long as needed for the purposes above. You
              may ask us to access, correct or delete the information we hold about you
              by contacting us.
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
            This policy is a general template and should be reviewed before publication.
          </p>
        </div>
      </div>
    </main>
  );
}
