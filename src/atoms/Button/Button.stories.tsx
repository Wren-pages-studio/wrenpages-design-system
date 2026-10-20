import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: { children: 'Get a free audit', variant: 'primary', size: 'md', showArrow: true },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'link'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    visualState: { control: 'inline-radio', options: [undefined, 'hover', 'pressed', 'focus'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button · Variant primary|secondary|ghost|link × Size sm|md|lg × State default|hover|pressed|focus|disabled (60 variants). Pass `href` to render a link (routed through `LinkProvider`).',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'See packages', showArrow: false } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Maybe later', showArrow: false } };
export const Link: Story = { args: { variant: 'link', children: 'See all questions', showArrow: false } };
export const AsLink: Story = { args: { href: '/audit' } };
export const Block: Story = { args: { block: true, size: 'lg' } };

const states = [undefined, 'hover', 'pressed', 'focus'] as const;

/** The full matrix (Variant × Size × State) as documented in Figma. */
export const Matrix: Story = {
  render: () => (
    <div className="sb-stack">
      {(['primary', 'secondary', 'ghost', 'link'] as const).map((variant) =>
        (['sm', 'md', 'lg'] as const).map((size) => (
          <div key={variant + size} className="sb-row">
            <span className="sb-label">
              {variant} · {size}
            </span>
            {states.map((s) => (
              <Button key={s ?? 'default'} variant={variant} size={size} visualState={s} showArrow>
                {s ?? 'default'}
              </Button>
            ))}
            <Button variant={variant} size={size} disabled>
              disabled
            </Button>
          </div>
        )),
      )}
    </div>
  ),
};

export const OnInverse: Story = {
  args: { variant: 'secondary', onInverse: true, children: 'See packages', showArrow: false },
  globals: { backgrounds: { value: 'forest' } },
};
