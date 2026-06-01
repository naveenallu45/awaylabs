import type { Metadata } from "next";
import { Suspense } from "react";

import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { PricingSection } from "@/components/sections/pricing-section";

export const metadata: Metadata = {
  title: "Services & Pricing | Website, App, SEO & Ads Plans",
  description:
    "Explore transparent, flexible pricing plans from AwayLabs. Website development, app development, technical SEO optimization, Google Ads, and Meta Ads packages.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "AwayLabs Services & Pricing Plans",
    description:
      "Transparent and high-value pricing for websites, custom apps, SEO optimization, and high-performance Google & Meta Ads management.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AwayLabs Services & Pricing Plans",
    description: "Explore website, app, SEO, and paid search/social marketing pricing plans from AwayLabs.",
    images: ["/opengraph-image"],
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Header section with mesh gradient background */}
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-12 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing Plans"
            title="AwayLabs Services & Pricing"
            description="High-value startup packages and result-driven marketing retainers designed to grow your business cleanly."
          />
        </Reveal>
      </section>

      {/* Main Pricing Section */}
      <section className="relative bg-white py-16 dark:bg-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex h-96 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-500 dark:border-white/10 dark:border-t-cyan-400" />
            </div>
          }>
            <PricingSection />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
