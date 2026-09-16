import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/bb-logo.png.asset.json";
import { site, whatsappHref, telHref } from "@/config/site";
import { useBooking } from "@/components/booking-context";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/smp", label: "SMP" },
  { to: "/academy", label: "Academy" },
  { to: "/transformations", label: "Transformations" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/92 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 lg:grid-cols-[1fr_auto_1fr] lg:px-10",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Brows & Bloom Aesthetic Clinic"
              width={64}
              height={64}
              className={cn(
                "shrink-0 rounded-full transition-all duration-500",
                scrolled ? "h-10 w-10" : "h-12 w-12 lg:h-14 lg:w-14",
              )}
            />
            <span className="hidden min-w-0 flex-col leading-none sm:flex">
              <span className="truncate font-serif text-lg tracking-wide text-primary">
                Brows &amp; Bloom
              </span>
              <span className="eyebrow mt-1 text-[9px] text-muted-foreground">
                {site.subtitle}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="eyebrow link-underline text-[10px] text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => open()}
              className="eyebrow hidden bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
            >
              Book Consultation
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-60 flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <img
              src={logo.url}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-border"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-border py-4 font-serif text-3xl text-foreground data-[status=active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 px-5 pb-8">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="eyebrow w-full bg-primary px-6 py-4 text-primary-foreground"
            >
              Book Consultation
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="eyebrow flex items-center justify-center gap-2 border border-foreground px-4 py-4 text-foreground"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} /> WhatsApp
              </a>
              <a
                href={telHref}
                className="eyebrow flex items-center justify-center gap-2 border border-foreground px-4 py-4 text-foreground"
              >
                <Phone className="h-4 w-4" strokeWidth={1.25} /> Call
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
