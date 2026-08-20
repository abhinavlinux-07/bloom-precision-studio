import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { services, smpService } from "@/config/services";
import { whatsappHref } from "@/config/site";

type BookingContextValue = {
  open: (service?: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().trim().min(1, "Please select a treatment"),
  date: z.string().trim().max(30).optional().or(z.literal("")),
  time: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm we may contact you" }),
  }),
});

export type BookingRequest = z.infer<typeof bookingSchema>;

/**
 * Single submission entry point. Currently records the request locally and
 * resolves — swap the body for an email service, WhatsApp API, Google Sheets,
 * CRM or Lovable Cloud call without touching the form UI.
 */
async function submitBooking(data: BookingRequest): Promise<void> {
  // eslint-disable-next-line no-console
  console.info("Consultation request", { service: data.service });
  await new Promise((resolve) => setTimeout(resolve, 600));
}

const treatmentOptions = [
  ...services.map((s) => s.name),
  smpService.name,
  "Professional PMU Training",
  "Not sure yet",
];

const fieldClass =
  "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:border-primary focus-visible:ring-0";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const open = useCallback((preset?: string) => {
    setService(preset ?? "");
    setSubmitted(false);
    setErrors({});
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = bookingSchema.safeParse({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      date: String(form.get("date") ?? ""),
      time: String(form.get("time") ?? ""),
      message: String(form.get("message") ?? ""),
      consent: form.get("consent") === "on",
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setPending(true);
    await submitBooking(parsed.data);
    setPending(false);
    setSubmitted(true);
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-none border-border bg-background p-8 sm:p-12">
          {submitted ? (
            <div className="py-10 text-center">
              <DialogTitle className="display text-5xl text-primary sm:text-6xl">
                Thank you.
              </DialogTitle>
              <p className="mx-auto mt-6 max-w-sm text-muted-foreground">
                Your consultation request has been received. We will get in touch with
                you shortly.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="eyebrow border border-foreground px-7 py-3.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Close
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow bg-primary px-7 py-3.5 text-primary-foreground transition-opacity hover:opacity-90"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="eyebrow text-accent">Book a consultation</p>
              <DialogTitle className="display mt-3 text-4xl sm:text-5xl">
                Let&apos;s design
                <br />
                your treatment.
              </DialogTitle>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Share a few details and we&apos;ll reach out to confirm a time that
                works for you.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field label="Full name" error={errors["name"]}>
                  <Input name="name" required maxLength={100} className={fieldClass} />
                </Field>
                <Field label="Phone number" error={errors["phone"]}>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    maxLength={20}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Email" error={errors["email"]}>
                  <Input
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Select service" error={errors["service"]}>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`${fieldClass} w-full outline-none`}
                  >
                    <option value="">Choose a treatment</option>
                    {treatmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred date" error={errors["date"]}>
                  <Input name="date" type="date" className={fieldClass} />
                </Field>
                <Field label="Preferred time" error={errors["time"]}>
                  <Input name="time" type="time" className={fieldClass} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Tell us what you're looking for" error={errors["message"]}>
                    <Textarea
                      name="message"
                      rows={3}
                      maxLength={1000}
                      className="resize-none rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-primary focus-visible:ring-0"
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <Checkbox id="consent" name="consent" className="mt-1 rounded-none" />
                <Label
                  htmlFor="consent"
                  className="text-sm leading-relaxed font-normal text-muted-foreground"
                >
                  I agree to be contacted regarding my consultation.
                </Label>
              </div>
              {errors["consent"] ? (
                <p className="mt-2 text-xs text-destructive">{errors["consent"]}</p>
              ) : null}

              <button
                type="submit"
                disabled={pending}
                className="eyebrow mt-8 w-full bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? "Sending…" : "Request consultation"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div>
      <span className="eyebrow text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
