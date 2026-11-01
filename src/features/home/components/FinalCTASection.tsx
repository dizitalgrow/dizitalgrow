"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, ShieldCheck } from "lucide-react";
import { VERIFIED_WHATSAPP_PHONE } from "@/constants/navigation";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion";

export function FinalCTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050505] border-t border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        <Reveal>
          <div className="relative border border-[rgba(213,255,64,0.22)] bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 rounded-[2px] overflow-hidden cyber-grid-bg">
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  NEXT STEP
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Your Digital Growth Journey <br />
                <span className="text-[#D5FF40]">Starts With One Step.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
                Whether you are starting from scratch or looking to grow an existing business, let&apos;s explore how digital can create new opportunities for you.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
                >
                  <span>Let&apos;s Talk About Your Goals</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={formatWhatsAppUrl(
                    VERIFIED_WHATSAPP_PHONE,
                    "Hi DizitalGrow, I would like to talk about our digital goals."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:border-[#D5FF40] hover:text-[#D5FF40] active:translate-y-[1px] focus-cyber"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.1)] flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>Practical advice</span>
                </span>
                <span>·</span>
                <span>Clear fixed scope</span>
                <span>·</span>
                <span>Response within 1 business day</span>
              </div>
            </div>

            {/* Geometric High-Tech Accent Visual in Corner */}
            <div className="hidden lg:block absolute right-10 bottom-8 opacity-20 pointer-events-none">
              <div className="font-mono text-[90px] font-black text-[#D5FF40] leading-none select-none tracking-tighter">
                GROW
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
