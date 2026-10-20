import type { Meta, StoryObj } from '@storybook/react-vite';
import { textStyles, responsiveText } from '../../tokens';
import { Text } from './Text';

const variants = [...Object.keys(textStyles), ...Object.keys(responsiveText)];

const meta = {
  title: 'Atoms/Text',
  component: Text,
  args: { children: 'Small sites. Big first impressions.', variant: 'h2', tone: 'inherit' },
  argTypes: {
    variant: { control: 'select', options: variants },
    tone: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'muted', 'brand', 'inverse', 'accent', 'error', 'success'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Typography atom. `as` picks semantics, `variant` picks the Figma text style or a responsive role (`hero`, `page`, `section`, `lead`, `stat`).',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllStyles: Story = {
  render: () => (
    <div className="sb-stack">
      {variants.map((v) => (
        <Text key={v} variant={v as never}>
          {v} — Small sites. Big first impressions.
        </Text>
      ))}
    </div>
  ),
};

export const Eyebrow: Story = { args: { variant: 'eyebrow', tone: 'brand', children: 'How it works' } };
export const HeroRole: Story = { args: { as: 'h1', variant: 'hero' } };
