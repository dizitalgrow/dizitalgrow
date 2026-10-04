"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface InlinePillProps {
  href: string;
  label: string;
}

export function InlinePill({ href, label }: InlinePillProps) {
  return (
    <motion.span
      className="inline-flex align-middle mx-2 my-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 rounded-sm border border-[rgba(213,255,64,0.2)] bg-[#101010] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-[#FFFFFF] uppercase transition-all hover:border-[#D5FF40] hover:text-[#D5FF40]"
      >
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-sm bg-[#D5FF40] text-[#050505] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
        </span>
        <span className="font-display font-bold text-white group-hover:text-[#D5FF40] transition-colors">
          {label}
        </span>
      </Link>
    </motion.span>
  );
}
