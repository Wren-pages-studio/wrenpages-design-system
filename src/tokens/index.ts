/**
 * Wren Pages design tokens — single source of truth.
 * `scripts/generate-tokens.ts` turns these objects into `src/styles/tokens.css`.
 * Figma variable → CSS custom property:
 *   forest/700        → --forest-700
 *   color/bg/canvas   → --color-bg-canvas
 *   space/4           → --space-4
 *   radius/md         → --radius-md
 *   Heading/H2        → --text-h2 (+ -line-height, -tracking, -weight, -family)
 *   Elevation/1       → --shadow-1      Focus/Ring → --focus-ring
 */
export { palette } from './primitives';
export type { PaletteFamily } from './primitives';
export { semanticColors } from './semantic';
export type { SemanticColorGroup } from './semantic';
export { space, radius, borderWidth, size, grid, breakpoints, zIndex, motion, timing, shadow, iconStroke } from './scales';
export { fontFamily, fontWeight, lineHeight, textStyles, responsiveText } from './typography';
export type { TextStyleName, ResponsiveTextRole } from './typography';

export const focusRing = '0 0 0 2px var(--cream-100), 0 0 0 4px var(--forest-500)';

/** Type-safe reference to a CSS custom property, e.g. `cssVar('space', 4)` → `var(--space-4)`. */
export const cssVar = (group: string, name: string | number): string => `var(--${group}-${name})`;
