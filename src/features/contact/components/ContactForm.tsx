"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { contactSchema, type ContactFormData } from "../schemas";
import { submitContactEnquiry } from "../actions";

const LOOKING_FOR_OPTIONS = [
  "Website Development",
  "Web Applications",
  "Mobile Apps",
  "Meta Ads",
  "Google Ads",
  "Conversion Tracking",
  "Other / Multiple Services",
];

const BUDGET_OPTIONS = [
  "< $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Flexible / Need Consultation",
];

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
      phone: "",
      company: "",
      service: "",
      budget: "",
      details: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await submitContactEnquiry(data);
      if (response.success) {
        setSubmitted(true);
      } else {
        setServerError(response.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("An unexpected error occurred. Please try again.");
    }
  };

  const getInputClass = (hasError: boolean) =>
    `mt-2 w-full rounded-[2px] border px-4 py-3.5 text-sm text-white outline-none transition-all font-mono ${
      hasError
        ? "border-red-500 bg-red-950/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-[rgba(213,255,64,0.2)] bg-[#101010] focus:border-[#D5FF40] focus:ring-1 focus:ring-[#D5FF40]"
    }`;

  if (submitted) {
    return (
      <div className="rounded-[4px] border border-[rgba(213,255,64,0.3)] bg-[#101010] p-10">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-[2px] bg-[#D5FF40] text-[#050505] shadow-[0_0_20px_rgba(213,255,64,0.3)]">
            <Check className="h-7 w-7 stroke-[3]" />
          </span>
          <h2 className="font-display mt-6 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            TRANSMISSION RECEIVED // SUCCESS
          </h2>
          <p className="mt-3 max-w-sm text-sm text-[#B0B0B0] leading-relaxed font-normal">
            Our lead growth architects have received your transmission and will review specifications within 24 business hours.
          </p>
          <button
            type="button"
            onClick={() => {
              reset();
              setSubmitted(false);
            }}
            className="mt-6 btn-cyber-secondary"
          >
            SUBMIT ANOTHER BRIEF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[4px] border border-[rgba(213,255,64,0.2)] bg-[#101010] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      <div className="border-b border-[rgba(213,255,64,0.15)] pb-6 mb-8">
        <span className="font-mono text-xs text-[#D5FF40] font-bold uppercase tracking-widest block">
          // INITIATE TRANSMISSION
        </span>
        <h3 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-white uppercase">
          PROJECT SPECIFICATIONS FORM
        </h3>
      </div>

      <form
        noValidate
        className="grid gap-6 sm:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {serverError && (
          <div className="sm:col-span-2 rounded-[2px] bg-red-950/40 border border-red-500/50 p-4 text-xs font-mono text-red-400">
            {serverError}
          </div>
        )}

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Name <span className="text-[#D5FF40]">*</span>
          </label>
          <input
            id="name"
            {...register("name")}
            className={getInputClass(!!errors.name)}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Email <span className="text-[#D5FF40]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={getInputClass(!!errors.email)}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Company
          </label>
          <input
            id="company"
            {...register("company")}
            className={getInputClass(!!errors.company)}
            placeholder="Company name / domain"
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.company.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            className={getInputClass(!!errors.phone)}
            placeholder="+91 00000 00000"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.phone.message}</p>
          )}
        </div>

        {/* What are you looking for? */}
        <div>
          <label
            htmlFor="service"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Engineered Solution <span className="text-[#D5FF40]">*</span>
          </label>
          <select
            id="service"
            {...register("service")}
            className={getInputClass(!!errors.service)}
            aria-invalid={!!errors.service}
            defaultValue=""
          >
            <option value="" disabled className="bg-[#101010] text-[#B0B0B0]">
              Select growth engine
            </option>
            {LOOKING_FOR_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#101010] text-white">
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.service.message}</p>
          )}
        </div>

        {/* Budget range */}
        <div>
          <label
            htmlFor="budget"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Budget Allocation
          </label>
          <select
            id="budget"
            {...register("budget")}
            className={getInputClass(false)}
            defaultValue=""
          >
            <option value="" disabled className="bg-[#101010] text-[#B0B0B0]">
              Select budget range
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="bg-[#101010] text-white">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Brief description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="details"
            className="text-xs font-mono uppercase tracking-wider text-white font-bold"
          >
            Project Details <span className="text-[#D5FF40]">*</span>
          </label>
          <textarea
            id="details"
            rows={5}
            {...register("details")}
            className={getInputClass(!!errors.details)}
            placeholder="Tell us about your business and what you'd like to build..."
            aria-invalid={!!errors.details}
          />
          {errors.details && (
            <p className="mt-1 text-xs text-red-400 font-mono">{errors.details.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-cyber-primary w-full sm:w-auto text-xs font-bold py-3 px-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-[#050505]" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
