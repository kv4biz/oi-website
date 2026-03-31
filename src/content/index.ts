// src/content/index.ts
// Centralized content for the entire site - edit here to update content across all pages

import { Search, Lightbulb, Rocket, Zap, Cpu, TrendingUp } from "lucide-react";

// =============================================================================
// SITE CONFIG & SEO
// =============================================================================

export const siteConfig = {
  name: "Ocean Intuition",
  description:
    "Ocean Intuition provides AI-powered automation tools, intelligent systems, and custom AI solutions that help businesses in Nigeria, Africa, and globally streamline workflows, improve efficiency, and scale faster. Explore our ecosystem or request a demo.",
  url: "https://oceanintuition.com",
  keywords: [
    // Core AI + Automation (what you do)
    "AI automation for businesses",
    "workflow automation tools",
    "business process automation AI",
    "AI solutions for companies",
    "intelligent automation systems",
    "AI consulting services for businesses",

    // Geo Targeting (your advantage)
    "AI solutions in Nigeria",
    "AI companies in Nigeria",
    "business automation services Nigeria",
    "AI solutions in Africa",
    "AI companies in West Africa",
    "workflow automation Africa",

    // Products & Ecosystem (what makes you different)
    "AI tools for businesses",
    "automation tools for small business",
    "AI inventory management system",
    "business automation software",
    "integrated AI business tools",
    "custom AI solutions for companies",
  ],
  ogImage: "/og-image.png",
  icons: { icon: "/icon.svg" },
};

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigation = {
  main: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Ecosystem", href: "/ecosystem" },
    { title: "Contact", href: "/contact" },
  ],
  footer: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Ecosystem", href: "/ecosystem" },
    { title: "Contact", href: "/contact" },
  ],
};
// =============================================================================
// NAVBAR BUTTON
// =============================================================================

export const navbar = {
  ctaButton: {
    text: "Request  Access",
    href: "/ecosystem",
  },
};
// =============================================================================
// HERO SECTION
// =============================================================================

export const hero = {
  headline: {
    prefix: "Custom-built",
    highlight: "AI Solutions",
    suffix: "for Business Growth",
  },
  subheadline:
    "We craft intelligent AI and automation tools that streamline operations — simple, powerful, and ready to scale your business.",
  cta: {
    primary: {
      text: "Explore Ecosystem",
      href: "/ecosystem",
    },
    secondary: {
      text: "See What We Do",
      href: "#what-we-do",
    },
  },
  trustedBy: {
    label: "Trusted by teams at",
    companies: ["Smoking Rabbit", "Pexjet", "Dash Media"],
  },
};

// =============================================================================
// WHAT WE DO SECTION
// =============================================================================

export const whatWeDo = {
  title: "What We Do",
  description:
    "We design and build automated and AI-powered solutions for all kinds of work—turning complex or repetitive tasks into clear, efficient systems.",
  features: [
    {
      icon: Zap,
      title: "Automation",
      description:
        "Streamline operations across any workflow or industry. We turn repetitive tasks into efficient, automated systems.",
    },
    {
      icon: Cpu,
      title: "AI Systems",
      description:
        "Build intelligent tools that support decision-making and execution. Smart solutions that adapt to your needs.",
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description:
        "Improve existing processes without rebuilding everything from scratch. Better results with minimal disruption.",
    },
  ],
};

// =============================================================================
// HOW WE WORK SECTION
// =============================================================================

export const howWeWork = {
  title: "How We Work",
  image: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    alt: "Team collaboration",
  },
  steps: [
    {
      icon: Search,
      title: "Discover — Understand the work",
      description:
        "We identify where automation or intelligence creates the most value for your business. Through careful analysis, we map out opportunities and challenges.",
    },
    {
      icon: Lightbulb,
      title: "Design — Keep it simple",
      description:
        "We structure solutions that are easy to use and easy to maintain. Our designs focus on clarity and long-term sustainability.",
    },
    {
      icon: Rocket,
      title: "Deliver — Build and improve",
      description:
        "We develop, test, and refine systems in small, fast iterations. Continuous improvement ensures your solution evolves with your needs.",
    },
  ],
};

// =============================================================================
// TESTIMONIALS SECTION
// =============================================================================

export const testimonials = {
  title: "Trusted by Teams Everywhere",
  description:
    "See how businesses are achieving more with our intelligent solutions",
  items: [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Operations Director",
      company: "LogiFlow",
      testimonial:
        "Ocean Intuition transformed our warehouse operations. Their automation system reduced processing time by 60% and virtually eliminated errors.",
    },
    {
      id: 2,
      name: "Marcus Williams",
      designation: "CEO",
      company: "FinanceFirst",
      testimonial:
        "The AI-powered analytics dashboard they built gives us insights we never had before. Decision-making is now data-driven and confident.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      designation: "Head of Customer Success",
      company: "SupportHub",
      testimonial:
        "Their chatbot handles 70% of our customer inquiries automatically. Our team can now focus on complex issues that truly need human attention.",
    },
    {
      id: 4,
      name: "David Park",
      designation: "CTO",
      company: "TechScale",
      testimonial:
        "Working with Ocean Intuition was refreshingly simple. They understood our needs quickly and delivered a solution that just works.",
    },
    {
      id: 5,
      name: "Amanda Foster",
      designation: "Product Manager",
      company: "RetailEdge",
      testimonial:
        "The inventory prediction system they built has saved us thousands in overstocking costs. Accurate, reliable, and easy to use.",
    },
    {
      id: 6,
      name: "James Mitchell",
      designation: "Founder",
      company: "StartupLab",
      testimonial:
        "As a startup, we needed smart solutions without complexity. Ocean Intuition delivered exactly that—practical AI that scales with us.",
    },
  ],
};

// =============================================================================
// CTA SECTION
// =============================================================================

export const cta = {
  title: "Ready to Work Smarter?",
  description:
    "Let's discuss how AI and automation can transform your operations.",
  button: {
    text: "Request a Demo",
    href: "/ecosystem",
  },
};

// =============================================================================
// OUR PROJECTS / ECOSYSTEM SECTION
// =============================================================================

export const ourProjects = {
  title: "Our Projects",
  description:
    "A selection of intelligent systems and automation tools we've built for real-world use.",
  viewAllButton: "View Ecosystem",
  emptyState: {
    title: "No projects yet",
    description:
      "We're working on some exciting projects. Check back soon to see what we've been building.",
  },
};

// =============================================================================
// ECOSYSTEM PAGE (formerly Demos)
// =============================================================================

export const ecosystemPage = {
  title: "Our Ecosystem",
  description:
    "Explore our collection of AI-powered tools and automation systems. Each demo showcases real solutions we've built for businesses.",
  searchPlaceholder: "Search demos...",
  filterPlaceholder: "Filter by tag",
  allTagsLabel: "All Tags",
  viewMoreButton: "View More",
  loadMoreButton: "Load More",
  emptyState: {
    title: "No demos found",
    description:
      "Try adjusting your search or filter to find what you are looking for.",
    clearButton: "Clear Filters",
  },
};

// =============================================================================
// ECOSYSTEM DETAIL PAGE
// =============================================================================

export const ecosystemDetailPage = {
  backLink: "Back to Ecosystem",
  sections: {
    overview: "Overview",
    keyFeatures: "Key Features",
    howItWorks: {
      title: "How It Works",
      description:
        "Our approach is simple: we identify where automation or intelligence creates the most value, structure solutions that are easy to use and maintain, then develop, test, and refine systems in small, fast iterations.",
    },
  },
  ctaBox: {
    title: "Ready to see it in action?",
    description:
      "Request a personalized demo to see how {title} can transform your business.",
    buttonText: "Request Access",
  },
  sidebar: {
    title: "Demo Details",
    availableBadge: "Available",
    labels: {
      company: "Company",
      industry: "Industry",
      location: "Location",
      companySize: "Company Size",
      website: "Website",
      topics: "Topics",
    },
    requestButton: "Request Access",
  },
};

// =============================================================================
// ABOUT PAGE
// =============================================================================

export const aboutPage = {
  title: "About Ocean Intuition",
  description:
    "We build calm, practical AI solutions that help businesses operate smarter—without the complexity. Our team combines deep technical expertise with a commitment to clarity, creating systems that integrate seamlessly into existing workflows.",
  mainImage: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    alt: "Team collaboration",
  },
  secondaryImage: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "Working together",
  },
  breakout: {
    title: "Intelligent Solutions, Simply Built",
    description:
      "We partner with organizations to identify where automation and AI can make the biggest impact.",
    buttonText: "Request a Consultation",
    buttonUrl: "/contact",
  },
  achievementsTitle: "Our Impact in Numbers",
  achievementsDescription:
    "Delivering measurable results for businesses through practical AI and automation solutions.",
  achievements: [
    { label: "Projects Delivered", value: "50+" },
    { label: "Hours Saved Monthly", value: "10K+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Industries Served", value: "12+" },
  ],
  contentSections: [
    {
      title: "Our Vision",
      content:
        "We envision a world where AI helps every business operate smarter, more efficiently, and with greater clarity—without sacrificing simplicity.\n\nTechnology should serve people, not the other way around. We build solutions that amplify human capability rather than replace it.\n\nOur goal is to make intelligent automation accessible to businesses of all sizes, removing the barriers of complexity and cost.",
    },
    {
      title: "Our Approach",
      content:
        "We focus on solutions that work in the real world, not just in theory. Every system we build is designed for actual use by real teams.\n\nWe measure success by outcomes, not complexity. Simple solutions that deliver measurable improvements are always better than sophisticated systems that gather dust.\n\nOur team is dedicated to building flexible systems that evolve with your needs and scale with your growth.",
    },
  ],
};

// =============================================================================
// CONTACT PAGE
// =============================================================================

export const contactPage = {
  badge: "Contact Us",
  title: "Chat with our friendly team!",
  description:
    "We'd love to hear from you. Please fill out this form or reach out directly.",
  infoCards: {
    email: {
      title: "Email",
      description: "Our friendly team is here to help.",
      value: "hello@oceanintuition.com",
      href: "mailto:hello@oceanintuition.com",
    },
    chat: {
      title: "Live Chat",
      description: "We're available during business hours.",
      linkText: "Start a conversation",
      href: "#",
    },
    office: {
      title: "Office",
      description: "Come say hello at our office.",
      address: "Remote-first company",
      href: "#",
    },
    phone: {
      title: "Phone",
      description: "Mon-Fri from 9am to 5pm.",
      value: "+1 (555) 000-0000",
      href: "tel:+15550000000",
    },
  },
  form: {
    title: "Contact Us",
    description: "We'd love to hear from you. Please fill out this form.",
    fields: {
      firstName: { label: "First Name", placeholder: "First name" },
      lastName: { label: "Last Name", placeholder: "Last name" },
      email: { label: "Email", placeholder: "you@example.com" },
      company: { label: "Company", placeholder: "Your company (optional)" },
      phone: { label: "Phone", placeholder: "Your phone (optional)" },
      message: { label: "Message", placeholder: "How can we help you?" },
    },
    submitButton: "Send Message",
    successMessage: "Message sent! We'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
};

export const pageMetadata = {
  home: {
    title: "AI Automation & Workflow Solutions | Ocean Intuition",
    description: hero.subheadline,
    keywords: siteConfig.keywords,
    pathname: "/",
  },
  about: {
    title: aboutPage.title,
    description: aboutPage.description,
    keywords: [
      "about ocean intuition",
      "ai automation company",
      "custom ai solutions",
      "business automation experts",
    ],
    pathname: "/about",
  },
  ecosystem: {
    title: ecosystemPage.title,
    description: ecosystemPage.description,
    keywords: [
      "ai demos",
      "business automation demos",
      "ai tools ecosystem",
      "workflow automation examples",
    ],
    pathname: "/ecosystem",
  },
  contact: {
    title: contactPage.title,
    description: contactPage.description,
    keywords: [
      "contact ocean intuition",
      "ai consultation",
      "business automation consultation",
      "contact ai company",
    ],
    pathname: "/contact",
  },
  ecosystemDetail: {
    titleSuffix: "Demo",
    descriptionFallback: ecosystemDetailPage.sections.howItWorks.description,
    keywords: [
      "ai demo",
      "automation system",
      "business ai solution",
      "custom workflow automation",
    ],
    pathnamePrefix: "/ecosystem",
  },
};

// =============================================================================
// FOOTER
// =============================================================================

export const footer = {
  newsletter: {
    title: "Stay up to date",
    description: "Subscribe to our newsletter for updates and insights.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ocean-intuition/",
    facebook: "https://www.facebook.com/oceanintuitionhq",
    instagram: "https://www.instagram.com/oceanintuitionhq",
  },
  copyright: `© ${new Date().getFullYear()} Ocean Intuition. All rights reserved.`,
};
