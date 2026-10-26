"use client";

import { useState, useCallback } from "react";

export interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

/**
 * Standardized hook for modal, dialog, and overlay visibility.
 * Keeps modal visibility state local and provides stable action callbacks.
 *
 * @param initialOpen Initial modal open state (default: false)
 * @returns Object with `isOpen`, `open`, `close`, `toggle`, and `setOpen`
 */
export function useModal(initialOpen = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
    setOpen: setIsOpen,
  };
}
