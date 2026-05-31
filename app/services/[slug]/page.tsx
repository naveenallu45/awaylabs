import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServiceBySlug, services, serviceSlug } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: serviceSlug(service.title),
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service",
    };
  }

  return {
    title: `${service.title} Services`,
    description: `${service.description} Work with AwayLabs for ${service.title.toLowerCase()} in Hyderabad and remotely, with strategy, execution, launch support, and growth-focused optimization.`,
    keywords: [
      service.title,
      `${service.title} Hyderabad`,
      `${service.title} agency`,
      "AwayLabs",
      "website development",
      "app development",
      "SEO optimization",
      "Google Ads",
      "Meta Ads",
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} Services | AwayLabs`,
      description: `${service.description} Plan, build, launch, and optimize with AwayLabs.`,
      url: `/services/${slug}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${service.title} services by AwayLabs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | AwayLabs`,
      description: service.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = services.filter((item) => item.title !== service.title).slice(0, 3);
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;

  const deliverables = [
    `Discovery, goals, and scope for ${service.title.toLowerCase()}`,
    "Premium user experience and conversion-focused interface planning",
    "Clean TypeScript implementation with reusable, scalable architecture",
    "Performance, accessibility, SEO, analytics, and deployment readiness",
    "Launch support, optimization, documentation, and maintenance guidance",
  ];

  const process = [
    {
      title: "Discover",
      description: "We understand your business goals, users, timeline, integrations, and success metrics before planning the build.",
    },
    {
      title: "Design",
      description: "We shape flows, visual direction, content structure, and interaction patterns so the experience feels premium.",
    },
    {
      title: "Build",
      description: "We implement the service with clean code, reusable components, secure foundations, and performance in mind.",
    },
    {
      title: "Launch",
      description: "We deploy, monitor, optimize, and support the release so your team can move confidently after go-live.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:gap-3 dark:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Badge className="border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                AwayLabs service
              </Badge>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {service.description} We plan, design, build, deploy, and optimize every detail so your product feels modern,
                reliable, and ready to scale.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href={contactHref} className={buttonVariants({ variant: "gradient", size: "lg" })}>
                  Start this service <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Talk to us
                </Link>
              </div>
            </div>

            <Card className="relative overflow-hidden p-8">
              <div className={cn("absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-r opacity-30 blur-3xl", service.gradient)} />
              <div className={cn("relative grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br text-white shadow-[0_0_45px_rgba(59,130,246,0.35)]", service.gradient)}>
                <Icon className="h-10 w-10" />
              </div>
              <h2 className="relative mt-8 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                A complete delivery plan for {service.title.toLowerCase()}
              </h2>
              <p className="relative mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                AwayLabs connects strategy, design, development, SEO, analytics, and ads into one practical service experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title={`Everything included in ${service.title}`}
            description="A focused service page built to help you understand the outcome, process, and next step before starting a project."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {deliverables.map((item) => (
              <Card key={item} className="flex gap-4 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How we take this from idea to launch"
            description="Simple stages, clear milestones, and a premium execution style that keeps your team aligned."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <Card key={step.title} className="relative h-full overflow-hidden p-6">
                <span className="absolute right-5 top-5 text-5xl font-semibold text-slate-100 dark:text-white/5">
                  0{index + 1}
                </span>
                <h3 className="relative text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related services"
            title="Explore services that pair well with this"
            description="Most successful launches combine the right website, app, SEO, and paid growth workstreams."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => {
              const RelatedIcon = item.icon;
              return (
                <Link key={item.title} href={`/services/${serviceSlug(item.title)}`} className="group">
                  <Card className="h-full p-6 transition group-hover:-translate-y-1">
                    <div className={cn("grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white", item.gradient)}>
                      <RelatedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
