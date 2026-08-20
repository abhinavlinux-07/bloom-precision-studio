import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";
import { useBooking } from "@/components/BookingProvider";

export function MobileCtaBar() {
  const { open } = useBooking();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="eyebrow flex items-center justify-center gap-2 border-r border-border py-4 text-foreground"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={() => open()}
        className="eyebrow bg-primary py-4 text-primary-foreground"
      >
        Book Now
      </button>
    </div>
  );
}
