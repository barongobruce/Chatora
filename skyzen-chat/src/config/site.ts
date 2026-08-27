// Centralized brand configuration.
// Change the brand name, tagline, and nav labels here — nowhere else in the app
// should hardcode these strings.

export const siteConfig = {
  brand: {
    name: "Kindred",
    nameSuffix: "Chat",
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
      "Kindred Chat connects you with people around the world for genuine conversation, Swahili language exchange, and companionship — paid daily to your M-Pesa.",
    primaryCta: { label: "Find Someone to Talk To", href: "#find" },
    secondaryCta: { label: "Become a Friend", href: "#become" },
    trustIndicators: [
      { label: "Real People", icon: "users" },
      { label: "Global Community", icon: "globe" },
      { label: "Secure Payments", icon: "shield" },
      { label: "Flexible Conversations", icon: "clock" },
    ],
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS",
    heading: "How Kindred Chat Works",
    description: "Connect with real people, start meaningful conversations, and earn from your time.",
    steps: [
      {
        number: "01",
        icon: "userPlus",
        title: "Sign Up & Create Your Profile",
        description: "Create your Kindred Chat profile in just a few steps and tell people a little about yourself.",
      },
      {
        number: "02",
        icon: "messageCircle",
        title: "Find Someone to Talk To",
        description: "Browse available people, discover interesting conversations, and connect with someone who matches what you're looking for.",
      },
      {
        number: "03",
        icon: "wallet",
        title: "Chat & Earn Daily",
        description: "Spend time having genuine conversations and earn from eligible chats, with your earnings sent directly to your M-Pesa account.",
      },
    ],
  },

  connectionOptions: {
    eyebrow: "YOUR OPTIONS",
    heading: "Two Ways to Connect",
    description: "Choose how you want to connect with people around the world.",
    options: [
      {
        badge: "CHAT & CONVERSATION",
        title: "Earn by Keeping the Conversation Going",
        description: "Connect with people around the world and earn while having genuine conversations. The longer you stay engaged, the more you can earn.",
        earningAmount: "Up to $36",
        earningLabel: "per conversation",
        benefits: [
          "Real-time conversations",
          "Flexible schedule",
          "Connect with people worldwide",
          "Earnings tracked automatically",
        ],
        cta: "Start Chatting",
        variant: "blue",
      },
      {
        badge: "LANGUAGE EXCHANGE",
        title: "Turn Your Language Into a Global Connection",
        description: "Help people practice languages, share your knowledge, and connect across cultures while earning from your time.",
        earningAmount: "$3+",
        earningLabel: "per session",
        benefits: [
          "Share your language",
          "Meet people from different countries",
          "Flexible conversations",
          "Earn from your knowledge",
        ],
        cta: "Teach & Connect",
        variant: "teal",
      },
    ],
  },

  countryRates: {
    eyebrow: "TRANSPARENT PRICING",
    heading: "Chat Rates by Country",
    description: "See what conversations with people from different countries can earn.",
    disclaimer: "Rates shown are examples and may vary based on availability, conversation type, and platform rules.",
    countries: [
      { code: "US", name: "United States", flag: "🇺🇸", rate: "$0.60", unit: "/min" },
      { code: "GB", name: "United Kingdom", flag: "🇬🇧", rate: "$0.55", unit: "/min" },
      { code: "DE", name: "Germany", flag: "🇩🇪", rate: "$0.50", unit: "/min" },
      { code: "CA", name: "Canada", flag: "🇨🇦", rate: "$0.50", unit: "/min" },
      { code: "AU", name: "Australia", flag: "🇦🇺", rate: "$0.50", unit: "/min" },
    ],
  },

  mpesaSection: {
    eyebrow: "GET PAID",
    heading: "Daily M-Pesa Withdrawals",
    description: "Turn your conversations into earnings and receive your eligible balance through M-Pesa.",
    benefits: [
      { icon: "wallet", title: "Track Your Earnings", description: "See your conversation earnings in one place." },
      { icon: "clock", title: "Earn Daily", description: "Flexible conversations that fit your schedule." },
      { icon: "smartphone", title: "Direct M-Pesa", description: "Receive eligible payouts directly through M-Pesa." },
      { icon: "shieldCheck", title: "Secure & Transparent", description: "Clear rates and a simple earnings history." },
    ],
    mockData: {
      label: "M-Pesa",
      heading: "Today's Earnings",
      amount: "KES 4,850",
      availableLabel: "Available balance",
      conversations: "32 conversations",
      activeTime: "8h 24m active",
      status: "Ready to withdraw",
    },
  },

  // ==========================================================================
  // SAMPLE CONTENT — replace with verified customer testimonials before production.
  // ==========================================================================
  testimonials: {
    eyebrow: "REAL STORIES",
    heading: "What Our Users Say",
    description: "Real conversations. Real connections. Real experiences from Kenyans using Kindred Chat.",
    items: [
      {
        name: "Amina Wanjiku",
        location: "Nairobi",
        role: "Chat Operator",
        initials: "AW",
        review: "I joined Kindred Chat because I wanted something flexible I could do after work. I started with a few conversations in the evenings and quickly got comfortable with the platform. I really like being able to meet people from different parts of the world while earning from my time.",
        amount: "KSh 1,248",
        period: "this month",
      },
      {
        name: "Brian Mutiso",
        location: "Mombasa",
        role: "Swahili Tutor",
        initials: "BM",
        review: "I enjoy teaching Swahili to people who are genuinely interested in Kenyan culture. The conversations are relaxed, and I get to meet people I would probably never meet otherwise. It's a great way to use my language skills.",
        amount: "KSh 31,280",
        period: "this month",
      },
      {
        name: "Carol Njeri",
        location: "Nakuru",
        role: "Chat & Tutor",
        initials: "CN",
        review: "I use Kindred Chat for both conversations and language exchange. What I enjoy most is the flexibility. I can choose when I am available and spend that time talking to people from different countries.",
        amount: "KSh 28,180",
        period: "this month",
      },
      {
        name: "James Ochieng",
        location: "Kisumu",
        role: "Chat Operator",
        initials: "JO",
        review: "The sign-up process was simple and the platform was easy to understand. I like seeing my activity clearly and knowing when I'm available for conversations. It has become a useful way for me to earn during my free time.",
        amount: "KSh 18,890",
        period: "first month",
      },
      {
        name: "Faith Kamau",
        location: "Eldoret",
        role: "Chat Operator",
        initials: "FK",
        review: "As someone who prefers flexible work, I like that I can choose when to be available. The conversations have introduced me to people from different countries, and I enjoy learning about their lives while sharing a little about Kenya too.",
        amount: "KSh 25,560",
        period: "this month",
      },
      {
        name: "Dennis Kipkoech",
        location: "Thika",
        role: "Swahili Tutor",
        initials: "DK",
        review: "I started because I wanted to practice using my language skills with people outside Kenya. The conversations have been surprisingly interesting. I have enjoyed helping people learn Swahili and sharing everyday Kenyan expressions.",
        amount: "KSh 17,740",
        period: "first 3 weeks",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;