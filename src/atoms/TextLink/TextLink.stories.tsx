import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextLink } from './TextLink';

const meta = {
  title: 'Atoms/TextLink',
  component: TextLink,
  args: { href: 'mailto:wrenpages.studio@gmail.com', children: 'wrenpages.studio@gmail.com' },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: (args) => (
    <div className="sb-row">
      <TextLink {...args} />
      <TextLink {...args} visualState="hover" />
      <TextLink {...args} visualState="focus" />
      <TextLink {...args} visualState="visited" />
    </div>
  ),
};

export const Inverse: Story = {
  args: { tone: 'inverse' },
  globals: { backgrounds: { value: 'forest' } },
};
