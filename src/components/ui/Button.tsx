"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer font-display rounded-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#D5FF40] text-[#050505] hover:bg-[#c2ea36] shadow-[0_0_20px_rgba(213,255,64,0.25)] hover:shadow-[0_0_30px_rgba(213,255,64,0.45)] hover:-translate-y-0.5 active:translate-y-0",
        primary:
          "bg-[#D5FF40] text-[#050505] hover:bg-[#c2ea36] shadow-[0_0_20px_rgba(213,255,64,0.25)] hover:shadow-[0_0_30px_rgba(213,255,64,0.45)] hover:-translate-y-0.5 active:translate-y-0",
        lime:
          "bg-[#D5FF40] text-[#050505] hover:bg-[#c2ea36] shadow-[0_0_20px_rgba(213,255,64,0.25)] hover:shadow-[0_0_30px_rgba(213,255,64,0.45)] hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "border border-[rgba(213,255,64,0.3)] bg-transparent text-white hover:bg-[#181818] hover:border-[#D5FF40] hover:text-[#D5FF40] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-[rgba(213,255,64,0.3)] bg-transparent text-white hover:bg-[#181818] hover:border-[#D5FF40] hover:text-[#D5FF40] hover:-translate-y-0.5 active:translate-y-0",
        dark:
          "bg-[#101010] text-white hover:bg-[#181818] border border-[rgba(213,255,64,0.15)] hover:border-[#D5FF40]",
        ghost:
          "text-[#B0B0B0] hover:text-white hover:bg-[#181818]",
        link:
          "text-[#D5FF40] underline-offset-4 hover:underline",
        cyberPill:
          "bg-[#D5FF40] text-[#050505] hover:bg-[#c2ea36] px-8 py-4 text-xs font-extrabold uppercase tracking-widest shadow-[0_0_25px_rgba(213,255,64,0.3)] hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-11 px-7 py-3 text-xs",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-sm",
        pill: "h-12 px-8 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to?: string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, to, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (to) {
      return (
        <Link href={to} className={classes}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={classes} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
