/**
 * Typography. Fraunces 600 for display/headings, Inter 400/500/600 for body & labels.
 * 18 text styles mirror the Figma text styles; each one becomes a `.t-*` class
 * and a set of `--text-<style>-*` custom properties.
 */
export const fontFamily = {
  display: '"Fraunces", Georgia, serif',
  body: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
} as const;

/** Extra line-heights for non-text-style elements (number discs, chips). */
export const lineHeight = {
  none: '1',
} as const;

type TextStyle = {
  family: keyof typeof fontFamily;
  weight: keyof typeof fontWeight;
  size: string;
  lineHeight: string;
  tracking: string;
  uppercase?: boolean;
  /** Human description used by the docs. */
  use: string;
};

export const textStyles = {
  'display-xl': {
    family: 'display',
    weight: 'semibold',
    size: '72px',
    lineHeight: '1.05',
    tracking: '-0.02em',
    use: 'Home hero H1 (desktop)',
  },
  'display-l': {
    family: 'display',
    weight: 'semibold',
    size: '56px',
    lineHeight: '1.08',
    tracking: '-0.015em',
    use: 'Prices, hero tablet',
  },
  h1: { family: 'display', weight: 'semibold', size: '48px', lineHeight: '1.1', tracking: '-0.01em', use: 'Inner page H1' },
  h2: { family: 'display', weight: 'semibold', size: '40px', lineHeight: '1.15', tracking: '-0.01em', use: 'Section titles' },
  h3: { family: 'display', weight: 'semibold', size: '28px', lineHeight: '1.2', tracking: '-0.005em', use: 'Card titles (pricing)' },
  h4: { family: 'display', weight: 'semibold', size: '22px', lineHeight: '1.3', tracking: '0', use: 'Step/work card titles, signature' },
  'm-display': { family: 'display', weight: 'semibold', size: '44px', lineHeight: '1.1', tracking: '-0.015em', use: 'Hero H1 (mobile)' },
  'm-h1': { family: 'display', weight: 'semibold', size: '36px', lineHeight: '1.15', tracking: '-0.01em', use: 'Page H1 (mobile)' },
  'm-h2': { family: 'display', weight: 'semibold', size: '30px', lineHeight: '1.2', tracking: '-0.005em', use: 'Section titles (mobile)' },
  'm-h3': { family: 'display', weight: 'semibold', size: '24px', lineHeight: '1.25', tracking: '0', use: 'Mobile menu items' },
  'body-l': { family: 'body', weight: 'regular', size: '20px', lineHeight: '1.6', tracking: '0', use: 'Lead paragraphs, quotes' },
  'body-m': {
    family: 'body',
    weight: 'regular',
    size: '17px',
    lineHeight: '1.6',
    tracking: '0',
    use: 'Default body, inputs (≥16 avoids iOS zoom)',
  },
  'body-s': { family: 'body', weight: 'regular', size: '15px', lineHeight: '1.5', tracking: '0', use: 'Card body, notes' },
  'body-m-strong': { family: 'body', weight: 'semibold', size: '17px', lineHeight: '1.6', tracking: '0', use: 'FAQ questions, emphasis' },
  'label-m': { family: 'body', weight: 'semibold', size: '16px', lineHeight: '1.25', tracking: '0', use: 'Buttons md/lg, nav' },
  'label-s': {
    family: 'body',
    weight: 'semibold',
    size: '14px',
    lineHeight: '1.25',
    tracking: '0.005em',
    use: 'Badges, form labels, btn sm',
  },
  caption: { family: 'body', weight: 'medium', size: '13px', lineHeight: '1.4', tracking: '0', use: 'Help text, trust line, legal' },
  eyebrow: {
    family: 'body',
    weight: 'semibold',
    size: '13px',
    lineHeight: '1.4',
    tracking: '0.08em',
    uppercase: true,
    use: 'Section kicker',
  },
} as const satisfies Record<string, TextStyle>;

export type TextStyleName = keyof typeof textStyles;

/**
 * Responsive text roles: mobile style → tablet (≥768) → desktop (≥1280).
 */
export const responsiveText = {
  hero: ['m-display', 'display-l', 'display-xl'],
  page: ['m-h1', 'h1', 'h1'],
  section: ['m-h2', 'h2', 'h2'],
  lead: ['body-m', 'body-l', 'body-l'],
  stat: ['m-h2', 'h2', 'h2'],
} as const satisfies Record<string, readonly [TextStyleName, TextStyleName, TextStyleName]>;

export type ResponsiveTextRole = keyof typeof responsiveText;
