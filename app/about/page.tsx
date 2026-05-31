import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/about-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Our Digital Agency in Hyderabad",
  description:
    "Learn about AwayLabs, a Hyderabad and remote digital agency with 2+ years of experience and 50+ projects across websites, apps, SEO, and ads.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AwayLabs | Hyderabad Digital Agency",
    description:
      "AwayLabs builds websites, apps, SEO systems, Google Ads, and Meta Ads campaigns for startups and growing businesses.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AwayLabs | Hyderabad Digital Agency",
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
