"use client";

import { useState, useCallback } from "react";

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
  setValue: (value: boolean | ((prev: boolean) => boolean)) => void;
}

/**
 * Custom hook for managing a boolean state with explicit and safe transitions.
 *
 * @param initialValue Initial boolean value (default: false)
 * @returns Object containing `value`, `toggle`, `setOn`, `setOff`, and `setValue`
 */
export function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setOn = useCallback(() => {
    setValue(true);
  }, []);

  const setOff = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    toggle,
    setOn,
    setOff,
    setValue,
  };
}
