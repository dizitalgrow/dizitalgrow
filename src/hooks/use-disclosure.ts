"use client";

import { useState, useCallback } from "react";

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

/**
 * Common disclosure hook for expandable panels, drawers, collapsible menus, and popovers.
 *
 * @param defaultIsOpen Initial open state (default: false)
 * @returns Object with `isOpen`, `onOpen`, `onClose`, `onToggle`, and `setIsOpen`
 */
export function useDisclosure(defaultIsOpen = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setIsOpen,
  };
}
