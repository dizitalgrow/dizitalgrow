import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[2px] border px-3 py-1 text-xs font-mono font-bold transition-colors focus:outline-none focus:ring-1 focus:ring-[#D5FF40] tracking-wider uppercase",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(213,255,64,0.3)] bg-[rgba(213,255,64,0.1)] text-[#D5FF40]",
        lime:
          "border-[rgba(213,255,64,0.3)] bg-[rgba(213,255,64,0.1)] text-[#D5FF40]",
        solidLime:
          "border-transparent bg-[#D5FF40] text-[#050505]",
        dark:
          "border-[rgba(213,255,64,0.15)] bg-[#101010] text-white",
        secondary:
          "border-transparent bg-[#181818] text-[#B0B0B0]",
        destructive:
          "border-transparent bg-red-950 text-red-400 border-red-800",
        outline:
          "border-[rgba(213,255,64,0.2)] text-white bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
