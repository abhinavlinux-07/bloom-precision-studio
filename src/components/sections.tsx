import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useBooking } from "@/components/booking-context";
import { processSteps, generalFaqs, type Faq } from "@/config/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cta from "@/assets/cta.jpg";
import { site, whatsappHref } from "@/config/site";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-espresso">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/25" />
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pt-40 pb-16 lg:px-10 lg:pb-24">
        <Reveal>
          <p className="eyebrow text-blush">{eyebrow}</p>
          <h1 className="display mt-6 max-w-4xl text-5xl text-ivory sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-base text-ivory/75">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  className,
  light,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", light ? "text-blush" : "text-accent")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "display mt-5 text-4xl sm:text-5xl lg:text-6xl",
          light ? "text-ivory" : "text-primary",
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-5 text-base",
            light ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function BookButton({
  label = "Book a Consultation",
  service,
  variant = "solid",
  className,
}: {
  label?: string;
  service?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      onClick={() => open(service)}
      className={cn(
        "eyebrow px-8 py-4 transition-all duration-300",
        variant === "solid" && "bg-primary text-primary-foreground hover:opacity-90",
        variant === "outline" &&
          "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        variant === "light" &&
          "border border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso",
        className,
      )}
    >
      {label}
    </button>
  );
}

export function ProcessTimeline({ light = false }: { light?: boolean }) {
  return (
    <div className="mt-14 grid gap-px border-t border-border/60 lg:grid-cols-4">
      {processSteps.map((step, i) => (
        <Reveal
          key={step.step}
          delay={i * 90}
          className={cn(
            "border-b border-border/60 py-9 lg:border-r lg:border-b-0 lg:pr-8 lg:pl-8",
            i === 0 && "lg:pl-0",
            light && "border-ivory/20",
          )}
        >
          <span
            className={cn(
              "font-serif text-5xl",
              light ? "text-blush/60" : "text-accent/50",
            )}
          >
            {step.step}
          </span>
          <h3
            className={cn(
              "eyebrow mt-5",
              light ? "text-ivory" : "text-foreground",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-xs text-sm",
              light ? "text-ivory/65" : "text-muted-foreground",
            )}
          >
            {step.text}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqAccordion({ items = generalFaqs }: { items?: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`item-${i}`}
          className="border-b border-foreground/15"
        >
          <AccordionTrigger className="py-6 text-left font-serif text-2xl leading-snug text-primary hover:no-underline sm:text-3xl">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-7 text-base text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FinalCta({
  title = (
    <>
      Your features.
      <br />
      Your design.
      <br />
      Your bloom.
    </>
  ),
  text = "Start your personalised beauty journey with a consultation.",
  service,
}: {
  title?: React.ReactNode;
  text?: string;
  service?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso">
      <img
        src={cta}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="relative mx-auto max-w-[1500px] px-5 py-28 text-center lg:px-10 lg:py-40">
        <Reveal>
          <h2 className="display mx-auto text-5xl text-ivory sm:text-7xl lg:text-8xl">
            {title}
          </h2>
          <p className="mx-auto mt-8 max-w-md text-ivory/75">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BookButton
              label="Book Your Consultation"
              {...(service ? { service } : {})}
              className="bg-ivory text-espresso hover:opacity-90"
            />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="eyebrow border border-ivory/60 px-8 py-4 text-ivory transition-colors hover:bg-ivory hover:text-espresso"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function RatingBadge({ light = false }: { light?: boolean }) {
  return (
    <a
      href={site.rating.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-3 border px-5 py-3",
        light ? "border-ivory/40 text-ivory" : "border-border text-foreground",
      )}
    >
      <span className="text-accent">★★★★★</span>
      <span className="eyebrow">
        {site.rating.score} {site.rating.label}
        {site.rating.count ? ` · ${site.rating.count} reviews` : ""}
      </span>
    </a>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="eyebrow link-underline inline-block text-primary hover:text-accent"
    >
      {children}
    </Link>
  );
}
