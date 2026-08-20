import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/bb-logo.png.asset.json";
import { services, smpService } from "@/config/services";
import { site, fullAddress, telHref, whatsappHref } from "@/config/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/academy", label: "Academy" },
  { to: "/transformations", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo.url}
              alt="Brows & Bloom Aesthetic Clinic"
              width={80}
              height={80}
              loading="lazy"
              className="h-20 w-20 rounded-full"
            />
            <p className="mt-6 max-w-xs font-serif text-2xl leading-snug">
              Beauty, designed with precision.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={site.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" strokeWidth={1.25} />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <Facebook className="h-4 w-4" strokeWidth={1.25} />
              </SocialLink>
              <SocialLink href={whatsappHref} label="WhatsApp">
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
              </SocialLink>
            </div>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60">Quick links</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="link-underline text-primary-foreground/85 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60">Services</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="link-underline text-primary-foreground/85 hover:text-primary-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/smp"
                  className="link-underline text-primary-foreground/85 hover:text-primary-foreground"
                >
                  {smpService.name}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60">Contact</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-primary-foreground/85">
              <p className="max-w-[16rem] leading-relaxed">{fullAddress}</p>
              <p>
                <a href={telHref} className="link-underline">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </p>
            </address>
            <ul className="mt-5 space-y-1 text-xs text-primary-foreground/60">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days} — {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/20 pt-7 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.legalName}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="link-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="link-underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground hover:text-primary"
    >
      {children}
    </a>
  );
}
