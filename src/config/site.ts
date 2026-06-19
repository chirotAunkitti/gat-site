export type Template = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  tags: string[];
  /** CSS gradient used for the thumbnail. */
  gradient: string;
  demoUrl?: string;
  buyUrl?: string;
  status: "available" | "soon";
  highlights: string[];
};

export const brand = {
  name: "GAT",
  full: "GAT Templates",
  tagline: "Premium website templates you can launch in minutes.",
  description:
    "GAT builds modern, conversion-ready website templates. Buy once, deploy without cloning, and edit a single file to make it yours.",
  email: "hello@gat.studio",
  url: "https://gat.studio",
  socials: [
    { label: "Gumroad", href: "https://gumroad.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export const templates: Template[] = [
  {
    slug: "studio-3d",
    name: "Studio 3D",
    tagline: "Immersive agency & company template",
    description:
      "A motion-rich landing page with an interactive 3D particle hero, scroll animations and smooth scrolling. Edit one file to rebrand it for any business.",
    price: "$49",
    tags: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    gradient: "linear-gradient(135deg, #7c5cff, #22d3ee)",
    demoUrl: "https://studio-3d-ten.vercel.app",
    buyUrl: "#",
    status: "available",
    highlights: [
      "Interactive 3D particle hero",
      "Scroll-driven animations",
      "Light / dark mode",
      "One-file content & color editing",
      "Deploy to Vercel in 1 click",
    ],
  },
  {
    slug: "resto",
    name: "Resto",
    tagline: "QR ordering system for restaurants & cafés",
    description:
      "Scan a table's QR code, browse a cute menu, order, and watch it hit the kitchen display in real time. Full menu & table CRUD with auto-generated QR codes. One template adapts to shabu, steak, café or à la carte.",
    price: "$59",
    tags: ["Next.js", "Zustand", "QR", "Realtime"],
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    demoUrl: "https://resto-gat.vercel.app",
    buyUrl: "#",
    status: "available",
    highlights: [
      "QR scan-to-order (mobile-first)",
      "Live kitchen display (KDS)",
      "Menu CRUD + tables CRUD with QR codes",
      "4 business presets: shabu / steak / café / restaurant",
      "Deploy to Vercel in 1 click",
    ],
  },
  {
    slug: "saas-pro",
    name: "SaaS Pro",
    tagline: "Startup & SaaS landing template",
    description:
      "A high-converting SaaS landing page with pricing, features and testimonials. Coming soon.",
    price: "$45",
    tags: ["Next.js", "Tailwind"],
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
    status: "soon",
    highlights: ["Pricing & feature grid", "Integrations", "Blog ready"],
  },
];
