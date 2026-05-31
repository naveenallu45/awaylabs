import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { buttonVariants } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan-200 backdrop-blur">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Ready to build something premium?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Tell us what you are launching. We will help shape the plan, design the experience, build the product, and deploy it cleanly.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" })}>
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View Services
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
