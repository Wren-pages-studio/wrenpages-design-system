/**
 * Self-hosted brand fonts (OFL): Fraunces 600 + Inter 400/500/600, latin subset.
 * The build copies these WOFF2 files to dist/fonts and prepends the @font-face
 * rules to dist/styles.css, so consumers need a single stylesheet import.
 */
export const fontFaces = [
  { family: 'Fraunces', weight: 600, pkg: 'fraunces', file: 'fraunces-latin-600-normal.woff2' },
  { family: 'Inter', weight: 400, pkg: 'inter', file: 'inter-latin-400-normal.woff2' },
  { family: 'Inter', weight: 500, pkg: 'inter', file: 'inter-latin-500-normal.woff2' },
  { family: 'Inter', weight: 600, pkg: 'inter', file: 'inter-latin-600-normal.woff2' },
] as const;

export const fontFaceCss = (baseUrl: string) =>
  fontFaces
    .map(
      (f) =>
        `@font-face{font-family:"${f.family}";font-style:normal;font-weight:${f.weight};font-display:swap;src:url("${baseUrl}${f.file}") format("woff2")}`,
    )
    .join('\n');
