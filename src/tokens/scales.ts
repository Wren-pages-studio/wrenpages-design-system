/**
 * Dimension scales. Every number used anywhere in the design system or in the
 * consuming apps must come from here. If a value you need is missing, the
 * design is missing a decision — add it here (and to Figma), never inline it.
 */

/** Base-4 spacing scale (Figma "space/*"). */
export const space = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
} as const;

/** Corner radius (Figma "radius/*"). Buttons/badges = full · inputs = md · cards = lg · pricing/form cards & illustrations = xl. */
export const radius = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '20px',
  xl: '28px',
  full: '999px',
} as const;

export const borderWidth = {
  1: '1px',
  2: '2px',
  3: '3px',
} as const;

/** Fixed element sizes (icons, controls, illustrations, measures). */
export const size = {
  /* icons */
  'icon-xs': '14px',
  'icon-sm': '16px',
  'icon-md': '20px',
  'icon-lg': '24px',
  /* controls */
  'button-h-sm': '36px',
  'button-h-md': '44px',
  'button-h-lg': '52px',
  'input-h': '48px',
  'tap-min': '44px',
  'row-h-lg': '56px',
  'textarea-min-h': '128px',
  /* choice (checkbox / radio) */
  choice: '24px',
  'choice-checkmark-w': '6px',
  'choice-checkmark-h': '11px',
  'choice-dot': '10px',
  /* badges, markers & chips */
  'marker-sm': '24px',
  'marker-md': '40px',
  'marker-lg': '48px',
  'nav-indicator-w': '24px',
  'nav-indicator-h': '3px',
  'divider-vertical-h': '48px',
  /* brand */
  'logo-h': '40px',
  'symbol-lg': '96px',
  /* illustrations */
  'illus-message': '200px',
  'hero-visual-h-mobile': '300px',
  'hero-visual-h-tablet': '380px',
  'hero-visual-h-desktop': '480px',
  'about-illus-h-mobile': '240px',
  'about-illus-h-tablet': '280px',
  'about-illus-h-desktop': '400px',
  /* layout columns & measures */
  container: '1120px',
  'hero-media-col': '480px',
  'about-media-col-tablet': '280px',
  'about-media-col-desktop': '400px',
  'measure-prose': '720px',
  'measure-message': '640px',
  'measure-pricing-single': '560px',
  'measure-linkbio': '480px',
  'measure-footer-brand': '360px',
  'compare-col': '28%',
  /* chrome */
  'header-h': '77px',
  'header-offset': '88px',
  'sticky-cta-h': '76px',
  'toast-offset': '96px',
  'toast-max-w': '90vw',
  'illus-share': '62%',
  'illus-phone-share': '84%',
} as const;

/** Grid by breakpoint (designed at 375 / 768 / 1440). */
export const grid = {
  mobile: { columns: 4, gutter: space[4], margin: space[6] },
  tablet: { columns: 8, gutter: space[6], margin: space[10] },
  desktop: { columns: 12, gutter: space[8], margin: '160px' },
} as const;

/**
 * Breakpoints (min-width). CSS custom properties cannot drive @media/@container,
 * so component CSS repeats these two literals inside `@container page (...)` only.
 */
export const breakpoints = {
  tablet: 768,
  desktop: 1280,
} as const;

export const zIndex = {
  base: '0',
  'sticky-cta': '40',
  header: '50',
  toast: '90',
  'skip-link': '100',
} as const;

export const motion = {
  'duration-hover': '150ms',
  'duration-accordion': '200ms',
  'ease-out': 'cubic-bezier(.2,.8,.2,1)',
  'nudge-x': '2px',
  'rise-y': '16px',
} as const;

/** Durations consumed from JavaScript (ms). */
export const timing = {
  toast: 2600,
} as const;

export const shadow = {
  1: '0 1px 2px rgb(31 36 33 / 6%), 0 1px 3px rgb(31 36 33 / 8%)',
  2: '0 4px 12px rgb(31 36 33 / 8%), 0 2px 4px rgb(31 36 33 / 4%)',
  3: '0 12px 32px rgb(31 36 33 / 12%), 0 4px 8px rgb(31 36 33 / 6%)',
} as const;

/** Icon stroke widths (SVG user units on a 24×24 grid). */
export const iconStroke = {
  regular: '2',
  bold: '3',
} as const;
