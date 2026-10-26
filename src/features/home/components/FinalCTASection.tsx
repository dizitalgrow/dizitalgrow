import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { VERIFIED_EMAIL } from "@/constants/navigation";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#080808]">
      <div className="container-cyber">
        <div className="border border-[rgba(213,255,64,0.18)] bg-[#050505] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// READY TO TAKE THE NEXT STEP?"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Let&apos;s find your next <br />
              <span className="text-[#D5FF40]">digital growth opportunity.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
              Tell us about your business, where you are today, and what you want to achieve. We&apos;ll use that information to understand your needs and discuss practical next steps.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
              >
                <span>Get Growth Advice</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href={`mailto:${VERIFIED_EMAIL}`}
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact Dizital Grow</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[rgba(213,255,64,0.1)] text-xs font-mono text-[#B0B0B0]">
              <span>Direct communication. Zero pressure or aggressive sales tactics.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
