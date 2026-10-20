import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  args: { children: 'Launch price', tone: 'brand' },
  argTypes: { tone: { control: 'inline-radio', options: ['accent', 'brand', 'neutral', 'success', 'error', 'outline'] } },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="sb-row">
      <Badge tone="accent" icon="star">
        Most popular
      </Badge>
      <Badge tone="brand">Launch price</Badge>
      <Badge tone="neutral">A tiny web studio for local businesses</Badge>
      <Badge tone="success">Live</Badge>
      <Badge tone="error">Needs fix</Badge>
      <Badge tone="outline">Demo project</Badge>
    </div>
  ),
};
