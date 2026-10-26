import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-8 sm:p-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
          {"// 404 — PAGE NOT FOUND"}
        </span>
        <h1 className="mt-4 text-6xl sm:text-7xl font-extrabold font-display text-white tracking-tight">
          4<span className="text-[#D5FF40]">0</span>4
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl font-bold font-display uppercase text-white">
          Page Not Found
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] font-normal leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved. Return to the homepage to explore digital growth guides and services.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-2.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
