import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckMarker } from '../CheckMarker';
import { Text } from '../Text';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card & CheckMarker',
  component: Card,
  args: { elevation: 1, radius: 'lg', padding: 'md', children: <Text>Surface card content</Text> },
  argTypes: {
    elevation: { control: 'inline-radio', options: [0, 1, 2, 3] },
    radius: { control: 'inline-radio', options: ['lg', 'xl'] },
    padding: { control: 'inline-radio', options: ['none', 'md', 'lg'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Highlighted: Story = { args: { radius: 'xl', elevation: 2, highlighted: true } };

export const CheckMarkers: Story = {
  render: () => (
    <div className="sb-row">
      <CheckMarker tone="brand" />
      <CheckMarker tone="accent" />
      <CheckMarker tone="inverse" />
      <CheckMarker tone="muted" />
    </div>
  ),
};
