import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { Container, Grid, Section, Stack } from './Layout';

const meta = {
  title: 'Layout/Section, Container, Grid & Stack',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Token-driven layout primitives. `Section` = full-bleed band with responsive padding (64 → 96). `Container` = 1120px column. `Grid` = the named responsive grids from Figma. `Stack` = flex with a spacing-token gap.',
      },
    },
  },
  args: { tone: 'subtle' },
  argTypes: { tone: { control: 'inline-radio', options: ['canvas', 'subtle', 'inverse', 'accent-subtle'] } },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const cell = (n: number) => (
  <Card as="li" key={n}>
    <Text>Item {n}</Text>
  </Card>
);

export const Grids: Story = {
  render: (args) => (
    <Section {...args}>
      <Container>
        {(['three', 'four', 'work', 'pricing', 'stats'] as const).map((v) => (
          <Stack key={v} gap={3}>
            <Text variant="eyebrow" tone="brand">
              Grid variant="{v}"
            </Text>
            <Grid variant={v}>{[1, 2, 3, 4].slice(0, v === 'four' ? 4 : 3).map(cell)}</Grid>
          </Stack>
        ))}
      </Container>
    </Section>
  ),
};

export const Tones: Story = {
  render: () => (
    <>
      {(['canvas', 'subtle', 'inverse', 'accent-subtle'] as const).map((tone) => (
        <Section key={tone} tone={tone}>
          <Container>
            <Text variant="section">Section tone="{tone}"</Text>
          </Container>
        </Section>
      ))}
    </>
  ),
};
