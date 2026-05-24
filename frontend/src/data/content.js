export const aboutImages = {
  hero:
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2000&q=80",
  showcase:
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80",
  trade:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  craft:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
  diamonds:
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1600&q=80",
  heritage:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
  workshop:
    "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const aboutContent = {
  lead: "In this industry, everyone claims relationships. Very few have spent thirty years building them.",
  founding:
    "Prakash Gold LLC was founded by Prakash Jain and Hiren A. Patt — two people whose combined experience covers every corner of the gold and jewellery trade, from the factory floor to the highest levels of international commerce.",
  founders: [
    {
      id: "prakash",
      name: "Prakash Jain",
      role: "Managing Director",
      text: "Prakash Jain has spent thirty two years at the centre of the Dubai gold trade. Three decades of supplier relationships, bullion market expertise, and high-value transactions — built not through business cards, but through trust earned one conversation at a time. He understands every vertical of this business: sales, manufacturing, accounting, inventory, supply chain, and client relationships across the GCC. The industry knows his name. More importantly, it trusts it.",
      image: aboutImages.diamonds,
      imageAlt: "Diamond and gold jewellery detail",
      caption: "Three decades of trust",
    },
    {
      id: "hiren",
      name: "Hiren A. Patt",
      role: "Chief Executive Officer",
      text: "Hiren A. Patt brings something equally rare — three generations of gold-trade knowledge combined with a ground-up understanding of the craft itself. He began on factory floors in Mumbai, learning manufacturing, handwork and casting before moving into international markets and sales. He understands jewellery from the inside out — how it is made, what different markets value, and what makes a piece truly exceptional. His grandfather first arrived in Dubai in 1954. The family has never left the trade since.",
      image: aboutImages.workshop,
      imageAlt: "Jewellery craftsmanship and handwork",
      caption: "Factory floor to finished piece",
    },
  ],
  together:
    "Together, they cover what most businesses cannot — the relationships and the craft. The network and the knowledge. The long game and the eye for detail.",
  direct:
    "When you work with Prakash Gold LLC, there are no layers. No middlemen. No account managers passing you down a chain. You are dealing directly with the people whose names are on the door — and whose reputations depend on every single decision they make.",
  story: {
    paragraphs: [
      "There is a moment that captures it best. A client once pushed hard on price — further than most would have accepted. Prakash Jain agreed anyway. Not because the margin made sense. Because the relationship did. That client never went elsewhere.",
      "That is not an exception. That is simply how this business works.",
    ],
    image: aboutImages.craft,
  },
  closing: {
    paragraphs: [
      "In the end, you don't just need a supplier. You need someone you can call. Someone who picks up. Someone whose word means something.",
      "That is what Prakash Gold LLC is.",
    ],
    image: aboutImages.showcase,
  },
  duo: [
    { src: aboutImages.dubai, alt: "Dubai skyline", caption: "Dubai & the GCC" },
    { src: aboutImages.trade, alt: "Gold jewellery", caption: "Gold & bullion" },
  ],
  showcase: {
    src: aboutImages.showcase,
    alt: "Fine gold jewellery craftsmanship",
    caption: "Craft & heritage",
  },
  heritage: { src: aboutImages.heritage, alt: "Heritage gold jewellery collection" },
};

export const aboutBlocks = [
  {
    type: "lead",
    text: "In this industry, everyone claims relationships. Very few have spent thirty years building them.",
  },
  {
    type: "image",
    layout: "full",
    src: aboutImages.showcase,
    alt: "Fine gold jewellery craftsmanship",
    caption: "Craft & heritage",
  },
  {
    type: "body",
    text: "Prakash Gold LLC was founded by Prakash Jain and Hiren A. Patt — two people whose combined experience covers every corner of the gold and jewellery trade, from the factory floor to the highest levels of international commerce.",
  },
  {
    type: "image",
    layout: "duo",
    images: [
      {
        src: aboutImages.dubai,
        alt: "Dubai skyline — centre of the gold trade",
        caption: "Dubai & the GCC",
      },
      {
        src: aboutImages.trade,
        alt: "Gold jewellery and precious metals",
        caption: "Gold & bullion",
      },
    ],
  },
  {
    type: "body",
    text: "Prakash Jain has spent thirty two years at the centre of the Dubai gold trade. Three decades of supplier relationships, bullion market expertise, and high-value transactions — built not through business cards, but through trust earned one conversation at a time. He understands every vertical of this business: sales, manufacturing, accounting, inventory, supply chain, and client relationships across the GCC. The industry knows his name. More importantly, it trusts it.",
  },
  {
    type: "image",
    layout: "inset",
    src: aboutImages.diamonds,
    alt: "Diamond and gold jewellery detail",
    caption: "Three decades of trust",
  },
  {
    type: "body",
    text: "Hiren A. Patt brings something equally rare — three generations of gold-trade knowledge combined with a ground-up understanding of the craft itself. He began on factory floors in Mumbai, learning manufacturing, handwork and casting before moving into international markets and sales. He understands jewellery from the inside out — how it is made, what different markets value, and what makes a piece truly exceptional. His grandfather first arrived in Dubai in 1954. The family has never left the trade since.",
  },
  {
    type: "image",
    layout: "split",
    src: aboutImages.workshop,
    alt: "Jewellery craftsmanship and handwork",
    caption: "Factory floor to finished piece",
  },
  {
    type: "highlight",
    text: "Together, they cover what most businesses cannot — the relationships and the craft. The network and the knowledge. The long game and the eye for detail.",
  },
  {
    type: "body",
    text: "When you work with Prakash Gold LLC, there are no layers. No middlemen. No account managers passing you down a chain. You are dealing directly with the people whose names are on the door — and whose reputations depend on every single decision they make.",
  },
  {
    type: "image",
    layout: "banner",
    src: aboutImages.heritage,
    alt: "Heritage gold jewellery collection",
  },
  {
    type: "story",
    paragraphs: [
      "There is a moment that captures it best. A client once pushed hard on price — further than most would have accepted. Prakash Jain agreed anyway. Not because the margin made sense. Because the relationship did. That client never went elsewhere.",
      "That is not an exception. That is simply how this business works.",
    ],
    image: aboutImages.craft,
  },
  {
    type: "closing",
    paragraphs: [
      "In the end, you don't just need a supplier. You need someone you can call. Someone who picks up. Someone whose word means something.",
      "That is what Prakash Gold LLC is.",
    ],
    image: aboutImages.showcase,
  },
];

export const prakashTimeline = [
  {
    era: "1980s",
    image: aboutImages.heritage,
    imageAlt: "Heritage and early roots in Rajasthan",
    title: "The Beginning",
    subtitle: "Early Lessons in Rajasthan",
    body: [
      "In a small village in Rajasthan, business wasn't something he studied — it was something he grew up around.",
      "His father's textile shop became his first introduction to work, not through instruction, but simply by being there.",
      "He understood accounts before he understood algebra.",
      "He read people before he read textbooks.",
      "And over time, one thing became clear;",
      '"Trust isn\'t part of the business. It is the business."',
    ],
  },
  {
    era: "1990",
    image: aboutImages.workshop,
    imageAlt: "Craft and determination in Mumbai",
    title: "A Leap of Courage",
    subtitle: "Into the Unknown",
    body: [
      "He finished school. Watched the door close on further education before it ever opened. His father had poured everything into that shop — every long day, every small saving — and somewhere in that, without it ever being said out loud, the weight passed from one set of shoulders to another.",
      "So he moved to Mumbai. Found work in an electrical appliance shop. It wasn't a dream job. It wasn't even close. But it was honest work in an unfamiliar city, and he showed up to it every single day.",
      "Success wasn't even a thought yet. He was just trying to make it to the next day — and the next, and the next — until one day, without realising it, he eventually would.",
    ],
  },
  {
    era: "1994",
    image: aboutImages.dubai,
    imageAlt: "Dubai and the gold trade",
    title: "New Horizons",
    subtitle: "Dubai & the Gold Trade",
    body: [
      "Mumbai had given him something. Not success — not yet. But a kind of groundedness. A proof to himself that he could survive the unfamiliar.",
      "Then a close family member saw something in him that nobody else had noticed yet and brought him to Dubai on nothing more than a gut feeling and a quiet kind of faith.",
      "He started as a salesman in a jewellery shop. Lived amongst shared walls and spaces, no privacy, no comfort. Sent money home when he could and figured it out when he couldn't.",
      "He missed everything. But back home, his family believed in him — and some days, that was the only thing that kept him going.",
      "And every single day, he was taking it all in. The craft, the trade, the sourcing, the pricing, the language of the market. The suppliers, the customers, the people in between. How a deal is never really about the deal — it's about whether someone trusts you enough to come back. That part can't be taught. It comes from years on the floor, in real conversations, real transactions, real relationships. And he was only just getting started.",
      '"He didn\'t just learn the product. He learned the people who made it, sold it, and loved it."',
    ],
  },
  {
    era: "2000's",
    image: aboutImages.trade,
    imageAlt: "International gold and jewellery trade",
    title: "A Decade of Trust",
    subtitle: "From Employee to Partner",
    body: [
      "Ten years. Not a decade of waiting — a decade of earning.",
      "Those years took him across the world. To the floors of the India International Jewellery Show — the largest gathering of its kind in the country — and to Istanbul, where the finest jewellery houses and most serious buyers in the world converge. He wasn't there to browse. He was there to build — sourcing the best, meeting the right people, and quietly becoming someone the industry recognised and respected.",
      "Along the way, he found himself serving some of the world's most recognisable names. Shilpa Shetty. Sachin Tendulkar. Aishwarya Rai and Shah Rukh Khan. Not because he sought them out — but because when you do the work with enough consistency and enough care, the right people find you.",
      "By 2002, he had become indispensable — not through title or tenure, but through the kind of trust that cannot be manufactured, the boy who had once left a small village with almost nothing had become a key stakeholder in one of the region's most respected jewellery houses.",
    ],
  },
  {
    era: "2015",
    image: aboutImages.craft,
    imageAlt: "Gold craftsmanship at scale",
    title: "A Record Written in Gold",
    subtitle: "The World's Longest Gold Chain",
    body: [
      "Some achievements announce themselves. This one was different — it was imagined, planned, and then executed with the kind of calm precision that only comes from years of knowing exactly what you are doing.",
      "As part of the core leadership team, he was instrumental in bringing to life a gold chain stretching 5.52 kilometres — 22-carat gold, approximately 256 kilograms, a Guinness World Record. Over 100 master artisans worked in unison to make it happen. But the record was never the point. The point was to show what a team of people, led with vision and given the space to excel, could accomplish together.",
      '"Not a stunt. A statement — about skill, scale, and what is possible when a team is truly trusted."',
    ],
  },
  {
    era: "2022",
    image: aboutImages.diamonds,
    imageAlt: "Diamond and gold jewellery",
    title: "Shaping Global Trade",
    subtitle: "The UAE-India CEPA Milestone",
    body: [
      "When the UAE–India Comprehensive Economic Partnership Agreement came into force, it changed the landscape of cross-border gold trade. Import duty on Indian jewellery dropped from 5% to zero. For most, it was a policy development. For him, it was an opportunity that decades of relationship-building had prepared him for.",
      "He was among the first in the industry to execute zero-duty gold shipments from India — clearances that were seamless not by accident, but because the global network had been painstakingly built, supplier by supplier, partner by partner, over thirty-two years.",
      "This was not luck. This was infrastructure, built through trust.",
    ],
  },
  {
    era: "2024",
    image: aboutImages.showcase,
    imageAlt: "Fine gold jewellery showcase",
    title: "Consistency As a Legacy",
    subtitle: "Fourteen Years at the Summit",
    body: [
      "There is a kind of achievement that makes headlines once. And then there is the quieter, harder kind — showing up, year after year, at the highest level, without exception.",
      "For fourteen consecutive years, the company he helped build was recognised as the highest importer of Indian jewellery. Not a streak born of circumstance, but one built on the most durable foundation in any industry: relationships tended to with consistency, honesty, and genuine care.",
    ],
  },
  {
    era: "2025",
    image: aboutImages.hero,
    imageAlt: "Prakash Gold LLC — the next chapter",
    title: "The Next Chapter",
    subtitle: "Prakash Gold LLC",
    body: [
      "From a textile shop in Rajasthan to the trade floors of Dubai, Istanbul and India — nothing was wasted. Not the hard years, not the invisible years, not the years that felt like they were going nowhere. Every single one of them built something.",
      "Prakash Gold LLC is not a new beginning. It is thirty-two years of expertise in gold and diamond jewellery, bullion markets, manufacturing, supply chain and high-value trade — finally, for the first time, entirely his own.",
      "What makes it different is not just what he knows. It is who he knows — and more importantly, who trusts him. Manufacturers, wholesalers, suppliers, buyers across the UAE and the wider GCC. Relationships that were never transactional. Networks that took decades to build and cannot be replicated overnight.",
      "He is not chasing the next deal. He is building something that lasts.",
      "And after everything — he is only just getting started.",
    ],
  },
];

export const phoneCountryCodes = [
  { dial: "+971", label: "UAE (+971)" },
  { dial: "+91", label: "India (+91)" },
  { dial: "+966", label: "Saudi Arabia (+966)" },
  { dial: "+974", label: "Qatar (+974)" },
  { dial: "+965", label: "Kuwait (+965)" },
  { dial: "+968", label: "Oman (+968)" },
  { dial: "+973", label: "Bahrain (+973)" },
  { dial: "+44", label: "UK (+44)" },
  { dial: "+1", label: "USA / Canada (+1)" },
  { dial: "+61", label: "Australia (+61)" },
  { dial: "+65", label: "Singapore (+65)" },
  { dial: "+852", label: "Hong Kong (+852)" },
  { dial: "+33", label: "France (+33)" },
  { dial: "+49", label: "Germany (+49)" },
];

export const appointmentSubjects = [
  { value: "enquire", label: "Enquire" },
  { value: "book", label: "Book an Appointment" },
];

export const appointmentLocations = [
  { value: "virtual", label: "Virtual Appointment" },
  { value: "instore", label: "In-store Appointment" },
];

export const appointmentServices = [
  "Gold Jewellery",
  "Diamonds & Precious Stones",
  "Bullion & Trade",
  "Manufacturing & Bespoke",
  "High-Value Trade Consultation",
  "Other",
];

/** Contact page — Our Store card (override: /images/contact-store.png in public/images/) */
export const contactStore = {
  city: "Dubai",
  address: "Gold Souk Area, Deira",
  addressLine2: "United Arab Emirates",
  phone: "+971 50 123 4567",
  phoneHref: "tel:+971501234567",
  email: "info@prakashgold.com",
  emailHref: "mailto:info@prakashgold.com",
  image: aboutImages.showcase,
  imageAlt: "Fine gold jewellery — Prakash Gold Dubai",
};

/** Timeline drawer hero — images in frontend/public/images/ */
export const timelineHero = {
  kicker: "Prakash Gold LLC",
  name: "Prakash Jain",
  images: [
    {
      src: "/images/timeline-hero-left.png",
      alt: "Gold and diamond jewellery",
    },
    {
      src: "/images/timeline-hero-right.png",
      alt: "Fine gold jewellery",
    },
  ],
};

/** Placeholder until founder interview footage is available */
export const founderDummyVideo =
  "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-golden-necklace-398-large.mp4";

/** Hero banner background — file in frontend/public/hero.mp4 */
export const heroBannerVideo = "/hero.mp4";

/** About Us hero background — file in frontend/public/aboutus.mp4 */
export const aboutHeroVideo = "/aboutus.mp4";

/** Leadership hero background — file in frontend/public/leadership.mp4 */
export const leadershipHeroVideo = "/leadership.mp4";

/** Floating social widget — add href when profiles are ready */
export const socialLinks = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "snapchat", label: "Snapchat" },
];

export const founders = [
  {
    id: "prakash",
    name: "Prakash Jain",
    role: "Managing Director",
    /** Replace with /founders/prakash.mp4 when interview footage is ready */
    video: founderDummyVideo,
    tagline:
      "A small village in Rajasthan. A father's shop. A city that didn't know his name. A foreign country and thirty-two years of earning the trust of an entire industry — and now, finally, Prakash Gold LLC.",
    bio: null,
    hasTimeline: true,
  },
  {
    id: "hiren",
    name: "Hiren A. Patt",
    role: "Chief Executive Officer",
    video: founderDummyVideo,
    tagline: "Gold isn't something Hiren A. Patt came to. It's something he was born into.",
    bio: [
      "His grandfather first set foot in Dubai in 1954 — long before it was the city it is today. Three generations later, the family's connection to the jewellery trade runs deeper than most people's entire careers.",
      "But Hiren didn't coast on that history. He earned his place in it.",
      "He began on the factory floor in Mumbai — learning the craft from the inside, understanding how a piece of jewellery goes from raw material to finished creation. Not as an observer. As someone who needed to know every step of it.",
      "From there he moved into international factory operations — hand work, casting, managing people, understanding production at a level most people in sales never bother with.",
      "By the time he moved into sales, he carried something rare — the eye of a craftsman and the instincts of a businessman. He knew how jewellery was made before he ever learned how to sell it. And that changes everything about how you sell it.",
      "Three generations of knowledge. A lifetime of work. And at Prakash Gold LLC — for the first time — all of it, his.",
    ],
    hasTimeline: false,
  },
  {
    id: "arpit",
    name: "Arpit Jain",
    role: "Director",
    video: founderDummyVideo,
    tagline:
      "The next generation of Prakash Gold — carrying forward trust, craft, and relationships across the GCC.",
    bio: [
      "Arpit Jain works at the centre of Prakash Gold LLC's day-to-day growth — connecting clients, operations, and the standards the business has built over three decades.",
      "Alongside Prakash Jain and Hiren A. Patt, he helps extend the firm's reach in gold and diamond jewellery, bullion, manufacturing, and high-value trade — with the same focus on relationships that define the name.",
    ],
    hasTimeline: false,
  },
];

export const homeCategories = [
  {
    title: "Gold Jewellery",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    link: "/about",
  },
  {
    title: "Diamonds",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    link: "/about",
  },
  {
    title: "Bullion & Trade",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    link: "/about",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    link: "/founders",
  },
];

export const homeEditorial = [
  {
    eyebrow: "Relationships",
    title: "Built Over Three Decades",
    subtitle: "Trust earned one conversation at a time across the GCC.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
    cta: "Our Story",
    link: "/about",
  },
  {
    eyebrow: "Craft",
    title: "From Factory Floor to Global Trade",
    subtitle: "Three generations of knowledge. A lifetime of work.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
    cta: "Meet the Founders",
    link: "/founders",
  },
];
