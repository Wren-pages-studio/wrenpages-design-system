import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  args: { type: 'horizontal', theme: 'light', size: 'sm' },
  argTypes: {
    type: { control: 'inline-radio', options: ['horizontal', 'symbol', 'favicon'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    size: { control: 'inline-radio', options: ['sm', 'lg'] },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const OnForest: Story = { args: { theme: 'dark' }, globals: { backgrounds: { value: 'forest' } } };
export const Symbol: Story = { args: { type: 'symbol', size: 'lg' } };
export const Favicon: Story = { args: { type: 'favicon' } };
