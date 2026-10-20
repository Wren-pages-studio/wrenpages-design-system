/**
 * Primitive color palette (Figma collection "Primitives").
 * Primitives exist only to be aliased by semantic tokens — components never use them directly.
 */
export const palette = {
  forest: { 900: '#1E3D35', 700: '#2F5D50', 500: '#4A7D6E', 100: '#DDE8E3' },
  honey: { 700: '#B87A1E', 600: '#D99A3A', 500: '#E9A848', 400: '#F4B860', 100: '#FCEBCB' },
  cream: { 50: '#FFFDF9', 100: '#FBF7F0', 200: '#F1EADD', 300: '#E3DBCC' },
  ink: { 900: '#1F2421', 700: '#3D4440', 500: '#6B716D', 300: '#B9BDB9' },
  coral: { 700: '#B4513A', 500: '#E07A5F', 100: '#F9E1DA' },
  green: { 700: '#2E7D4F', 100: '#DCEFE3' },
  white: '#FFFFFF',
} as const;

export type PaletteFamily = Exclude<keyof typeof palette, 'white'>;
