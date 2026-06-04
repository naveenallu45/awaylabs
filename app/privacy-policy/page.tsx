import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/sections/reveal";

const sections = [
  {
    title: "Information we collect",
    body: "We may collect information you submit through forms, email, phone, WhatsApp, meetings, or project documents, including your name, contact details, business details, project requirements, and billing information.",
  },
  {
    title: "How we use information",
    body: "We use information to respond to enquiries, prepare proposals, deliver projects, provide support, manage invoices, improve services, and communicate about active or requested work.",
  },
  {
    title: "Website and analytics data",
    body: "Our website may use cookies, analytics, logs, and similar technologies to understand page performance, traffic sources, device details, and user interactions.",
  },
  {
    title: "Sharing information",
    body: "We do not sell personal information. We may share necessary information with service providers such as hosting platforms, analytics tools, payment providers, advertising platforms, or project tools when needed to deliver services.",
  },
  {
    title: "Data security",
    body: "We use reasonable technical and organizational measures to protect information, but no internet-based service can be guaranteed to be completely secure.",
  },
  {
    title: "Data retention",
    body: "We retain information for as long as needed for business, legal, accounting, support, and service delivery purposes, unless a longer retention period is required by law.",
  },
  {
    title: "Your choices",
    body: "You can contact us to request access, correction, or deletion of personal information where applicable and legally permitted.",
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for AwayLabs Software Services and learn how we collect, use, protect, and manage personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AwayLabs",
    description: "How AwayLabs Software Services handles information shared through its website and services.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            This policy explains how AwayLabs Software Services handles information shared through our website and services.
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
              For privacy requests, please{" "}
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
