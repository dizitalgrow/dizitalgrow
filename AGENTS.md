<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DizitalGrow — Design System & Engineering Rules

You are working on the **DizitalGrow** web application. Follow these mandatory engineering and design principles across all pages and components.

## 1. Brand Identity & Design System Preservation
- **Never replace the brand identity or invent generic themes.**
- **Color Palette**:
  - Primary Accent: Cyber Neon Lime (`#D5FF40`, hover `#c2ea36`, light mode `#65A30D` / `#4D7C0F`).
  - Dark Mode Backgrounds: `#050505` (base), `#101010` (surface), `#0A0A0A` (cards), `#181818` (elevated).
  - Light Mode Backgrounds: `#FAFAFA` (base), `#FFFFFF` (surface/cards), `#F1F3F5` (elevated).
  - Borders: `rgba(213, 255, 64, 0.12)` to `rgba(213, 255, 64, 0.25)` in dark, subtle gray in light.
- **Typography**:
  - Headings: `Space Grotesk` (`var(--font-display)`), uppercase, tight tracking (`tracking-tight` or `-0.02em`).
  - Body: `Inter` (`var(--font-body)`), line-height 1.6 - 1.7.
  - Data / Eyebrows: `ui-monospace` (`font-mono`), uppercase, tracking `0.15em`, prefix syntax `//`.
- **Corner Radii**: Sharp engineered `rounded-[2px]` and `rounded-[4px]`, with circular pill buttons where specified.

## 2. Strict Minimal Design & Zero-Shadow Standards
- **Default visual treatment: NO box shadows.** Do not add glowing box shadows, neon drop shadows, or decorative blur orbs to buttons, cards, or status dots.
- Only functional shadows (e.g. dropdown menus or mobile overlays for elevation) are permitted via `.shadow-dropdown` or `shadow-lg`.
- Use clean backgrounds, typography, whitespace, alignment, and subtle borders (`rgba(213,255,64,0.15)` in dark, `rgba(0,0,0,0.08)` in light) to establish visual hierarchy.
- No glowing borders or artificial 3D styling. No ambient blur orbs (`blur-[100px]`).

## 3. Minimal Content & UX Writing Rules
- **One clear message per section.**
- Short, meaningful headings. Supporting descriptions limited to 1–2 concise, high-value sentences.
- Avoid long introductory paragraphs, generic marketing filler, and duplicated claims.
- Keep calls to action direct and action-oriented (`"Discuss Your Project"`).

## 4. Light and Dark Mode Requirements
- Every page and component must maintain readable contrast and clean presentation in both themes.
- Light mode: crisp `#FAFAFA` base, `#FFFFFF` cards, `#0A0F1D` high-contrast text, `#65A30D` / `#4D7C0F` accents, zero box shadows.
- Dark mode: `#050505` base, `#101010` / `#0A0A0A` cards, `#FFFFFF` primary text, `#D5FF40` accents, zero glowing shadows.
- Theme switching must work from all routes with zero hydration mismatch or flash.

## 5. Motion & Animation Standards
- Animations must be subtle, short, and purposeful.
- Entrance reveals: small upward translation (`12px` to `14px`) with duration `<= 0.45s` using `[0.16, 1, 0.3, 1] as const`.
- Always respect reduced motion (`prefers-reduced-motion: reduce`).

## 6. Responsive Testing & Quality Targets
- Validate all screens at 375px, 390px, 768px, 1280px, and 1440px with zero horizontal overflow.
- Ensure all interactive elements have visible `.focus-cyber` focus rings.
- Touch-friendly tap targets (minimum 44x44px).
- Always run `npm run lint` and `npm run build` to verify clean builds before completing tasks.

## 7. Custom Hooks & State Management Standards
- **Check existing hooks in `@/hooks` before creating new ones.**
  - `useModal(initialOpen)`: For modal, dialog, and full-screen overlay state (`isOpen`, `open`, `close`, `toggle`).
  - `useToggle(initialValue)`: For boolean switches requiring explicit `setOn`, `setOff`, and `toggle`.
  - `useDisclosure(defaultIsOpen)`: For collapsible drawers, expandable menus, and popovers.
  - `useAccordion(initialIndex)`: For single-item accordion expansion and toggle logic.
  - `useEventListener(event, handler, element?, options?)`: For SSR-guarded, ref-stabilized window/document/element event listeners.
  - `useOutsideClick(ref, handler, enabled?)`: For outside-click dismissals on menus and popovers.
  - `useScrollLock(isLocked)`: For locking `document.body` scroll when overlays/drawers are open, with automatic restoration on close/unmount.
  - `useScrolled(threshold)`: For passive, SSR-safe detection of page scroll beyond a given pixel threshold.
  - `useDebounce(value, delay)`: For debouncing search queries and high-frequency user inputs.

## 8. Boolean State Management Rules
- Use simple `useState(false)` for strictly local, isolated boolean flags.
- Use `useModal` or `useDisclosure` when open/close/toggle semantics are repeated.
- Derive state wherever possible instead of syncing redundant boolean variables.
- Use descriptive boolean names prefixed with `is`, `has`, or `can` (`isOpen`, `isLoading`, `hasError`).
- Keep UI interaction state local to the component that owns the interaction. Never use global stores for local modals or dropdowns unless genuine cross-route coordination is required.

## 9. React Hooks & Lifecycle Rules
- Adhere strictly to the Rules of Hooks (never call hooks inside conditions, loops, or nested functions).
- Dependency arrays in `useEffect`, `useMemo`, and `useCallback` must always be complete and accurate.
- Always return cleanups from effects that subscribe to external events, intervals, or DOM mutations.
- Do not memoize trivially cheap values or inline functions prematurely. Use `useMemo` and `useCallback` only when referential stability is required by child components or hook dependencies.
- Never manipulate the DOM directly inside components; use dedicated hooks (`useScrollLock`, `useEventListener`) that guarantee cleanup on unmount.

## 10. Code Organization & Architecture Rules
- Follow Next.js App Router conventions:
  - `src/app/`: Route handlers, layouts, error boundaries, metadata, and page entrypoints.
  - `src/components/ui/`: Presentation primitives, buttons, cards, motion wrappers.
  - `src/components/layout/`: Global layout components (`Header.tsx`, `Footer.tsx`).
  - `src/features/<feature>/`: Feature-specific slices (`contact`, `home`) containing isolated components, actions, schemas, and types.
  - `src/hooks/`: Shared, reusable React hooks.
  - `src/constants/`: Configuration constants, navigation items, site copy.
  - `src/lib/`: External SDK clients (Sanity, EmailJS, Query Client) and pure utility helpers.
- Keep pure utilities in `src/lib/utils.ts` independent of React.
- Avoid circular dependencies and unnecessary barrel abstractions.

## 11. Verification & Testing Commands
- Prior to completing any coding task:
  1. `npm run lint` — Must exit with code 0 and zero ESLint errors/warnings.
  2. `npm run build` — Must compile static routes and TypeScript cleanly with exit code 0.
