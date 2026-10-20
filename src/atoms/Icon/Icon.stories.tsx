import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { iconNames } from './glyphs';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  args: { name: 'arrow-right', size: 'lg', tone: 'default' },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg'] },
    tone: { control: 'inline-radio', options: ['current', 'default', 'brand', 'inverse', 'accent'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllGlyphs: Story = {
  render: (args) => (
    <div className="sb-row">
      {iconNames.map((n) => (
        <Icon key={n} {...args} name={n} label={n} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
        <Icon key={s} {...args} size={s} />
      ))}
    </div>
  ),
};

export const FilledStar: Story = { args: { name: 'star', tone: 'accent', filled: true } };
