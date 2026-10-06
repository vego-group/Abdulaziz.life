<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project rules

## External services

- Never send requests to production APIs or create real data without asking first. This includes the contact form endpoint (`https://api.vego.sa/api/consultation-requests`): every successful request creates a real record for the VEGO team. Test with mocked responses instead (a local mock server set through `NEXT_PUBLIC_API_URL`, or intercepting the request in the browser); see API-INTEGRATION.md.

## Codebase conventions

- Design tokens (colors, type scale, spacing, radius) are defined in `src/styles/globals.css` (`@theme`, Tailwind v4). Use them instead of hard-coded values.
- Themes: the dark values come from Figma; light values (not in Figma, derived) are set once under `@variant light` in `globals.css`. The site follows the visitor's system setting; the header toggle stores a choice (`src/lib/theme.ts`). Use `on-media` for text on photos and `on-accent` for text on green buttons, and the `light:` variant when a component must differ between themes.
- Motion is subtle and optional: scroll reveals use the `data-reveal` attribute (src/components/motion/RevealObserver.tsx), entrances use `motion-safe:animate-*` with `enterDelay()` (src/lib/motion.ts), and everything stops under `prefers-reduced-motion`. Never hide content in a way that needs JavaScript to undo. Details in COMPONENTS.md.
- The site is Arabic-first (RTL) with an English version. Use logical utilities (`ps`/`pe`, `ms`/`me`, `start`/`end`, `border-s`/`border-e`) so layouts mirror in English.
- All copy lives in `src/constants/data.ts` as `{ ar, en }`. English drafts awaiting review are marked `// TODO: review EN copy`.
- Arabic tanween fath goes on the alef, after it (`اً`: أعمالاً، عاماً), never on the letter before it (`ًا`: أعمالًا).
- Components, their props and their data sources are documented in COMPONENTS.md.
- Run `npm run lint` and `npm run build` before committing.
