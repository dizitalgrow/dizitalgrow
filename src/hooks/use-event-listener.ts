"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Type-safe, SSR-guarded event listener hook.
 * Uses a ref for the handler to avoid re-attaching listeners on every render.
 *
 * @param eventName Name of the event to listen for
 * @param handler Callback function to execute
 * @param element Optional target element (defaults to window)
 * @param options Event listener options (passive, capture, once)
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document | null>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T | null>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element?: RefObject<EventTarget | null>,
  options?: boolean | AddEventListenerOptions
): void {
  // Store the latest handler in a ref to avoid re-binding on callback identity change
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target: element ref or window if available
    const targetElement: EventTarget | null = element?.current ?? (typeof window !== "undefined" ? window : null);

    if (!targetElement || !targetElement.addEventListener) {
      return;
    }

    const eventListener: EventListener = (event) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}
