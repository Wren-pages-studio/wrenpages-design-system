/**
 * Writes the static brand SVGs (favicon, symbol, horizontal, horizontal on Forest)
 * to src/assets/logo from the same geometry and palette the <Logo> component uses.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { BIRD_BODY, WING_FOLD, WING_PAGE, WORDMARK } from '../src/atoms/Logo/paths';
import { palette } from '../src/tokens/primitives';

const forest = palette.forest[700];
const honey = palette.honey[400];
const cream = palette.cream[100];

const bird = `<path d="${BIRD_BODY}" fill="${honey}"/><g transform="rotate(-18 47 56)" stroke="${forest}" stroke-width="3.2" stroke-linejoin="round" fill="none"><path d="${WING_PAGE}"/><path d="${WING_FOLD}" fill="${forest}"/></g><circle cx="64" cy="36" r="3.4" fill="${forest}"/>`;
const disc = `<circle cx="50" cy="50" r="50" fill="${forest}"/>`;
const ring = `<circle cx="50" cy="50" r="47.5" fill="none" stroke="${cream}" stroke-width="5"/>`;
const svg = (viewBox: string, body: string) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${body}</svg>\n`;

const files: Record<string, string> = {
  'wrenpages-symbol.svg': svg('0 0 100 100', disc + bird),
  'wrenpages-horizontal.svg': svg('0 0 423.2 100', disc + bird + `<path fill="${forest}" d="${WORDMARK}"/>`),
  'wrenpages-horizontal-on-forest.svg': svg('0 0 423.2 100', ring + bird + `<path fill="${cream}" d="${WORDMARK}"/>`),
  'favicon.svg': svg(
    '0 0 100 100',
    `${disc}<g transform="translate(50 52) scale(1.14) translate(-52 -50)"><path d="${BIRD_BODY}" fill="${honey}"/><circle cx="63.5" cy="37" r="4.6" fill="${forest}"/></g>`,
  ),
};

const dir = fileURLToPath(new URL('../src/assets/logo/', import.meta.url));
mkdirSync(dir, { recursive: true });
for (const [name, content] of Object.entries(files)) writeFileSync(dir + name, content);
console.log(`logo assets written (${Object.keys(files).length})`);
