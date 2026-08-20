/**
 * Central editable configuration for Brows & Bloom Aesthetic Clinic.
 * Update phone, WhatsApp, email, social handles and review data here only.
 */

export const site = {
  name: "Brows & Bloom",
  legalName: "Brows & Bloom Aesthetic Clinic",
  subtitle: "Aesthetic Clinic",
  tagline: "Beauty, Designed With Precision.",
  intro:
    "Enhancing your natural features through personalised permanent makeup and micropigmentation.",

  /** Replace with the clinic's real numbers (international format, no spaces). */
  phone: "+910000000000",
  phoneDisplay: "+91 00000 00000",
  whatsapp: "910000000000",
  whatsappMessage: "Hello Brows & Bloom, I'd like to know more about a treatment.",
  email: "hello@browsandbloom.in",

  address: {
    line1: "57, Central Bazar Road",
    line2: "Near Salud Restro, Bajaj Nagar",
    city: "Nagpur",
    state: "Maharashtra",
    pin: "440010",
  },

  /** Editable rating block — update count as new reviews come in. */
  rating: {
    score: "5.0",
    label: "Google Rating",
    /** Set to null to hide the count until it is confirmed. */
    count: null as number | null,
    url: "https://www.google.com/maps/search/Brows+%26+Bloom+Aesthetic+Clinic+Bajaj+Nagar+Nagpur",
  },

  social: {
    instagramHandle: "@browsandbloom",
    instagram: "https://instagram.com/browsandbloom",
    facebook: "https://facebook.com/browsandbloom",
  },

  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],

  /**
   * Real Google reviews only. Add verified reviews here as
   * { quote, name, treatment }. Leave empty rather than inventing testimonials.
   */
  reviews: [] as { quote: string; name: string; treatment: string }[],
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} – ${site.address.pin}`;

export const mapsQuery = encodeURIComponent(`${site.legalName}, ${fullAddress}`);
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const telHref = `tel:${site.phone}`;
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
