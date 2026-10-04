"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error("[Root Error Boundary]:", error);
  }, [error]);

  return (
    <div className="container-cyber flex min-h-[70vh] flex-col items-center justify-center text-center py-24 bg-[#050505]">
      <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
        [ SYSTEM EXCEPTION ]
      </p>
      <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display uppercase">
        ANOMALY ENCOUNTERED
      </h1>
      <p className="mt-4 max-w-md text-sm text-[#B0B0B0] leading-relaxed font-normal">
        Execution interrupted by an unexpected error state. Attempt reload or return to primary interface.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="btn-cyber-primary text-xs uppercase tracking-wider cursor-pointer"
        >
          RETRY EXECUTION
        </button>
        <Button to="/" variant="outline">
          RETURN ROOT
        </Button>
      </div>
    </div>
  );
}
