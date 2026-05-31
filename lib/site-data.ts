import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BarChart3,
  Boxes,
  Code2,
  Gauge,
  Gem,
  Globe2,
  Layers3,
  LineChart,
  Megaphone,
  MessageCircle,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

export type Project = {
  id: number;
  category: string;
  headline: string;
  description: string;
  techStack: string[];
  accent: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Fast, conversion-focused business websites built with modern design, responsive layouts, and SEO-ready foundations.",
    icon: Globe2,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "App Development",
    description: "Clean web and mobile app experiences with practical user flows, reliable integrations, and scalable foundations.",
    icon: Smartphone,
    gradient: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, content structure, Core Web Vitals, and growth-friendly metadata for better discovery.",
    icon: Search,
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Google Ads",
    description: "High-intent search campaigns with landing page alignment, keyword discipline, and measurable ROI reporting.",
    icon: Target,
    gradient: "from-amber-300 to-orange-500",
  },
  {
    title: "Meta Ads",
    description: "Creative-led campaigns across Facebook and Instagram for awareness, acquisition, and retargeting.",
    icon: Megaphone,
    gradient: "from-pink-400 to-rose-500",
  },
];

export function serviceSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => serviceSlug(service.title) === slug);
}

export const stats = [
  { label: "Projects", value: 50, suffix: "+", icon: Rocket },
  { label: "Years Experience", value: 2, suffix: "+", icon: Gem },
  { label: "Core Services", value: 5, suffix: "+", icon: Layers3 },
  { label: "Remote Delivery", value: 100, suffix: "%", icon: Globe2 },
];

export const testimonials = [
  {
    quote:
      "AwayLabs brought the strategy, engineering discipline, and visual polish we needed to launch with confidence.",
    name: "Founder",
    role: "B2B SaaS Startup",
  },
  {
    quote:
      "Their team moved quickly without sacrificing quality. The final product felt premium from the first demo.",
    name: "Operations Lead",
    role: "Growth Company",
  },
  {
    quote:
      "From the website build to campaign tracking, AwayLabs handled the details that made our launch smooth.",
    name: "Product Director",
    role: "Digital Brand",
  },
];

export const faqs = [
  {
    question: "Can AwayLabs handle website, app, SEO, and ads work together?",
    answer:
      "Yes. We work across planning, design, website development, app development, SEO optimization, Google Ads, Meta Ads, and launch support so teams can move with one accountable partner.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We help founders shape MVPs, validate scope, launch fast, and build the search and paid marketing base needed after release.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "We begin with a discovery call, define goals and success metrics, map the technical approach, then move into a clear delivery plan with milestones.",
  },
  {
    question: "Can you support an existing product?",
    answer:
      "Yes. We can audit an existing website or app, improve performance, modernize UX, strengthen SEO, and support campaign landing pages after release.",
  },
];

export const projectCategories = ["All", "Websites", "Apps", "SEO", "Ads"];

export const projects: Project[] = [
  {
    id: 1,
    category: "Websites",
    headline: "Business website launch",
    description: "A polished company website direction with clear messaging, lead capture, fast pages, and SEO-ready structure.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    accent: "from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    id: 2,
    category: "Apps",
    headline: "Cross-platform app experience",
    description: "A sleek app concept for onboarding, subscriptions, notifications, and clean day-to-day workflows.",
    techStack: ["React Native", "Node.js", "Postgres", "Push"],
    accent: "from-fuchsia-400 via-purple-500 to-blue-500",
  },
  {
    id: 3,
    category: "SEO",
    headline: "Technical SEO foundation",
    description: "Metadata, content structure, Core Web Vitals, and analytics setup designed to improve discovery.",
    techStack: ["SEO", "Analytics", "Metadata", "Performance"],
    accent: "from-sky-400 via-indigo-500 to-purple-500",
  },
  {
    id: 4,
    category: "Ads",
    headline: "Performance marketing setup",
    description: "Landing pages, campaign tracking, and analytics loops designed for Google Ads and Meta Ads growth.",
    techStack: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    accent: "from-emerald-400 via-cyan-500 to-blue-500",
  },
  {
    id: 5,
    category: "Websites",
    headline: "Commerce website direction",
    description: "A modern storefront direction with refined product pages, checkout optimization, and customer dashboards.",
    techStack: ["Commerce", "CMS", "Payments", "CRM"],
    accent: "from-amber-300 via-orange-500 to-rose-500",
  },
  {
    id: 6,
    category: "Apps",
    headline: "Custom app workflow",
    description: "Secure API layers, partner integrations, dashboards, and scalable backend architecture for app teams.",
    techStack: ["REST", "Auth", "Dashboards", "Integrations"],
    accent: "from-blue-400 via-cyan-500 to-teal-400",
  },
];

export const team = [
  { name: "Product Strategy", role: "Discovery, roadmaps, and delivery leadership", icon: LineChart },
  { name: "Design Studio", role: "Interfaces, brand systems, and experience design", icon: Sparkles },
  { name: "Engineering", role: "Websites, apps, integrations, and automation", icon: Boxes },
];

export const timeline = [
  { year: "2024", title: "Started with web launches", description: "Built fast, polished websites for founders and small businesses." },
  { year: "2025", title: "Expanded into apps and SEO", description: "Added app development, technical SEO, analytics, and stronger launch planning." },
  { year: "Now", title: "Growth partner model", description: "Combining website development, apps, SEO optimization, Google Ads, and Meta Ads." },
];

export const valueProps = [
  { title: "Premium execution", description: "Every interface is shaped with startup-grade detail, speed, and launch readiness.", icon: Sparkles },
  { title: "Focused delivery", description: "Websites, apps, SEO, Google Ads, and Meta Ads under one accountable team.", icon: Layers3 },
  { title: "Performance first", description: "We optimize for fast load times, strong UX, reliable releases, and measurable growth.", icon: Gauge },
  { title: "Clear communication", description: "Transparent milestones, practical recommendations, and no black-box delivery.", icon: MessageCircle },
];

export const offices = [
  {
    city: "Hyderabad Office",
    address: ["Hyderabad, Telangana", "India"],
  },
  {
    city: "Remote Worldwide",
    address: ["Remote delivery for clients", "across India and global markets"],
  },
];

export const serviceOptions = services.map((service) => service.title);

export const processSteps = [
  { title: "Discover", description: "We clarify goals, users, constraints, and the fastest path to value.", icon: Search },
  { title: "Design", description: "We shape flows, visual systems, and interactive prototypes before build.", icon: AppWindow },
  { title: "Build", description: "We ship clean, reusable websites and apps with performance-ready foundations.", icon: Code2 },
  { title: "Grow", description: "We tune SEO, analytics, Google Ads, Meta Ads, and post-launch improvements.", icon: BarChart3 },
];
