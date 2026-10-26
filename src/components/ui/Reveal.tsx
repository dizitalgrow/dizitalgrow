"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 14, x: 0 };
      case "down":
        return { y: -14, x: 0 };
      case "left":
        return { x: 14, y: 0 };
      case "right":
        return { x: -14, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
