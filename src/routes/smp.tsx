import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import {
  BookButton,
  FaqAccordion,
  FinalCta,
  ProcessTimeline,
  SectionHeading,
} from "@/components/sections";
import { smpService } from "@/config/services";

export const Route = createFileRoute("/smp")({
  component: SmpPage,
  head: () => ({
    meta: [
      {
        title: "Scalp Micropigmentation in Nagpur | Brows & Bloom Aesthetic Clinic",
      },
      {
        name: "description",
        content:
          "Scalp micropigmentation in Bajaj Nagar, Nagpur — specialised pigmentation designed to create the visual appearance of hair follicles and improved scalp density.",
      },
      { property: "og:title", content: "Scalp Micropigmentation | Brows & Bloom" },
      {
        property: "og:description",
        content:
          "Redefine the look of hair density with specialised scalp micropigmentation in Nagpur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/smp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/smp" }],
  }),
});

const smpFaqs = [
  {
    q: "What is scalp micropigmentation?",
    a: "SMP places tiny deposits of pigment in the upper layers of the scalp to create the visual appearance of hair follicles and a denser-looking hairline or crown.",
  },
  {
    q: "Does it regrow hair?",
    a: "No. SMP is a cosmetic pigmentation treatment. It changes how the scalp looks; it does not stimulate hair growth.",
  },
  {
    q: "How many sessions are needed?",
    a: "SMP is generally built across multiple sessions so density and tone can be layered gradually. The plan is discussed during consultation.",
  },
  {
    q: "Is it suitable for everyone?",
    a: "Suitability depends on scalp condition, skin sensitivity and medical history, and is assessed individually before treatment.",
  },
];

function SmpPage() {
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-espresso">
        <img
          src={smpService.image}
          alt="Close-up of natural-looking scalp micropigmentation"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/25" />
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-40 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow text-ivory/70">Scalp Micropigmentation</p>
            <h1 className="display mt-6 max-w-3xl text-5xl text-ivory sm:text-7xl lg:text-8xl">
              Redefine the look
              <br />
              of hair density.
            </h1>
            <p className="mt-7 max-w-xl text-ivory/75">{smpService.summary}</p>
            <div className="mt-10">
              <BookButton
                label="Book a Consultation"
                service={smpService.name}
                className="bg-ivory text-espresso"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-espresso">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading light eyebrow="About the treatment" title="Considered. Confident. Understated." />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-ivory/70">
            <p>
              Scalp micropigmentation works by placing thousands of small pigment
              deposits that read as natural follicles, softening the contrast between
              scalp and hair.
            </p>
            <p>
              It suits receding hairlines, thinning crowns, diffuse density loss and
              closely shaved styles. Depth, tone and pattern are matched to your
              existing hair and skin.
            </p>
            <p className="text-sm text-ivory/50 italic">
              SMP is a cosmetic treatment and does not regrow hair. Individual results
              and healing may vary.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="The Process" title="How it works." />
          <ProcessTimeline />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="Transformation" title="Before and after." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <BeforeAfter
                before={smpService.before}
                after={smpService.image}
                label="Scalp Micropigmentation"
              />
            </Reveal>
          </div>
          <p className="mt-10 text-xs text-muted-foreground italic">
            Individual results and healing may vary.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          <FaqAccordion items={smpFaqs} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            Ready to explore
            <br />
            SMP?
          </>
        }
        text="Book a consultation to discuss scalp micropigmentation and whether it suits you."
        service={smpService.name}
      />
    </>
  );
}
