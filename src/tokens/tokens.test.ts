import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { palette, semanticColors, space, textStyles } from './index';

describe('tokens', () => {
  it('every semantic color aliases an existing primitive', () => {
    for (const group of Object.values(semanticColors)) {
      for (const ref of Object.values(group)) {
        const [family, step] = ref.split('.') as [keyof typeof palette, string];
        const steps = palette[family] as Record<string, string>;
        expect(steps?.[step], ref).toMatch(/^#[0-9A-F]{6}$/i);
      }
    }
  });

  it('spacing follows the base-4 scale', () => {
    for (const value of Object.values(space)) expect(parseInt(value, 10) % 4).toBe(0);
  });

  it('generated tokens.css is in sync with the TS source', () => {
    const css = readFileSync(resolve(import.meta.dirname, '../styles/tokens.css'), 'utf8');
    expect(css).toContain('--color-bg-canvas: var(--cream-100);');
    expect(css).toContain(`--space-6: ${space[6]};`);
    for (const name of Object.keys(textStyles)) expect(css).toContain(`--text-${name}:`);
  });
});

const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const hexOf = (ref: string) => {
  const [family, step] = ref.split('.') as [keyof typeof palette, string];
  return (palette[family] as Record<string, string>)[step];
};

describe('contrast (WCAG AA)', () => {
  it('accent text on the inverse background is at least 4.5:1', () => {
    expect(contrast(hexOf(semanticColors.text.accent), hexOf(semanticColors.bg.inverse))).toBeGreaterThanOrEqual(4.5);
  });

  it('body text on canvas and inverse text on inverse are at least 4.5:1', () => {
    expect(contrast(hexOf(semanticColors.text.primary), hexOf(semanticColors.bg.canvas))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hexOf(semanticColors.text.inverse), hexOf(semanticColors.bg.inverse))).toBeGreaterThanOrEqual(4.5);
  });
});
