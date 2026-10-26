"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, ArrowUpRight, AlertCircle, Mail } from "lucide-react";
import {
  contactSchema,
  type ContactFormData,
  HELP_WITH_OPTIONS,
  BUDGET_OPTIONS,
} from "../schemas";
import { submitContactEnquiry } from "../actions";
import { sendEmailEnquiry, isEmailJSConfigured } from "@/lib/emailjs";
import { VERIFIED_EMAIL } from "@/constants/navigation";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      websiteUrl: "",
      helpWith: "",
      challenge: "",
      budget: "",
      websiteHoneypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);

    // Bot trap check
    if (data.websiteHoneypot && data.websiteHoneypot.length > 0) {
      setServerError("Spam submission detected.");
      return;
    }

    try {
      // 1. Send inquiry via EmailJS if configured
      if (isEmailJSConfigured()) {
        await sendEmailEnquiry({
          name: data.name,
          email: data.email,
          businessName: data.businessName,
          websiteUrl: data.websiteUrl,
          helpWith: data.helpWith,
          challenge: data.challenge,
          budget: data.budget,
        });
      }

      // 2. Submit server action for logging & validation
      const serverResult = await submitContactEnquiry(data);
      if (!serverResult.success) {
        throw new Error(serverResult.message || "Failed to process inquiry.");
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      console.error("[Contact Form Error]", err);
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
          ? String((err as { text: unknown }).text)
          : `We could not deliver your inquiry automatically. Please email us directly at ${VERIFIED_EMAIL}.`;
      setServerError(message);
    }
  };

  const getInputClass = (hasError: boolean) =>
    `mt-2 w-full rounded-[2px] border px-4 py-3 text-sm text-white outline-none transition-all duration-200 font-mono ${
      hasError
        ? "border-red-500 bg-red-950/20 focus:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500"
        : "border-[rgba(213,255,64,0.2)] bg-[#101010] focus:border-[#D5FF40] focus-visible:ring-1 focus-visible:ring-[#D5FF40]"
    }`;

  if (submitted) {
    return (
      <div className="border border-[rgba(213,255,64,0.3)] bg-[#0A0A0A] p-8 sm:p-10">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#D5FF40] text-[#050505]">
            <Check className="h-6 w-6 stroke-[3]" />
          </span>
          <h2 className="font-display mt-6 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Project inquiry received.
          </h2>
          <p className="mt-3 max-w-md text-sm text-[#B0B0B0] leading-relaxed font-normal">
            Thank you for reaching out. We have received your inquiry and will reply with practical recommendations within one business day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="border border-[rgba(213,255,64,0.25)] text-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 space-y-6"
      noValidate
    >
      {/* Bot Honeypot - hidden from real humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this empty</label>
        <input
          id="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("websiteHoneypot")}
        />
      </div>

      {serverError && (
        <div className="p-4 border border-red-500/40 bg-red-950/20 text-xs sm:text-sm text-red-300 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
          <div>
            <p className="font-bold">Transmission issue</p>
            <p className="mt-0.5">{serverError}</p>
            <a
              href={`mailto:${VERIFIED_EMAIL}`}
              className="inline-flex items-center gap-1 text-[#D5FF40] underline mt-1.5 font-mono"
            >
              <Mail className="h-3 w-3" />
              <span>Email directly: {VERIFIED_EMAIL}</span>
            </a>
          </div>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Your Name <span className="text-[#D5FF40]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            autoComplete="name"
            className={getInputClass(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400 font-mono">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Email Address <span className="text-[#D5FF40]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            className={getInputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400 font-mono">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Business Name and Website URL */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="businessName"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Business / Brand Name <span className="text-[#B0B0B0] font-normal">(Optional)</span>
          </label>
          <input
            id="businessName"
            type="text"
            placeholder="Acme Studio"
            className={getInputClass(!!errors.businessName)}
            {...register("businessName")}
          />
        </div>

        <div>
          <label
            htmlFor="websiteUrl"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Website URL <span className="text-[#B0B0B0] font-normal">(Optional)</span>
          </label>
          <input
            id="websiteUrl"
            type="text"
            placeholder="https://example.com"
            className={getInputClass(!!errors.websiteUrl)}
            {...register("websiteUrl")}
          />
          {errors.websiteUrl && (
            <p className="mt-1.5 text-xs text-red-400 font-mono">
              {errors.websiteUrl.message}
            </p>
          )}
        </div>
      </div>

      {/* What do you need help with? */}
      <div>
        <label
          htmlFor="helpWith"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          What do you need help with? <span className="text-[#D5FF40]">*</span>
        </label>
        <select
          id="helpWith"
          className={getInputClass(!!errors.helpWith)}
          defaultValue=""
          {...register("helpWith")}
        >
          <option value="" disabled className="text-[#B0B0B0]">
            Select an area of interest...
          </option>
          {HELP_WITH_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#101010] text-white">
              {opt}
            </option>
          ))}
        </select>
        {errors.helpWith && (
          <p className="mt-1.5 text-xs text-red-400 font-mono">
            {errors.helpWith.message}
          </p>
        )}
      </div>

      {/* Current challenge and goals (Message) */}
      <div>
        <label
          htmlFor="challenge"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          Project Details, Challenges &amp; Goals <span className="text-[#D5FF40]">*</span>
        </label>
        <textarea
          id="challenge"
          rows={4}
          placeholder="Tell us what your business does, your project requirements (website, custom app, ad management, or Meta CAPI tracking), and target timeline..."
          className={getInputClass(!!errors.challenge)}
          {...register("challenge")}
        />
        {errors.challenge && (
          <p className="mt-1.5 text-xs text-red-400 font-mono">
            {errors.challenge.message}
          </p>
        )}
      </div>

      {/* Approximate budget (Optional) */}
      <div>
        <label
          htmlFor="budget"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          Approximate Budget <span className="text-[#B0B0B0] font-normal">(Optional)</span>
        </label>
        <select
          id="budget"
          className={getInputClass(false)}
          defaultValue=""
          {...register("budget")}
        >
          <option value="" className="text-[#B0B0B0]">
            Select an approximate range (or leave blank)...
          </option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b} value={b} className="bg-[#101010] text-white">
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D5FF40] text-[#050505] px-8 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <span>Discuss Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
