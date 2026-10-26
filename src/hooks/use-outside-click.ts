"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Hook to trigger a callback when clicking or touching outside of a referenced element.
 *
 * @param ref Ref to the element to watch
 * @param handler Callback to execute when clicking outside
 * @param enabled Whether the outside click detection is active (default: true)
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target || !ref.current || ref.current.contains(target)) {
        return;
      }
      savedHandler.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, enabled]);
}
