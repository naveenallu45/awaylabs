import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { navItems, offices, services } from "@/lib/site-data";

const socials = [
  { label: "X", text: "X", href: "https://x.com" },
  { label: "LinkedIn", text: "in", href: "https://linkedin.com" },
  { label: "GitHub", text: "GH", href: "https://github.com" },
  { label: "Instagram", text: "IG", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/awaylabs-logo.png"
                alt="AwayLabs"
                width={160}
                height={160}
                className="h-20 w-20 rounded-[1.5rem] object-cover ring-1 ring-cyan-300/30 shadow-[0_0_45px_rgba(59,130,246,0.28)]"
              />
              <span className="leading-none">
                <span className="block text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                  Away<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Labs</span>
                </span>
                <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                  Build • Rank • Grow
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7">
              Modern websites, apps, SEO optimization, Google Ads, and Meta Ads for startups and growing businesses.
            </p>
            <div className="grid gap-2 text-sm font-semibold">
              <Link
                href="mailto:connect@awaylabs.in"
                className="inline-flex items-center gap-2 text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" />
                connect@awaylabs.in
              </Link>
              <Link
                href="tel:+919182179103"
                className="inline-flex items-center gap-2 text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                <Phone className="h-4 w-4" />
                +91 91821 79103
              </Link>
              <Link
                href="https://wa.me/919182179103"
                className="inline-flex items-center gap-2 text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </Link>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  <span className="text-xs font-bold">{social.text}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <FooterColumn title="Quick Links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title="Services">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href="/services" className="footer-link">
                  {service.title}
                </Link>
              ))}
            </FooterColumn>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 dark:text-white">
                Newsletter
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Get launch ideas, product notes, SEO tips, and campaign optimization notes.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.city} className="rounded-3xl border border-slate-200 bg-white/60 p-5 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <p className="font-semibold text-slate-950 dark:text-white">{office.city}</p>
              <address className="mt-2 not-italic leading-6 text-slate-600 dark:text-slate-400">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AwayLabs. All rights reserved.</p>
          <Link href="/contact" className="inline-flex items-center gap-1 font-medium text-cyan-600 dark:text-cyan-300">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 dark:text-white">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm">{children}</div>
    </div>
  );
}
