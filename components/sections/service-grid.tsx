import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Stagger, StaggerItem } from "@/components/sections/reveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { services, serviceSlug } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServiceGrid({ compact = false, showHeading = true }: { compact?: boolean; showHeading?: boolean }) {
  const visibleServices = compact ? services.slice(0, 6) : services;

  return (
    <section className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Services"
            title="Everything your digital presence needs to launch and grow"
            description="From elegant websites and app experiences to SEO optimization, Google Ads, and Meta Ads, AwayLabs brings the core growth stack together."
          />
        ) : null}

        <Stagger className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", showHeading ? "mt-14" : "")}>
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="h-full transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
                  <Card className="group relative h-full overflow-hidden p-6">
                    <div className={cn("absolute inset-x-8 -top-24 h-40 rounded-full bg-gradient-to-r opacity-0 blur-3xl transition duration-500 group-hover:opacity-30", service.gradient)} />
                    <div className={cn("mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition group-hover:scale-110", service.gradient)}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
                    <Link
                      href={`/services/${serviceSlug(service.title)}`}
                      className="mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-cyan-600 opacity-0 transition hover:gap-3 group-hover:opacity-100 dark:text-cyan-300"
                    >
                      Explore service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {compact ? (
          <div className="mt-12 text-center">
            <Link href="/services" className={buttonVariants({ variant: "gradient", size: "lg" })}>
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
