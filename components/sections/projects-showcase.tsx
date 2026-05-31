"use client";

import * as React from "react";
import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projectCategories, projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProjectsShowcase({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = React.useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);
  const visible = showHeading ? filtered : filtered.slice(0, 3);

  return (
    <section
      className={cn(
        "relative bg-slate-50 dark:bg-slate-900/40",
        showHeading ? "pb-24 pt-36 sm:pb-32 sm:pt-40" : "py-24 sm:py-32",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={showHeading ? "Projects" : "Our Projects"}
            title={
              showHeading
                ? "Showcase-ready project previews for ambitious launches"
                : "A glimpse at the premium build experiences we create"
            }
            description={
              showHeading
                ? "A premium gallery direction with dummy showcase data, category filtering, tech badges, and coming-soon visual systems."
                : "Browse polished coming-soon previews shaped for websites, apps, SEO systems, and paid growth campaigns."
            }
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  active === category
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200"
                    : "border-slate-200 bg-white/70 text-slate-600 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <div key={project.id} className={cn(index === 0 && showHeading ? "md:col-span-2" : "")}>
              <ProjectCard project={project} large={index === 0 && showHeading} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: (typeof projects)[number]; large?: boolean }) {
  return (
    <Card className="group relative h-full overflow-hidden">
      <div className={cn("h-64 bg-gradient-to-br p-5", project.accent, large && "md:h-80")}>
        <div className="flex items-center justify-between">
          <Badge className="border-white/20 bg-white/20 text-white backdrop-blur">
            <Clock3 className="mr-2 h-3.5 w-3.5" />
            Coming Soon
          </Badge>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:scale-110">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-12 rounded-[1.5rem] border border-white/20 bg-white/15 p-4 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          </div>
          <div className="mt-5 grid gap-3">
            <div className="h-3 w-3/4 rounded-full bg-white/70" />
            <div className="h-3 w-1/2 rounded-full bg-white/40" />
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl bg-white/20" />
              <div className="h-16 rounded-2xl bg-white/30" />
              <div className="h-16 rounded-2xl bg-white/20" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
          <Layers3 className="h-4 w-4" />
          {project.category}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.headline}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
