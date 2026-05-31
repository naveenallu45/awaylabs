"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  React.useEffect(() => setOpen(false), [pathname]);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/60 bg-white/70 px-4 py-2.5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55 dark:shadow-[0_18px_80px_rgba(0,0,0,0.4)]">
        <Link href="/" aria-label="AwayLabs home" className="flex items-center gap-5">
          <Image
            src="/awaylabs-logo.png"
            alt="AwayLabs"
            width={128}
            height={128}
            priority
            className="h-[4.2rem] w-[4.2rem] rounded-full object-cover ring-1 ring-cyan-300/30 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
          />
          <span className="leading-none">
            <span className="block text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
              Away<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Labs</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white",
                  active && "text-slate-950 dark:text-white",
                )}
              >
                {active ? <span className="absolute inset-0 rounded-full bg-slate-900/5 dark:bg-white/10" /> : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link href="/contact" className={buttonVariants({ variant: "gradient", size: "sm" })}>
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button type="button" variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur-xl lg:hidden">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/awaylabs-logo.png"
                  alt="AwayLabs"
                  width={128}
                  height={128}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-cyan-300/30"
                />
                <span className="mr-auto ml-3 leading-none">
                  <span className="block text-2xl font-black tracking-[-0.04em] text-white">
                    Away<span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">Labs</span>
                  </span>
                </span>
                <Button type="button" variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5 text-white" />
                </Button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" className={cn(buttonVariants({ variant: "gradient" }), "mt-3")}>
                  Get Started
                </Link>
              </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
