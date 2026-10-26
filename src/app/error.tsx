"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error("[Root Error Boundary]:", error);
  }, [error]);

  return (
    <div className="container-cyber flex min-h-[70vh] flex-col items-center justify-center text-center py-20">
      <div className="max-w-md border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-12 rounded-[2px]">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
          {"// UNEXPECTED ERROR"}
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display uppercase">
          Something went wrong
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
          An error occurred while loading this content. You can try refreshing the page or returning to the homepage.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-2.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] text-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors hover:border-[#D5FF40] hover:text-[#D5FF40] hover:bg-[#D5FF40]/5 active:translate-y-[1px] focus-cyber"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
