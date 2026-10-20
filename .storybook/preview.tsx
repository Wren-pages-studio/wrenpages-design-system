import type { Decorator, Preview } from '@storybook/react-vite';
import '@fontsource/fraunces/latin-600.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '../src/styles/index.css';
import './preview.css';

/**
 * Every story renders inside the `page` size container, so organisms respond to
 * the canvas width exactly like they do inside <PageShell>. Use the viewport
 * toolbar (Mobile 375 / Tablet 768 / Desktop 1440) to switch breakpoints.
 */
const withPageContainer: Decorator = (Story, ctx) => (
  <div className={ctx.parameters.layout === 'fullscreen' ? 'sb-page sb-page--full' : 'sb-page'}>
    <Story />
  </div>
);

const preview: Preview = {
  decorators: [withPageContainer],
  parameters: {
    layout: 'padded',
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    backgrounds: {
      options: {
        canvas: { name: 'Canvas (cream/100)', value: '#FBF7F0' },
        surface: { name: 'Surface (cream/50)', value: '#FFFDF9' },
        forest: { name: 'Inverse (forest/700)', value: '#2F5D50' },
      },
    },
    viewport: {
      options: {
        mobile: { name: 'Mobile 375', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet 768', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop 1440', styles: { width: '1440px', height: '900px' } },
      },
    },
    a11y: { test: 'error' },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Layout'],
      },
    },
  },
  initialGlobals: { backgrounds: { value: 'canvas' } },
  tags: ['autodocs'],
};

export default preview;
