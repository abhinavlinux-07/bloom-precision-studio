import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  BookButton,
  FaqAccordion,
  FinalCta,
  SectionHeading,
} from "@/components/sections";
import { academyImage } from "@/config/services";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
  head: () => ({
    meta: [
      { title: "PMU Training in Nagpur | Brows & Bloom Academy" },
      {
        name: "description",
        content:
          "Professional permanent makeup training in Nagpur. Short-term certification courses in microblading, lip pigmentation and eyeliner techniques with hands-on practical training.",
      },
      { property: "og:title", content: "Brows & Bloom Academy | PMU Training" },
      {
        property: "og:description",
        content:
          "Learn the art. Master the precision. Professional PMU training at Brows & Bloom Academy, Bajaj Nagar, Nagpur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/academy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
});

const modules = [
  {
    index: "01",
    title: "Brow Techniques",
    text: "Brow theory, mapping, symmetry and both hair-stroke and shading approaches.",
  },
  {
    index: "02",
    title: "Lip Techniques",
    text: "Lip anatomy, shade theory, blush application and an introduction to neutralization.",
  },
  {
    index: "03",
    title: "Eyeliner Techniques",
    text: "Lash-line enhancement and defined liner styles on the delicate eye area.",
  },
  {
    index: "04",
    title: "Hands-on Practical",
    text: "Supervised practice on training skins, machine handling, hygiene and workflow.",
  },
];

const academyFaqs = [
  {
    q: "Who can join the course?",
    a: "Courses are designed for aspiring artists and beauty professionals looking to develop specialised permanent makeup skills. No prior PMU experience is required for foundation modules.",
  },
  {
    q: "How long are the courses?",
    a: "Courses are short-term and modular. Exact duration depends on the modules selected and is confirmed at enrolment.",
  },
  {
    q: "Is a certificate provided?",
    a: "Yes — a certificate of completion is issued for the modules successfully completed.",
  },
  {
    q: "Is practical training included?",
    a: "Yes. Supervised hands-on practice is a core part of every course.",
  },
];

function AcademyPage() {
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-espresso">
        <img
          src={academyImage}
          alt="Instructor guiding a student during PMU training"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-40 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow text-blush">Brows &amp; Bloom Academy</p>
            <h1 className="display mt-6 max-w-3xl text-5xl text-ivory sm:text-7xl lg:text-8xl">
              Learn the art.
              <br />
              Master the precision.
            </h1>
            <p className="mt-7 max-w-xl text-ivory/80">
              Professional PMU training designed for aspiring artists and beauty
              professionals looking to develop specialised skills.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Microblading",
                "Lip Pigmentation",
                "Permanent Eyeliner",
                "Hands-on Training",
              ].map((tag) => (
                <span
                  key={tag}
                  className="eyebrow border border-ivory/40 px-4 py-2.5 text-ivory/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <BookButton
                label="Enquire About Training"
                service="Professional PMU Training"
                className="bg-ivory text-espresso"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            eyebrow="Course Modules"
            title="A career-focused curriculum."
            sub="Short-term professional training and certification, taught in small groups."
          />
          <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, i) => (
              <Reveal
                key={module.index}
                delay={i * 90}
                className="border-b border-border py-10 sm:border-r sm:px-8 sm:first:pl-0"
              >
                <span className="font-serif text-5xl text-accent/50">
                  {module.index}
                </span>
                <h2 className="eyebrow mt-6 text-foreground">{module.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{module.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
          <Reveal className="img-zoom">
            <img
              src={academyImage}
              alt="Hands-on PMU practice with pigments and equipment"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Why train with us" title="Skill, not shortcuts." />
            <div className="mt-7 space-y-5 text-muted-foreground">
              <p>
                Training is delivered by working artists, in a working clinic — so what
                you learn reflects real client scenarios rather than theory alone.
              </p>
              <p>
                Emphasis is placed on hygiene, consultation skills, mapping and
                consistency of technique: the fundamentals that make a career
                sustainable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <SectionHeading eyebrow="FAQ" title="Training questions." />
          <FaqAccordion items={academyFaqs} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            Start your
            <br />
            PMU career.
          </>
        }
        text="Enquire about upcoming course dates and module options."
        service="Professional PMU Training"
      />
    </>
  );
}
