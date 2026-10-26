"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant?: "dropdown" | "segmented";
  className?: string;
}

export function ThemeToggle({
  variant = "dropdown",
  className,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Placeholder while mounting to avoid layout shift
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

  // Segmented Pill Control (ideal for mobile menu drawer)
  if (variant === "segmented") {
    return (
      <div
        role="group"
        aria-label="Theme selection"
        className={cn(
          "flex items-center rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010] p-1 gap-1",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all",
            theme === "light"
              ? "bg-[#D5FF40] text-[#050505] shadow-[0_0_10px_rgba(213,255,64,0.35)]"
              : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
          )}
        >
          <Sun className="h-3.5 w-3.5" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all",
            theme === "dark"
              ? "bg-[#D5FF40] text-[#050505] shadow-[0_0_10px_rgba(213,255,64,0.35)]"
              : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
          )}
        >
          <Moon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all",
            theme === "system"
              ? "bg-[#D5FF40] text-[#050505] shadow-[0_0_10px_rgba(213,255,64,0.35)]"
              : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
          )}
        >
          <Monitor className="h-3.5 w-3.5" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  // Desktop Navbar Dropdown Toggle
  const currentIcon = () => {
    if (theme === "system") {
      return (
        <span className="relative flex items-center justify-center">
          <Monitor className="h-4 w-4" />
          <span
            className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#D5FF40] shadow-[0_0_6px_#D5FF40]"
            title={`System (currently ${resolvedTheme})`}
          />
        </span>
      );
    }
    if (resolvedTheme === "dark") {
      return <Moon className="h-4 w-4" />;
    }
    return <Sun className="h-4 w-4 text-amber-500 dark:text-[#D5FF40]" />;
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        id="theme-toggle-btn"
        aria-label={`Toggle theme (current: ${theme})`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-[2px] border transition-all cursor-pointer",
          open
            ? "border-[#D5FF40] bg-[#181818] text-[#D5FF40] shadow-[0_0_12px_rgba(213,255,64,0.25)]"
            : "border-[rgba(213,255,64,0.2)] bg-[#101010]/80 text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[rgba(213,255,64,0.45)] hover:bg-[#181818]"
        )}
      >
        {currentIcon()}
      </button>

      {/* Cyber Dropdown Menu */}
      {open && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="theme-toggle-btn"
          className="absolute right-0 top-full mt-2 w-44 rounded-[2px] border border-[rgba(213,255,64,0.25)] bg-[#101010]/98 backdrop-blur-xl p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(213,255,64,0.1)] z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-[#B0B0B0] border-b border-[rgba(213,255,64,0.1)] mb-1 flex items-center justify-between">
            <span>Theme Mode</span>
            {theme === "system" && (
              <span className="text-[9px] text-[#D5FF40]">AUTO</span>
            )}
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center justify-between px-2.5 py-2 text-xs font-mono font-medium rounded-[2px] transition-colors",
              theme === "light"
                ? "bg-[#D5FF40]/15 text-[#D5FF40] font-bold"
                : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
            )}
          >
            <div className="flex items-center gap-2">
              <Sun className="h-3.5 w-3.5 text-amber-400" />
              <span>Light Mode</span>
            </div>
            {theme === "light" && <Check className="h-3.5 w-3.5 text-[#D5FF40]" />}
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center justify-between px-2.5 py-2 text-xs font-mono font-medium rounded-[2px] transition-colors",
              theme === "dark"
                ? "bg-[#D5FF40]/15 text-[#D5FF40] font-bold"
                : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
            )}
          >
            <div className="flex items-center gap-2">
              <Moon className="h-3.5 w-3.5 text-blue-400" />
              <span>Dark Mode</span>
            </div>
            {theme === "dark" && <Check className="h-3.5 w-3.5 text-[#D5FF40]" />}
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center justify-between px-2.5 py-2 text-xs font-mono font-medium rounded-[2px] transition-colors",
              theme === "system"
                ? "bg-[#D5FF40]/15 text-[#D5FF40] font-bold"
                : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
            )}
          >
            <div className="flex items-center gap-2">
              <Monitor className="h-3.5 w-3.5 text-emerald-400" />
              <span>System (Default)</span>
            </div>
            {theme === "system" && <Check className="h-3.5 w-3.5 text-[#D5FF40]" />}
          </button>
        </div>
      )}
    </div>
  );
}
