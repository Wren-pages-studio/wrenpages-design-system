import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Radio } from '../Checkbox';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Form controls',
  component: Input,
  args: { placeholder: 'e.g. Daybreak Coffee', 'aria-label': 'Business name' },
  parameters: {
    docs: {
      description: {
        component:
          'Input / Textarea / Select · State default|hover|focus|filled|error|disabled, Checkbox / Radio · Checked × State. Always wrap controls in `<FormField>` in product UI so label, help and error are wired.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputPlayground: Story = {};

export const InputStates: Story = {
  render: (args) => (
    <div className="sb-stack">
      <Input {...args} aria-label="default" />
      <Input {...args} aria-label="hover" visualState="hover" />
      <Input {...args} aria-label="focus" visualState="focus" />
      <Input {...args} aria-label="filled" defaultValue="Daybreak Coffee" />
      <Input {...args} aria-label="error" invalid defaultValue="daybreak@coffee" />
      <Input {...args} aria-label="disabled" disabled />
    </div>
  ),
};

export const TextareaStates: Story = {
  render: () => (
    <div className="sb-stack">
      <Textarea aria-label="default" placeholder="Tell us what bugs you about your current site…" />
      <Textarea aria-label="focus" visualState="focus" />
      <Textarea aria-label="error" invalid />
      <Textarea aria-label="disabled" disabled />
    </div>
  ),
};

export const SelectStates: Story = {
  render: () => (
    <div className="sb-stack">
      <Select
        aria-label="Plan"
        placeholder="Choose a plan"
        options={[
          { value: 'landing', label: 'Landing Page' },
          { value: 'small-website', label: 'Small Website' },
          { value: 'care', label: 'Hosting & Care' },
        ]}
      />
      <Select aria-label="Plan disabled" disabled options={[{ value: 'landing', label: 'Landing Page' }]} />
    </div>
  ),
};

export const Choices: Story = {
  render: () => (
    <div className="sb-stack">
      <div className="sb-row">
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Focus" visualFocus />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled checked" disabled defaultChecked />
      </div>
      <div className="sb-row">
        <Radio name="r" label="Unchecked" />
        <Radio name="r" label="Checked" defaultChecked />
        <Radio name="r2" label="Focus" visualFocus />
        <Radio name="r3" label="Disabled" disabled />
        <Radio name="r4" label="Disabled checked" disabled defaultChecked />
      </div>
    </div>
  ),
};
