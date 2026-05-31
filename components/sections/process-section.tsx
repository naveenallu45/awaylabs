import { Reveal, Stagger, StaggerItem } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A focused delivery system from idea to scale"
            description="We combine product clarity, premium design, typed engineering, and launch operations so every project moves with confidence."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <Card className="relative h-full overflow-hidden p-6">
                  <span className="absolute right-5 top-5 text-5xl font-semibold text-slate-100 dark:text-white/5">
                    0{index + 1}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white transition duration-300 hover:rotate-6 hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
