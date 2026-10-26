"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant?: "button" | "segmented";
  className?: string;
}

export function ThemeToggle({
  variant = "button",
  className,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Fallback placeholder while mounting to avoid layout shift
  if (!mounted) {
    if (variant === "segmented") {
      return (
        <div
          className={cn(
            "flex items-center rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#101010] p-1 gap-1",
            className
          )}
        >
          <div className="h-7 w-16 bg-white/5 rounded-[2px] animate-pulse" />
          <div className="h-7 w-16 bg-white/5 rounded-[2px] animate-pulse" />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "h-9 w-9 rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-transparent",
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Segmented 2-State Pill Control (used in mobile menu drawer)
  if (variant === "segmented") {
    return (
      <div
        role="group"
        aria-label="Theme mode selection"
        className={cn(
          "flex items-center rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010] p-1 gap-1",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all",
            isDark
              ? "bg-[#D5FF40] text-[#050505] font-extrabold"
              : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
          )}
        >
          <Moon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all",
            !isDark
              ? "bg-[#D5FF40] text-[#050505] font-extrabold"
              : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
          )}
        >
          <Sun className="h-3.5 w-3.5" />
          <span>Light</span>
        </button>
      </div>
    );
  }

  // Direct 1-Click Navbar Toggle Button (switches between Dark & Light immediately)
  return (
    <button
      type="button"
      id="theme-toggle-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-[2px] border transition-all cursor-pointer",
        "border-[rgba(213,255,64,0.2)] bg-[#101010]/80 text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[rgba(213,255,64,0.45)] hover:bg-[#181818] active:scale-95 focus-cyber",
        className
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[#D5FF40] transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#4D7C0F] transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
