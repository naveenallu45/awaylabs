import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/components/providers/app-providers";
import { StructuredData } from "@/components/seo/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://awaylabs.in"),
  applicationName: "AwayLabs",
  authors: [{ name: "AwayLabs", url: "https://awaylabs.in" }],
  creator: "AwayLabs",
  publisher: "AwayLabs",
  category: "Software Agency",
  referrer: "origin-when-cross-origin",
  title: {
    default: "AwayLabs | Website Development, Apps, SEO & Ads",
    template: "%s | AwayLabs",
  },
  description:
    "AwayLabs is a Hyderabad and remote digital agency for website development, app development, SEO optimization, Google Ads, and Meta Ads campaigns.",
  keywords: [
    "AwayLabs",
    "AwayLabs Hyderabad",
    "digital agency Hyderabad",
    "website development",
    "website development Hyderabad",
    "web design Hyderabad",
    "business website development",
    "landing page development",
    "app development",
    "mobile app development",
    "mobile app development Hyderabad",
    "SEO optimization",
    "SEO agency Hyderabad",
    "technical SEO",
    "Google Ads",
    "Google Ads agency",
    "Meta Ads",
    "Facebook ads",
    "Instagram ads",
    "Meta Ads campaigns",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AwayLabs | Website Development, Apps, SEO & Ads",
    description:
      "Hyderabad and remote digital agency for modern websites, apps, SEO optimization, Google Ads, and Meta Ads campaigns.",
    url: "https://awaylabs.in",
    siteName: "AwayLabs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AwayLabs website development, apps, SEO, Google Ads, and Meta Ads",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AwayLabs | Website Development, Apps, SEO & Ads",
    description: "Build modern websites, apps, SEO systems, Google Ads, and Meta Ads campaigns with AwayLabs.",
    images: ["/opengraph-image"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "business:contact_data:locality": "Hyderabad",
    "business:contact_data:region": "Telangana",
    "business:contact_data:country_name": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
        <StructuredData />
        <AppProviders>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
