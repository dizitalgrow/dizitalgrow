import React from "react";
import { CheckCircle, Lightbulb } from "lucide-react";
import type { StepByStepGuideBlock } from "@/lib/sanity";

interface StepGuideProps {
  value: StepByStepGuideBlock;
}

export function StepByStepGuide({ value }: StepGuideProps) {
  if (!value || !value.steps || value.steps.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {value.sectionTitle && (
        <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-[#D5FF40]" />
          <span>{value.sectionTitle}</span>
        </h3>
      )}

      <div className="space-y-4">
        {value.steps.map((step, idx) => {
          const stepNum = step.stepNumber ?? idx + 1;
          return (
            <div
              key={step._key || idx}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-5 sm:p-6 rounded-[2px] flex items-start gap-4"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-[2px] bg-[#141414] border border-[#D5FF40] text-[#D5FF40] font-mono text-sm font-extrabold shrink-0">
                {String(stepNum).padStart(2, "0")}
              </div>

              <div className="space-y-2 flex-1">
                <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
                  {step.description}
                </p>

                {step.proTip && (
                  <div className="mt-3 flex items-start gap-2 bg-[#101010] p-3 rounded-[2px] border border-[rgba(213,255,64,0.15)] text-xs text-[#D5FF40]">
                    <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)]">
                      <strong className="text-[#D5FF40] font-mono uppercase tracking-wider text-[11px] block">
                        PRO TIP:
                      </strong>
                      {step.proTip}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
