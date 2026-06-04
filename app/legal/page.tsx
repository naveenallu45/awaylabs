import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/sections/reveal";

const details = [
  { label: "Registered name", value: "AwayLabs Software Services" },
  { label: "Brand name", value: "AwayLabs" },
  { label: "Website", value: "https://awaylabs.in" },
  { label: "Email", value: "connect@awaylabs.in" },
  { label: "Phone", value: "+91 91821 79103" },
  { label: "Operating region", value: "Hyderabad, Telangana, India" },
];

const notices = [
  {
    title: "Service information",
    body: "Information on this website is provided for general business and service enquiry purposes. Final project scope, pricing, support, and delivery commitments are confirmed through written proposals or invoices.",
  },
  {
    title: "Third-party platforms",
    body: "Google Ads, Meta Ads, hosting, domains, analytics, payment gateways, app stores, and other third-party platforms are governed by their own terms, policies, pricing, and approval processes.",
  },
  {
    title: "Legal requests",
    body: "For legal, privacy, or compliance requests, contact AwayLabs Software Services through the official email listed on this page.",
  },
];

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal information for AwayLabs Software Services, including registered name, contact details, and service notices.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Legal Information | AwayLabs",
    description: "Registered company and legal contact information for AwayLabs Software Services.",
    url: "/legal",
    type: "website",
  },
};

export default function LegalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-16 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            Company
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Legal Information
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Company and legal contact details for AwayLabs Software Services.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Last updated: June 4, 2026
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 font-semibold text-slate-950 dark:text-white">{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid gap-7">
              {notices.map((notice) => (
                <section key={notice.title}>
                  <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{notice.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{notice.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/terms-and-conditions" className="footer-link font-semibold">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="footer-link font-semibold">
                Privacy Policy
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
