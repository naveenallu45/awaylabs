import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceGrid } from "@/components/sections/service-grid";

export const metadata: Metadata = {
  title: "Website, App, SEO, Google Ads & Meta Ads Services",
  description:
    "Explore AwayLabs software services for website development, app development, SEO optimization, Google Ads, and Meta Ads for clients across India and worldwide.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AwayLabs Services | Website Development, Apps, SEO & Ads",
    description:
      "Website development, app development, SEO optimization, Google Ads, and Meta Ads services for growing businesses.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AwayLabs Services",
    description: "Explore website, app, SEO, Google Ads, and Meta Ads services from AwayLabs.",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Website, app, SEO, and ads services for growing brands"
          />
          <p className="mx-auto mt-5 hidden max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:block">
            Choose a focused service or bring us in as your delivery partner across planning, design,
            development, search visibility, and paid growth campaigns.
          </p>
          <p className="mt-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            Need help choosing a service? Email{" "}
            <a
              href="mailto:connect@awaylabs.in"
              className="text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              connect@awaylabs.in
            </a>{" "}
            or WhatsApp{" "}
            <a
              href="https://wa.me/919182179103"
              className="text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              +91 91821 79103
            </a>
          </p>
        </Reveal>
      </section>
      <ServiceGrid showHeading={false} />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
