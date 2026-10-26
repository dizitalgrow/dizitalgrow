"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";

/**
 * Custom hook to safely determine if animations should be simplified
 */
export function useAnimationSafe() {
  const shouldReduceMotion = useReducedMotion();
  return {
    shouldReduceMotion,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  };
}

export interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

/**
 * Standard Viewport Scroll Reveal Component
 * Applies subtle, premium entrance motion when entering viewport
 */
export function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 14,
  className = "",
  once = true,
  ...props
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  delayChildren?: number;
}

/**
 * Container that orchestrates staggered child animations
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  className = "",
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

/**
 * Child element designed to be placed inside <StaggerContainer />
 */
export function StaggerItem({
  children,
  className = "",
  yOffset = 12,
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}
