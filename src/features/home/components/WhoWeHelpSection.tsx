import React from "react";
import { WHO_WE_HELP } from "@/constants/site-data";

export function WhoWeHelpSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// WHO WE HELP"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            Designed for businesses <br className="hidden sm:inline" />
            <span className="text-[#D5FF40]">ready to grow.</span>
          </h2>
          <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
            We focus on honest, practical solutions for people and teams who want to build a dependable online presence without agency fluff.
          </p>
        </div>

        {/* Audience List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_WE_HELP.map((item) => (
            <div
              key={item.title}
              className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold block mb-2">
                  {item.tag}
                </span>

                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] text-[11px] font-mono text-[#B0B0B0]">
                <span>Practical Guidance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
