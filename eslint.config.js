import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'storybook-static', 'coverage', 'node_modules', '!.storybook'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      // Every visual value comes from tokens: no inline styles in components.
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXAttribute[name.name='style']",
          message: 'Inline styles are forbidden. Use a CSS module with design tokens (var(--…)).',
        },
      ],
    },
  },
  {
    // Token documentation blocks paint swatches straight from the token objects.
    files: ['src/foundations/**', '.storybook/**'],
    rules: { 'no-restricted-syntax': 'off' },
  },
  ...storybook.configs['flat/recommended'],
);
