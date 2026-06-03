import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact AwayLabs",
  description:
    "Contact AwayLabs to start a website development, app development, SEO, Google Ads, or Meta Ads project with a software services company operating from Hyderabad.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AwayLabs | Start Your Website, App, SEO or Ads Project",
    description: "Call, WhatsApp, or email AwayLabs to discuss website development, apps, SEO, Google Ads, and Meta Ads.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AwayLabs",
    description: "Start your website, app, SEO, Google Ads, or Meta Ads project with AwayLabs.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
