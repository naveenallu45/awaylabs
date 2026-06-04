import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/sections/reveal";

const sections = [
  {
    title: "Company",
    body: "This website and related services are operated by AwayLabs, under the registered name AwayLabs Software Services.",
  },
  {
    title: "Use of our services",
    body: "Our website development, app development, SEO, Google Ads, Meta Ads, and related software services are provided based on agreed proposals, scopes, timelines, and invoices.",
  },
  {
    title: "Client responsibilities",
    body: "Clients are responsible for sharing accurate requirements, approvals, brand assets, account access, and lawful content needed to complete the agreed work.",
  },
  {
    title: "Payments and delivery",
    body: "Fees, milestones, revisions, support periods, and delivery timelines are defined in the relevant proposal, estimate, or invoice shared for each project.",
  },
  {
    title: "Intellectual property",
    body: "Final project deliverables are transferred as agreed after payment completion. Third-party tools, fonts, plugins, platforms, stock assets, and services remain subject to their own licenses.",
  },
  {
    title: "Limitation of liability",
    body: "AwayLabs Software Services is not liable for indirect losses, third-party platform changes, ad account decisions, search engine changes, hosting outages, or issues caused by incorrect information or unauthorized account changes.",
  },
  {
    title: "Updates",
    body: "We may update these terms as our services, processes, or legal requirements change. The latest version will be available on this page.",
  },
];

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for AwayLabs Software Services, covering website development, app development, SEO, ads, and related services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | AwayLabs",
    description: "Terms for using AwayLabs Software Services website and services.",
    url: "/terms-and-conditions",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Please read these terms before using this website or starting a project with AwayLabs Software Services.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Last updated: June 4, 2026
            </p>
            <div className="mt-8 grid gap-7">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{section.body}</p>
                </section>
              ))}
            </div>
            <p className="mt-8 leading-7 text-slate-600 dark:text-slate-400">
              For questions about these terms, please{" "}
              <Link href="/contact" className="font-semibold text-cyan-600 dark:text-cyan-300">
                contact AwayLabs
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
