"use client";

import * as React from "react";
import { CheckCircle2, Mail, Send, XCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { submitWeb3Form } from "@/lib/web3forms";

type SubmitState = {
  type: "idle" | "sending" | "success" | "error";
  message?: string;
};

export function NewsletterForm() {
  const [submitState, setSubmitState] = React.useState<SubmitState>({ type: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    setSubmitState({ type: "sending" });

    try {
      await submitWeb3Form({
        subject: "New AwayLabs Newsletter Subscriber",
        from_name: "AwayLabs Website",
        email,
        subscriber_email: email,
        message: `New newsletter subscription: ${email}`,
        source: "Newsletter Form",
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        botcheck: String(formData.get("botcheck") ?? ""),
      });

      form.reset();
      setSubmitState({ type: "success", message: "Subscribed successfully." });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error && error.message.includes("access key")
            ? "Newsletter delivery is not configured yet."
            : "Could not subscribe right now. Please try again.",
      });
    }
  }

  const isSending = submitState.type === "sending";

  return (
    <form className="grid gap-3" aria-label="Newsletter subscription" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex gap-2">
        <Input type="email" name="email" placeholder="you@company.com" aria-label="Email address" required />
        <button
          className={cn(buttonVariants({ variant: "gradient", size: "icon" }), "shrink-0")}
          aria-label="Subscribe"
          disabled={isSending}
        >
          {isSending ? <Send className="h-4 w-4 animate-pulse" /> : <Mail className="h-4 w-4" />}
        </button>
      </div>
      {submitState.type === "success" || submitState.type === "error" ? (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "flex items-start gap-2 text-xs font-medium leading-5",
            submitState.type === "success" ? "text-emerald-600 dark:text-emerald-300" : "text-rose-600 dark:text-rose-300",
          )}
        >
          {submitState.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
