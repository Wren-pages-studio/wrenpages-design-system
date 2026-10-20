import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: { icon: 'menu', label: 'Open menu' },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: (args) => (
    <div className="sb-row">
      <IconButton {...args} />
      <IconButton {...args} visualState="hover" />
      <IconButton {...args} visualState="pressed" />
      <IconButton {...args} visualState="focus" />
      <IconButton {...args} disabled />
      <IconButton {...args} icon="close" label="Close menu" active />
    </div>
  ),
};
