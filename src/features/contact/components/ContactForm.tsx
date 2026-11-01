"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, ArrowUpRight, AlertCircle, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  contactSchema,
  type ContactFormData,
  GOAL_OPTIONS,
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
      phoneOrWhatsApp: "",
      businessOrOrg: "",
      goal: "",
      description: "",
      budget: "",
      privacyConsent: false,
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
          phoneOrWhatsApp: data.phoneOrWhatsApp,
          businessOrOrg: data.businessOrOrg,
          goal: data.goal,
          description: data.description,
          budget: data.budget,
        });
      }

      // 2. Submit server action for validation & logging
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
      <div className="border border-[rgba(213,255,64,0.3)] bg-[#0A0A0A] p-8 sm:p-10 rounded-[2px]">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#D5FF40] text-[#050505]">
            <Check className="h-6 w-6 stroke-[3]" />
          </span>
          <h2 className="font-display mt-6 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Project inquiry received.
          </h2>
          <p className="mt-3 max-w-md text-sm text-[#B0B0B0] leading-relaxed font-normal">
            Thank you for reaching out. We have received your inquiry and will reply with practical recommendations and clear scopes within one business day.
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
      className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 space-y-6 rounded-[2px]"
      noValidate
    >
      <div className="border-b border-[rgba(213,255,64,0.12)] pb-4 mb-2">
        <h2 className="font-display text-2xl font-bold uppercase text-white">
          Tell Us What You Want to Grow.
        </h2>
        <p className="text-xs text-[#B0B0B0] mt-1">
          Share your goals below. Every inquiry is personally reviewed with honest recommendations.
        </p>
      </div>

      {/* Bot Honeypot */}
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
        <div className="p-4 border border-red-500/40 bg-red-950/20 text-xs sm:text-sm text-red-300 flex items-start gap-2.5 rounded-[2px]">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
          <div>
            <p className="font-bold">Transmission notice</p>
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

      {/* Phone/WhatsApp & Business Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phoneOrWhatsApp"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Phone or WhatsApp <span className="text-[#D5FF40]">*</span>
          </label>
          <input
            id="phoneOrWhatsApp"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className={getInputClass(!!errors.phoneOrWhatsApp)}
            {...register("phoneOrWhatsApp")}
          />
          {errors.phoneOrWhatsApp && (
            <p className="mt-1.5 text-xs text-red-400 font-mono">
              {errors.phoneOrWhatsApp.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessOrOrg"
            className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
          >
            Business or Organization <span className="text-[#B0B0B0] font-normal">(Optional)</span>
          </label>
          <input
            id="businessOrOrg"
            type="text"
            placeholder="Company or Project Name"
            className={getInputClass(!!errors.businessOrOrg)}
            {...register("businessOrOrg")}
          />
        </div>
      </div>

      {/* What are you looking to achieve? */}
      <div>
        <label
          htmlFor="goal"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          What are you looking to achieve? <span className="text-[#D5FF40]">*</span>
        </label>
        <select
          id="goal"
          className={getInputClass(!!errors.goal)}
          defaultValue=""
          {...register("goal")}
        >
          <option value="" disabled className="text-[#B0B0B0]">
            Select your primary objective...
          </option>
          {GOAL_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#101010] text-white">
              {opt}
            </option>
          ))}
        </select>
        {errors.goal && (
          <p className="mt-1.5 text-xs text-red-400 font-mono">
            {errors.goal.message}
          </p>
        )}
      </div>

      {/* Brief description of requirements */}
      <div>
        <label
          htmlFor="description"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          Brief description of your requirements <span className="text-[#D5FF40]">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Tell us about what you want to build, current challenges, or your desired timeline..."
          className={getInputClass(!!errors.description)}
          {...register("description")}
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-red-400 font-mono">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Budget Range (Optional) */}
      <div>
        <label
          htmlFor="budget"
          className="block font-mono text-xs uppercase tracking-wider text-white font-bold"
        >
          Budget Range <span className="text-[#B0B0B0] font-normal">(Optional)</span>
        </label>
        <select
          id="budget"
          className={getInputClass(!!errors.budget)}
          defaultValue=""
          {...register("budget")}
        >
          <option value="" className="text-[#B0B0B0]">
            Select an estimated budget range (optional)...
          </option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#101010] text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded-[2px] border-[rgba(213,255,64,0.3)] bg-[#101010] text-[#D5FF40] accent-[#D5FF40] focus:ring-0"
            {...register("privacyConsent")}
          />
          <span className="text-xs text-[#B0B0B0] leading-relaxed">
            I agree to the processing of my contact details for project consultation in accordance with DizitalGrow&apos;s{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-[#D5FF40] underline hover:text-white"
            >
              Privacy Policy
            </Link>
            . We never share your data.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-1.5 text-xs text-red-400 font-mono">
            {errors.privacyConsent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#D5FF40] text-[#050505] py-3.5 px-6 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-cyber cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#B0B0B0]">
        <ShieldCheck className="h-3.5 w-3.5 text-[#D5FF40]" />
        <span>Spam-protected &amp; encrypted. Response within 1 business day.</span>
      </div>
    </form>
  );
}
