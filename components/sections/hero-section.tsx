import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud, Rocket, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedCounter } from "@/components/sections/animated-counter";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { stats } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 pt-32 dark:bg-slate-950">
      <div className="mesh-gradient absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-violet-600/20 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <Badge className="mb-6 border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Website, app, SEO, and ads partner for growing businesses
          </Badge>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-6xl lg:text-6xl xl:text-7xl">
            <span className="block whitespace-nowrap">We Build Modern</span>
            <span className="block whitespace-nowrap">Websites, Apps &</span>
            <span className="block whitespace-nowrap">Meta Ads Campaign</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            AwayLabs helps startups and businesses launch websites, build apps, improve SEO, and run Google and Meta ads.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className={buttonVariants({ variant: "gradient", size: "lg" })}>
              Start Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Services
            </Link>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-600 dark:text-slate-400">
            For project enquiries, email{" "}
            <a
              href="mailto:connect@awaylabs.in"
              className="text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              connect@awaylabs.in
            </a>{" "}
            or WhatsApp{" "}
            <a
              href="https://wa.me/919908463421"
              className="text-cyan-600 transition hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              +91 99084 63421
            </a>
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                  <Icon className="mb-3 h-5 w-5 text-cyan-500" />
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const metrics = [
    { label: "Site uptime", value: "99.9%", icon: ShieldCheck },
    { label: "Growth speed", value: "93%", icon: Rocket },
    { label: "Load time", value: "-18%", icon: Cloud },
  ];

  return (
    <div className="glass-ring relative rounded-[2.5rem] bg-white/70 p-3 shadow-[0_30px_120px_rgba(59,130,246,0.2)] backdrop-blur-2xl dark:bg-white/[0.06]">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl dark:border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <Badge className="border-white/10 bg-white/10 text-white">AwayLabs</Badge>
        </div>
        <div className="grid gap-4 p-5">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-5">
            <p className="text-sm text-white/80">Digital growth system</p>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-4xl font-semibold tracking-tight">Full-stack delivery</p>
                <p className="mt-2 text-sm text-white/75">Websites, apps, SEO, and ads aligned</p>
              </div>
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:rounded-3xl sm:p-4">
                  <Icon className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
                  <p className="mt-4 text-lg font-semibold sm:mt-5 sm:text-2xl">{metric.value}</p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">{metric.label}</p>
                </div>
              );
            })}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-slate-300">Delivery readiness</span>
              <span className="text-cyan-300">99%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
