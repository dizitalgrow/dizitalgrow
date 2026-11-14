import React from "react";
import {
  Info,
  Lightbulb,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
} from "lucide-react";
import type { CalloutBlock } from "@/lib/sanity";

interface CalloutBoxProps {
  value: CalloutBlock;
}

const CALLOUT_STYLES = {
  note: {
    icon: Info,
    borderColor: "border-sky-500/40",
    bgColor: "bg-sky-950/20",
    textColor: "text-sky-300",
    label: "NOTE",
  },
  tip: {
    icon: Lightbulb,
    borderColor: "border-[#D5FF40]/40",
    bgColor: "bg-[#101010]",
    textColor: "text-[#D5FF40]",
    label: "PRO TIP",
  },
  important: {
    icon: AlertTriangle,
    borderColor: "border-amber-500/40",
    bgColor: "bg-amber-950/20",
    textColor: "text-amber-400",
    label: "IMPORTANT",
  },
  warning: {
    icon: AlertOctagon,
    borderColor: "border-orange-500/40",
    bgColor: "bg-orange-950/20",
    textColor: "text-orange-400",
    label: "WARNING",
  },
  caution: {
    icon: ShieldAlert,
    borderColor: "border-rose-500/40",
    bgColor: "bg-rose-950/20",
    textColor: "text-rose-400",
    label: "CAUTION",
  },
};

export function CalloutBox({ value }: CalloutBoxProps) {
  if (!value || !value.content) {
    return null;
  }

  const style = CALLOUT_STYLES[value.type] || CALLOUT_STYLES.tip;
  const IconComponent = style.icon;

  return (
    <aside
      className={`my-7 border-l-4 ${style.borderColor} border-t border-r border-b ${style.borderColor} ${style.bgColor} p-5 sm:p-6 rounded-[2px] space-y-2`}
      role="note"
    >
      <div className="flex items-center gap-2">
        <IconComponent className={`h-4 w-4 ${style.textColor} shrink-0`} />
        <span
          className={`font-mono text-xs font-bold uppercase tracking-wider ${style.textColor}`}
        >
          {value.title || style.label}
        </span>
      </div>

      <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal pl-6">
        {value.content}
      </div>
    </aside>
  );
}
