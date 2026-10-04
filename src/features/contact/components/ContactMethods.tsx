"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_METHODS } from "@/constants/site-data";

export function ContactMethods() {
  return (
    <Reveal delay={0.06}>
      <div className="rounded-[4px] border border-[rgba(213,255,64,0.15)] bg-[#101010] p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
          // DIRECT CHANNELS
        </span>
        <h3 className="font-display mt-2 text-xl sm:text-2xl font-bold text-white uppercase">
          CONTACT DETAILS
        </h3>
        <p className="mt-2 text-sm text-[#B0B0B0] font-normal">
          Feel free to email us directly or connect on our social channels.
        </p>

        <ul className="mt-6 border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.1)]">
          {CONTACT_METHODS.map((method) => {
            const normalized = method.iconName?.toLowerCase() || "";
            const Icon =
              normalized.includes("instagram")
                ? InstagramIcon
                : normalized.includes("facebook")
                ? FacebookIcon
                : Mail;

            return (
              <li key={method.label}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between py-4 text-sm transition-colors hover:text-[#D5FF40]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-[#181818] border border-[rgba(213,255,64,0.2)] text-white transition-colors group-hover:bg-[#D5FF40] group-hover:text-[#050505] group-hover:border-[#D5FF40]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-display font-bold text-white text-sm group-hover:text-[#D5FF40] transition-colors uppercase">
                        {method.label}
                      </span>
                      <span className="block text-[#B0B0B0] text-xs font-mono">
                        {method.value}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#B0B0B0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D5FF40]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}
