import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/about-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Our Software Services Company",
  description:
    "Learn about AwayLabs, a software services company operating from Hyderabad and serving clients across India and worldwide with websites, apps, SEO, and ads.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AwayLabs | Software Services Company",
    description:
      "AwayLabs builds websites, apps, SEO systems, Google Ads, and Meta Ads campaigns for startups and growing businesses.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AwayLabs | Software Services Company",
    description: "Meet the AwayLabs team behind modern websites, apps, SEO, Google Ads, and Meta Ads campaigns.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CtaSection />
    </>
  );
}
