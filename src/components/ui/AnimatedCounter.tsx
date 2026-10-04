"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  to,
  suffix = "",
  duration = 1000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(to * eased));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
