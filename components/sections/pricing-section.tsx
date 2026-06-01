"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Check, 
  Globe2, 
  Smartphone, 
  Search, 
  Target, 
  Megaphone, 
  ArrowRight,
  Info
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem } from "@/components/sections/reveal";
import { pricingData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Map service name to Lucide Icon and a background gradient
const serviceMetaMap: Record<string, { icon: React.ComponentType<{ className?: string }>; gradient: string }> = {
  "Website Development": { icon: Globe2, gradient: "from-cyan-400 to-blue-500" },
  "App Development": { icon: Smartphone, gradient: "from-violet-400 to-fuchsia-500" },
  "SEO Optimization": { icon: Search, gradient: "from-emerald-400 to-cyan-500" },
  "Google Ads Management": { icon: Target, gradient: "from-amber-300 to-orange-500" },
  "Meta Ads Management": { icon: Megaphone, gradient: "from-pink-400 to-rose-500" },
};

export function PricingSection() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";

  // Set the default service from query parameter, or fall back to the first service
  const initialService = pricingData.some((s) => s.service === requestedService)
    ? requestedService
    : pricingData[0].service;

  const [activeService, setActiveService] = React.useState(initialService);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Keep state in sync with URL if it changes
  React.useEffect(() => {
    if (requestedService && pricingData.some((s) => s.service === requestedService)) {
      setActiveService(requestedService);
    }
  }, [requestedService]);

  // Center the selected tab horizontally on mobile viewports
  React.useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeService]);

  const currentPricing = pricingData.find((s) => s.service === activeService) ?? pricingData[0];

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Services Switcher Tabs */}
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-[2rem] blur-xl pointer-events-none" />
        
        {/* Scrollable Container for Mobile, Grid/Flex for Desktop */}
        <div ref={containerRef} className="relative z-10 flex flex-row flex-nowrap overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none gap-2 sm:grid sm:grid-cols-3 lg:grid-cols-5 bg-slate-100/70 dark:bg-slate-900/40 p-2 rounded-3xl border border-slate-200/50 dark:border-white/5 backdrop-blur-md">
          {pricingData.map((item) => {
            const meta = serviceMetaMap[item.service] || { icon: Globe2, gradient: "from-cyan-400 to-blue-500" };
            const Icon = meta.icon;
            const isActive = activeService === item.service;

            return (
              <button
                key={item.service}
                data-active={isActive}
                onClick={() => setActiveService(item.service)}
                className={cn(
                  "flex items-center justify-center gap-3 shrink-0 px-5 py-3.5 rounded-2xl text-sm font-semibold tracking-tight transition-all duration-300 whitespace-nowrap",
                  isActive
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.15)] dark:shadow-[0_12px_35px_rgba(255,255,255,0.15)]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                )}
              >
                <div
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white shadow-sm transition-all duration-300",
                    isActive ? "scale-110" : "opacity-75 grayscale-[20%]",
                    meta.gradient ? `bg-gradient-to-br ${meta.gradient}` : "bg-cyan-500"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span>{item.service.replace(" Management", "")}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Cards Container */}
      <div className="relative">
        <Stagger key={activeService} className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {currentPricing.tiers.map((tier) => {
            const isPopular = tier.popular;
            
            return (
              <StaggerItem key={tier.name} className="h-full">
                <div 
                  className={cn(
                    "group relative h-full rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] flex flex-col justify-between",
                    isPopular 
                      ? "bg-gradient-to-b from-slate-950 to-slate-900 text-white shadow-[0_32px_90px_rgba(59,130,246,0.18)] dark:from-slate-950 dark:to-slate-900 border border-cyan-500/35"
                      : "bg-white/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.04)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
                  )}
                >
                  {/* Subtle Background Glow for Popular Card */}
                  {isPopular && (
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-2xl opacity-60 pointer-events-none" />
                  )}

                  {/* Top content */}
                  <div className="p-8 sm:p-10 flex-grow">
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-lg font-bold tracking-tight uppercase",
                        isPopular ? "text-cyan-400" : "text-cyan-600 dark:text-cyan-300"
                      )}>
                        {tier.name}
                      </span>
                      {isPopular && (
                        <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 shadow-md">
                          Most Popular
                        </Badge>
                      )}
                    </div>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className={cn(
                          "text-base font-semibold",
                          isPopular ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
                        )}>
                          {tier.period}
                        </span>
                      )}
                    </div>

                    {tier.description && (
                      <p className={cn(
                        "mt-4 text-sm leading-6",
                        isPopular ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                      )}>
                        {tier.description}
                      </p>
                    )}

                    {/* Features list */}
                    <div className="mt-8 border-t border-slate-200/60 dark:border-white/10 pt-8">
                      <ul className="space-y-4">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <div className={cn(
                              "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                              isPopular 
                                ? "bg-cyan-500/20 text-cyan-400" 
                                : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                            )}>
                              <Check className="h-3 w-3" />
                            </div>
                            <span className={cn(
                              "leading-tight font-medium",
                              isPopular ? "text-slate-200" : "text-slate-700 dark:text-slate-300"
                            )}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="p-8 sm:p-10 pt-0">
                    <Link
                      href={`/contact?service=${encodeURIComponent(activeService)}`}
                      className={cn(
                        "w-full justify-between group/btn",
                        buttonVariants({ 
                          variant: isPopular ? "default" : "outline",
                          size: "lg"
                        })
                      )}
                    >
                      <span>Choose {tier.name}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      {/* Ad Spend Note / Extra Callout */}
      {currentPricing.note && (
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-4 text-center dark:border-white/5 dark:bg-slate-900/30 backdrop-blur">
          <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Info className="h-4 w-4 text-cyan-500" />
            {currentPricing.note}
          </p>
        </div>
      )}
    </div>
  );
}
