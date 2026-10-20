/// <reference types="vitest/config" />
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fontFaceCss, fontFaces } from './src/styles/fonts';

const root = import.meta.dirname;
const r = (...p: string[]) => resolve(root, ...p);

/**
 * Library mode inlines every asset as base64, which would turn the fonts into a
 * 300 kB stylesheet. Instead we ship the WOFF2 files and reference them by URL,
 * plus the raw tokens.css and the brand SVGs.
 */
const shipStaticAssets = (): Plugin => ({
  name: 'wp-ship-static-assets',
  apply: 'build',
  closeBundle() {
    mkdirSync(r('dist/fonts'), { recursive: true });
    for (const f of fontFaces) cpSync(r('node_modules/@fontsource', f.pkg, 'files', f.file), r('dist/fonts', f.file));
    const styles = r('dist/styles.css');
    writeFileSync(styles, `${fontFaceCss('./fonts/')}\n${readFileSync(styles, 'utf8')}`);
    cpSync(r('src/styles/tokens.css'), r('dist/tokens.css'));
    cpSync(r('src/assets'), r('dist/assets'), { recursive: true });
  },
});

export default defineConfig({
  plugins: [react(), shipStaticAssets()],
  css: {
    modules: {
      // Stable, readable class names: wp-Button-module-primary-x1y2z
      generateScopedName: 'wp-[name]-[local]-[hash:base64:5]',
    },
  },
  build: {
    lib: {
      entry: {
        index: r('src/index.ts'),
        tokens: r('src/tokens/index.ts'),
      },
      formats: ['es'],
      cssFileName: 'styles',
    },
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
