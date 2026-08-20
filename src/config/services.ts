import microblading from "@/assets/microblading.jpg";
import ombre from "@/assets/ombre.jpg";
import lipBlush from "@/assets/lip-blush.jpg";
import eyeliner from "@/assets/eyeliner.jpg";
import cheekBlush from "@/assets/cheek-blush.jpg";
import smp from "@/assets/smp.jpg";
import academy from "@/assets/academy.jpg";
import beforeBrows from "@/assets/before-brows.jpg";
import beforeLips from "@/assets/before-lips.jpg";
import beforeEyeliner from "@/assets/before-eyeliner.jpg";
import beforeSmp from "@/assets/before-smp.jpg";

export type ProcessStep = { step: string; title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  before?: string;
  category: "brows" | "lips" | "eyeliner" | "cheeks";
  about: string[];
  considerations: string[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consult",
    text: "Understand your goals and treatment suitability.",
  },
  {
    step: "02",
    title: "Design & Map",
    text: "Carefully plan the treatment around your individual features.",
  },
  {
    step: "03",
    title: "Precision Procedure",
    text: "Perform the selected permanent makeup or micropigmentation treatment.",
  },
  {
    step: "04",
    title: "Heal & Bloom",
    text: "Follow the recommended healing and aftercare process.",
  },
];

export const services: Service[] = [
  {
    slug: "microblading",
    index: "01",
    name: "Microblading",
    short: "Natural-looking hair strokes.",
    summary:
      "Semi-permanent hair-stroke eyebrow technique designed to create the appearance of fuller, natural-looking and balanced brows.",
    image: microblading,
    before: beforeBrows,
    category: "brows",
    about: [
      "Microblading places fine, hair-like strokes of pigment within the upper layers of the skin, following the natural direction of your brow hair.",
      "Every brow is mapped to your bone structure, facial proportions and preferences before a single stroke is placed. The intention is a brow that reads as your own — not a drawn-on shape.",
    ],
    considerations: [
      "Clients with sparse, uneven or over-plucked brows",
      "Those looking for a defined brow without daily makeup",
      "Best suited to normal to dry skin types",
    ],
    faqs: [
      {
        q: "How long does microblading last?",
        a: "Most clients see results for roughly 12 to 18 months, depending on skin type, lifestyle and sun exposure. A refresh appointment helps maintain definition.",
      },
      {
        q: "Will it look like hair?",
        a: "Strokes are placed individually to imitate natural brow hairs. Results appear softer once fully healed.",
      },
      {
        q: "Is a touch-up needed?",
        a: "A review and touch-up is usually recommended after the initial healing period to settle colour and refine the shape.",
      },
    ],
    seoTitle: "Microblading in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Semi-permanent hair-stroke microblading in Bajaj Nagar, Nagpur. Personalised brow mapping and precise application at Brows & Bloom Aesthetic Clinic.",
  },
  {
    slug: "ombre-brows",
    index: "02",
    name: "Ombre Brows",
    short: "Soft. Defined. Effortlessly polished.",
    summary:
      "Soft powder-effect brows with a more defined and polished appearance.",
    image: ombre,
    before: beforeBrows,
    category: "brows",
    about: [
      "Ombre brows use a fine, shaded pigment technique that fades softly at the front and builds definition through the tail — a finish similar to lightly filled brows.",
      "The technique suits a wider range of skin types than hair strokes and is often chosen by clients who prefer a more finished, polished brow.",
    ],
    considerations: [
      "Clients who prefer a soft, filled-in brow appearance",
      "Oily or combination skin types",
      "Those wanting a longer-wearing alternative to hair strokes",
    ],
    faqs: [
      {
        q: "How is this different from microblading?",
        a: "Microblading creates individual hair strokes; ombre brows create a soft, shaded powder effect. Ombre generally suits oilier skin better and heals more evenly.",
      },
      {
        q: "Will it look too dark?",
        a: "Pigment appears more intense in the first few days and softens considerably as it heals.",
      },
    ],
    seoTitle: "Ombre Powder Brows in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Soft powder ombre brows at Brows & Bloom Aesthetic Clinic, Central Bazar Road, Bajaj Nagar, Nagpur. Personalised brow design and shading.",
  },
  {
    slug: "lip-blush",
    index: "03",
    name: "Lip Blush",
    short: "A naturally enhanced wash of colour.",
    summary:
      "Semi-permanent pigmentation designed to enhance and balance the natural appearance of the lips.",
    image: lipBlush,
    before: beforeLips,
    category: "lips",
    about: [
      "Lip blush introduces a soft wash of colour into the lips, enhancing definition around the border and creating a more balanced-looking lip tone.",
      "Shade selection is discussed in consultation and chosen to complement your natural lip colour and undertone.",
    ],
    considerations: [
      "Clients with pale or uneven-looking lip tone",
      "Those wanting softer definition without lipstick",
      "Anyone looking for a subtle, everyday enhancement",
    ],
    faqs: [
      {
        q: "Does it look like lipstick?",
        a: "Healed results are typically much softer than lipstick — closer to a tinted balm.",
      },
      {
        q: "How long does it take to heal?",
        a: "Lips generally go through an initial peeling stage in the first week, with colour continuing to settle over the following weeks.",
      },
    ],
    seoTitle: "Lip Blush Treatment in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Semi-permanent lip blush pigmentation in Nagpur. Personalised shade selection and precise application at Brows & Bloom Aesthetic Clinic, Bajaj Nagar.",
  },
  {
    slug: "lip-neutralization",
    index: "04",
    name: "Lip Neutralization",
    short: "Designed for a more balanced-looking lip tone.",
    summary:
      "Specialised cosmetic pigmentation for clients with darker or uneven lip tone.",
    image: lipBlush,
    before: beforeLips,
    category: "lips",
    about: [
      "Lip neutralization is a specialised approach for lips with deeper or uneven pigmentation, using corrective tones before a chosen colour is introduced.",
      "This treatment is planned carefully and may require more than one session depending on your starting lip tone.",
    ],
    considerations: [
      "Clients with naturally darker or uneven lip pigmentation",
      "Those who have found standard lip tints appear patchy",
      "Anyone seeking a more even-looking lip base",
    ],
    faqs: [
      {
        q: "How many sessions are required?",
        a: "This varies from person to person. Deeper lip tones commonly need more than one session, which is discussed during consultation.",
      },
      {
        q: "Can the result be predicted exactly?",
        a: "No treatment can guarantee an exact outcome. Results depend on your natural pigmentation and how your skin responds.",
      },
    ],
    seoTitle: "Lip Neutralization in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Specialised lip neutralization for darker or uneven lip tone at Brows & Bloom Aesthetic Clinic in Bajaj Nagar, Nagpur.",
  },
  {
    slug: "permanent-eyeliner",
    index: "05",
    name: "Permanent Eyeliner",
    short: "Definition that stays with you.",
    summary:
      "Precision cosmetic pigmentation for long-lasting eye definition.",
    image: eyeliner,
    before: beforeEyeliner,
    category: "eyeliner",
    about: [
      "Permanent eyeliner places pigment along the lash line to create the appearance of a fuller lash base or a defined line, depending on the style chosen.",
      "Styles range from a subtle lash enhancement to a more visible line, planned together during your consultation.",
    ],
    considerations: [
      "Clients who wear eyeliner daily",
      "Those with sparse-looking lash lines",
      "Anyone who finds applying liner difficult",
    ],
    faqs: [
      {
        q: "Is the eye area sensitive?",
        a: "The area is delicate and comfort measures are used throughout. Any sensitivity is discussed before the appointment.",
      },
      {
        q: "How subtle can it be?",
        a: "A lash-line enhancement sits between the lashes and simply makes the lash base look denser.",
      },
    ],
    seoTitle: "Permanent Eyeliner in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Precision permanent eyeliner and lash-line enhancement in Nagpur at Brows & Bloom Aesthetic Clinic, Central Bazar Road, Bajaj Nagar.",
  },
  {
    slug: "cheek-blush",
    index: "06",
    name: "Cheek Blush",
    short: "A subtle, lasting flush.",
    summary:
      "Subtle cosmetic pigmentation designed to create a soft, naturally flushed appearance.",
    image: cheekBlush,
    category: "cheeks",
    about: [
      "Cheek blush pigmentation introduces a very soft veil of colour across the cheeks to create the look of a natural flush.",
      "Placement follows your facial structure, and intensity is built gradually so the result stays understated.",
    ],
    considerations: [
      "Clients wanting a soft, healthy-looking colour",
      "Those simplifying a daily makeup routine",
      "Anyone seeking a very subtle enhancement",
    ],
    faqs: [
      {
        q: "How noticeable is it?",
        a: "The intention is subtlety — a soft flush rather than a defined blush shape.",
      },
      {
        q: "How long does it last?",
        a: "Longevity varies with skin type, aftercare and sun exposure. A refresh may be suggested over time.",
      },
    ],
    seoTitle: "Cheek Blush Pigmentation in Nagpur | Brows & Bloom Aesthetic Clinic",
    seoDescription:
      "Subtle cheek blush cosmetic pigmentation at Brows & Bloom Aesthetic Clinic in Bajaj Nagar, Nagpur.",
  },
];

export const smpService = {
  slug: "scalp-micropigmentation",
  name: "Scalp Micropigmentation",
  short: "Redefine the look of hair density.",
  summary:
    "Specialised micropigmentation designed to create the visual appearance of natural hair follicles and improved scalp density.",
  image: smp,
  before: beforeSmp,
};

export const academyImage = academy;

export const transformations = [
  {
    id: "brows-1",
    category: "Brows",
    treatment: "Microblading",
    before: beforeBrows,
    after: microblading,
  },
  {
    id: "brows-2",
    category: "Brows",
    treatment: "Ombre Brows",
    before: beforeBrows,
    after: ombre,
  },
  {
    id: "lips-1",
    category: "Lips",
    treatment: "Lip Blush",
    before: beforeLips,
    after: lipBlush,
  },
  {
    id: "eyeliner-1",
    category: "Eyeliner",
    treatment: "Permanent Eyeliner",
    before: beforeEyeliner,
    after: eyeliner,
  },
  {
    id: "smp-1",
    category: "SMP",
    treatment: "Scalp Micropigmentation",
    before: beforeSmp,
    after: smp,
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "Does permanent makeup hurt?",
    a: "Most clients describe the sensation as mild scratching or pressure rather than sharp pain. Comfort measures are used throughout and everyone experiences sensation differently.",
  },
  {
    q: "How long does permanent makeup last?",
    a: "Semi-permanent results typically last between one and three years depending on the treatment, your skin type, lifestyle, sun exposure and aftercare. Periodic refreshes keep results looking their best.",
  },
  {
    q: "What is the difference between Microblading and Ombre Brows?",
    a: "Microblading creates individual hair-like strokes for a natural, textured brow. Ombre brows create a soft, shaded powder effect that looks more filled-in and often suits oilier skin types better.",
  },
  {
    q: "What is the healing process?",
    a: "The treated area may look darker and feel slightly tender for the first few days, followed by light flaking. Colour continues to settle over the following weeks. Written aftercare guidance is provided.",
  },
  {
    q: "Who may not be suitable for PMU?",
    a: "Permanent makeup may not be suitable during pregnancy or breastfeeding, or for those with certain skin conditions, allergies or medical histories. Suitability is always assessed during consultation, and medical advice may be recommended.",
  },
  {
    q: "Is a touch-up required?",
    a: "A review appointment after the initial healing period is generally recommended so colour and shape can be refined. Longer-term refreshes depend on how your skin retains pigment.",
  },
  {
    q: "How should I prepare for my appointment?",
    a: "Arrive with clean skin, avoid strong exfoliants and prolonged sun exposure beforehand, and follow any specific pre-care guidance shared with you before the appointment.",
  },
  {
    q: "What is Scalp Micropigmentation?",
    a: "Scalp micropigmentation places tiny deposits of pigment in the scalp to create the visual appearance of hair follicles and improved density. It does not regrow hair.",
  },
  {
    q: "Do you offer PMU training?",
    a: "Yes. Brows & Bloom Academy runs short-term professional training and certification courses covering brows, lip techniques, eyeliner techniques and hands-on practical training.",
  },
];
