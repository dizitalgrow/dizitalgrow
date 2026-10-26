"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a changing value by a given delay in milliseconds.
 *
 * @param value The value to debounce
 * @param delay Delay in milliseconds (default: 250ms)
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
