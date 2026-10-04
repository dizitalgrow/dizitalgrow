import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[#050505] px-4 py-24">
      <div className="max-w-lg text-center cyber-card p-10 sm:p-14 border border-[rgba(213,255,64,0.2)] bg-[#101010]">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
          [ 404 — ROUTE NULL ]
        </span>
        <h1 className="mt-4 text-7xl sm:text-8xl font-extrabold font-display text-white tracking-tight">
          4<span className="text-[#D5FF40]">0</span>4
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-bold font-display uppercase text-white">
          COORDINATES UNRESOLVED
        </h2>
        <p className="mt-3 text-sm text-[#B0B0B0] font-normal leading-relaxed">
          The requested endpoint does not exist on this cluster or has been migrated to an alternate sector.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            RETURN TO BASE
          </Button>
        </div>
      </div>
    </div>
  );
}
