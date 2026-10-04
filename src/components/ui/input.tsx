import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border border-[rgba(213,255,64,0.2)] bg-[#101010] px-4 py-2 font-mono text-sm text-[#FFFFFF] placeholder:text-[#666666] focus-visible:outline-none focus-visible:border-[#D5FF40] focus-visible:ring-1 focus-visible:ring-[#D5FF40] disabled:cursor-not-allowed disabled:opacity-40 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

