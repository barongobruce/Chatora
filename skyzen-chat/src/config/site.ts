// Centralized brand configuration.
// Change the brand name, tagline, and nav labels here — nowhere else in the app
// should hardcode these strings.

export const siteConfig = {
  brand: {
    name: "Kindred",
    nameSuffix: "Chat", // rendered in the primary accent color next to `name`
    tagline: "Real conversations, real income — from anywhere in Kenya.",
  },

  nav: {
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Earn", href: "#earn" },
      { label: "Rates", href: "#rates" },
      { label: "FAQs", href: "#faq" },
    ],
    login: { label: "Log In", href: "/login" },
    signup: { label: "Create Account", href: "/signup" },
  },

  hero: {
    eyebrow: "Exclusively for Kenyans",
    headingLines: ["Real Conversations,", "Real Income."],
    headingHighlight: "Real Income.",
    description:
      "Kindred Chat connects you with people around the world for genuine conversation, language exchange, and companionship — paid daily to your M-Pesa.",
    primaryCta: { label: "Find Someone to Talk To", href: "#find" },
    secondaryCta: { label: "Become a Friend", href: "#become" },
    trustIndicators: [
      { label: "Real People", icon: "users" },
      { label: "Global Community", icon: "globe" },
      { label: "Secure Payments", icon: "shield" },
      { label: "Flexible Conversations", icon: "clock" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;