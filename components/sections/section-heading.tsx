import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-5",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      <Badge className="border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-200">
        {eyebrow}
      </Badge>
      <h2 className={cn("text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
