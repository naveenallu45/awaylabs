import { ChevronDown } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions founders and teams ask before we start"
            description="Clear scope, practical delivery, and long-term support are built into how we work."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <details className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:scale-[1.01] dark:border-white/10 dark:bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-slate-950 dark:text-white">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-cyan-500 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
