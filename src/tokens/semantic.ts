/**
 * Semantic color tokens (Figma collection "Color", mode Light).
 * Each value is an alias to a primitive, written as "family.step".
 * These are the ONLY color tokens components are allowed to use.
 */
export const semanticColors = {
  bg: {
    canvas: 'cream.100',
    surface: 'cream.50',
    subtle: 'cream.200',
    inverse: 'forest.700',
    'inverse-strong': 'forest.900',
    accent: 'honey.400',
    'accent-subtle': 'honey.100',
    'brand-subtle': 'forest.100',
    'error-subtle': 'coral.100',
    'success-subtle': 'green.100',
    disabled: 'cream.200',
  },
  action: {
    primary: 'honey.400',
    'primary-hover': 'honey.500',
    'primary-pressed': 'honey.600',
    secondary: 'forest.700',
    'secondary-hover': 'forest.900',
    'ghost-hover': 'forest.100',
    'ghost-pressed': 'cream.300',
  },
  text: {
    primary: 'ink.900',
    secondary: 'ink.700',
    muted: 'ink.500',
    inverse: 'cream.100',
    brand: 'forest.700',
    /** Only on forest backgrounds (4.24:1). Never on light surfaces. */
    accent: 'honey.400',
    'on-accent': 'ink.900',
    error: 'coral.700',
    success: 'green.700',
    disabled: 'ink.500',
  },
  icon: {
    default: 'ink.900',
    brand: 'forest.700',
    inverse: 'cream.100',
    accent: 'honey.400',
  },
  border: {
    default: 'cream.300',
    strong: 'ink.500',
    brand: 'forest.700',
    focus: 'forest.500',
    error: 'coral.700',
    inverse: 'forest.500',
  },
} as const;

export type SemanticColorGroup = keyof typeof semanticColors;
