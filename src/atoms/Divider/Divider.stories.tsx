import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical' } };
