"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send, XCircle } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { offices, serviceOptions } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { submitWeb3Form } from "@/lib/web3forms";

type SubmitState = {
  type: "idle" | "sending" | "success" | "error";
  message?: string;
};

const contactCards = [
  { label: "Email", value: "connect@awaylabs.in", href: "mailto:connect@awaylabs.in", icon: Mail },
  { label: "Phone", value: "+91 99084 63421", href: "tel:+919908463421", icon: Phone },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919908463421", icon: MessageCircle },
  { label: "Response", value: "Within 1 business day", icon: Send },
];

export function ContactContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const selectedService = serviceOptions.includes(requestedService) ? requestedService : "";
  const [submitState, setSubmitState] = React.useState<SubmitState>({ type: "idle" });
  const statusTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
      }
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setSubmitState({ type: "sending" });

    try {
      await submitWeb3Form({
        subject: `New AwayLabs Project Enquiry - ${service}`,
        from_name: name,
        name,
        email,
        phone,
        service,
        message,
        source: "Contact Form",
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        botcheck: String(formData.get("botcheck") ?? ""),
      });

      form.reset();
      setSubmitState({ type: "success", message: "Thank you, our executive will contact you." });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error && error.message.includes("access key")
            ? "Form delivery is not configured yet. Please call or WhatsApp us."
            : "Could not send your message right now. Please call or WhatsApp us.",
      });
    }

    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
    }

    statusTimerRef.current = setTimeout(() => {
      setSubmitState({ type: "idle" });
    }, 8000);
  }

  const isSending = submitState.type === "sending";

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you want to build"
              titleClassName="whitespace-nowrap text-[1.7rem] sm:text-5xl"
            />
            <p className="mx-auto mt-5 hidden max-w-3xl text-center text-lg leading-8 text-slate-600 dark:text-slate-400 sm:block">
              Share your goals and preferred service. We will respond with a practical next step for design,
              development, SEO, Google Ads, Meta Ads, or support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Card className="p-6 sm:p-8">
                <form className="grid gap-5" aria-label="Contact form" onSubmit={handleSubmit}>
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <Input name="name" placeholder="Your name" autoComplete="name" required />
                    </Field>
                    <Field label="Email">
                      <Input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone">
                      <Input name="phone" type="tel" placeholder="+91 99084 63421" autoComplete="tel" />
                    </Field>
                    <Field label="Service">
                      <Select name="service" defaultValue={selectedService} required>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>
                  <Field label="Message">
                    <Textarea name="message" placeholder="Tell us about your project, timeline, and goals." required />
                  </Field>
                  {submitState.type === "success" || submitState.type === "error" ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className={cn(
                        "flex items-start gap-3 rounded-2xl border p-4 text-sm font-medium leading-6",
                        submitState.type === "success"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-200"
                          : "border-rose-400/30 bg-rose-400/10 text-rose-700 dark:text-rose-200",
                      )}
                    >
                      {submitState.type === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      ) : (
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      )}
                      <span>{submitState.message}</span>
                    </div>
                  ) : null}
                  <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-fit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"} <Send className={cn("h-4 w-4", isSending && "animate-pulse")} />
                  </Button>
                </form>
              </Card>
            </Reveal>

            <div className="grid content-start gap-5">
              <Stagger className="grid gap-5 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <StaggerItem key={card.label}>
                      <Card className="p-6">
                        {"href" in card ? (
                          <a
                            href={card.href}
                            aria-label={card.label}
                            className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-500 transition hover:-translate-y-0.5 hover:bg-cyan-400/15 hover:text-blue-600 dark:text-cyan-300 dark:hover:text-cyan-200"
                          >
                            <Icon className="h-6 w-6" />
                          </a>
                        ) : (
                          <Icon className="h-6 w-6 text-cyan-500" />
                        )}
                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
                        {"href" in card ? (
                          <a
                            href={card.href}
                            className="mt-1 block font-semibold text-slate-950 transition hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-semibold text-slate-950 dark:text-white">{card.value}</p>
                        )}
                      </Card>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Office locations"
              title="Built in India, available remotely worldwide"
              description="Connect with AwayLabs in Hyderabad or work with us remotely from anywhere."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <Card className="h-full p-7">
                  <MapPin className="h-7 w-7 text-cyan-500" />
                  <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{office.city}</h3>
                  <address className="mt-4 not-italic leading-7 text-slate-600 dark:text-slate-400">
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      {children}
    </label>
  );
}
