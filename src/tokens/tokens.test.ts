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
