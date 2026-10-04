import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D5FF40]/30" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-[#D5FF40]" />
        </div>
        <p className="font-mono text-xs tracking-widest text-[#B0B0B0] uppercase font-bold">
          [ SYSTEM INITIALIZING... ]
        </p>
      </div>
    </div>
  );
}
