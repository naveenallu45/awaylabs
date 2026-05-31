import { AnimatedCounter } from "@/components/sections/animated-counter";
import { Reveal, Stagger, StaggerItem } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { stats, team, timeline, valueProps } from "@/lib/site-data";

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About AwayLabs"
              title="A website, app, SEO, and ads partner for modern businesses"
            />
            <p className="mt-5 hidden text-base leading-8 text-slate-600 dark:text-slate-400 sm:block sm:text-lg">
              We help founders and teams turn ideas into fast, beautiful, reliable digital products. Our work spans
              strategy, design, development, SEO optimization, Google Ads, Meta Ads, and long-term support.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-8">
              <Badge className="border-violet-400/30 bg-violet-400/10 text-violet-600 dark:text-violet-200">Mission</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Ship premium digital experiences without slowing down your business.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
                Our vision is to make premium digital execution accessible to startups, SMBs, and teams that need a practical partner from first concept to post-launch growth.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                {stats.slice(0, 3).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-4">
                      <Icon className="mb-3 h-4 w-4 text-cyan-500 sm:mb-4 sm:h-5 sm:w-5" />
                      <p className="text-xl font-semibold text-slate-950 dark:text-white sm:text-3xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Premium execution, clear delivery, and measurable outcomes"
              description="We bring the judgement of a product team, the craft of a design studio, and the growth mindset of an SEO and ads partner."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <Card className="h-full p-6">
                    <Icon className="h-8 w-8 text-cyan-500" />
                    <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Team"
              title="Specialists across strategy, design, development, and growth"
              description="A lean senior team structure keeps communication simple while covering the full digital delivery lifecycle."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <StaggerItem key={member.name}>
                  <div className="h-full transition duration-300 hover:-translate-y-2">
                    <Card className="h-full p-8 text-center">
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-[0_0_45px_rgba(59,130,246,0.35)]">
                        <Icon className="h-9 w-9" />
                      </div>
                      <h3 className="mt-7 text-2xl font-semibold text-slate-950 dark:text-white">{member.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{member.role}</p>
                    </Card>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Timeline"
              title="Built for modern launches, refined through real delivery"
              description="Our delivery model has grown from fast website launches into app, SEO, and paid growth execution."
            />
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 md:left-1/2" />
            <div className="grid gap-8">
              {timeline.map((item, index) => (
                <Reveal key={item.year}>
                  <div className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`}>
                    <div className="ml-12 md:ml-0">
                      <Card className="p-6">
                        <Badge>{item.year}</Badge>
                        <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                      </Card>
                    </div>
                    <span className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-white bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] dark:border-slate-950 md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
