import type { Meta, StoryObj } from '@storybook/react-vite';
import { BeforeAfterArt } from './artwork';
import { Illustration } from './Illustration';

const meta = {
  title: 'Atoms/Illustration',
  component: Illustration,
  args: { type: 'bird' },
  argTypes: {
    type: { control: 'inline-radio', options: ['bird', 'bird-flying', 'phone', 'image'] },
    placement: { control: 'inline-radio', options: [undefined, 'hero', 'about', 'message'] },
  },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bird: Story = { args: { placement: 'message' } };
export const BirdFlying: Story = { args: { type: 'bird-flying', placement: 'message' } };
export const Phone: Story = { args: { type: 'phone', placement: 'hero' } };
export const ImageSlot: Story = { args: { type: 'image' } };
export const BeforeAfter: Story = {
  render: () => (
    <div className="sb-token-grid">
      <BeforeAfterArt tone="accent" />
      <BeforeAfterArt tone="brand" />
      <BeforeAfterArt tone="error" />
    </div>
  ),
};
