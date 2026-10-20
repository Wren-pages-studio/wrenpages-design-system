import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../atoms/Button';
import { Container, Grid, Section } from '../../layout';
import { CtaGroup } from '../../molecules/CtaGroup';
import { ProblemCard, StepCard } from '../../molecules/InfoCard';
import { SectionHeading } from '../../molecules/SectionHeading';
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';
import { Hero } from '../../organisms/Hero';
import { PricingCard } from '../../organisms/PricingCard';
import { StickyCta } from '../../organisms/StickyCta';
import { footerColumns, navItems, plans, social } from '../fixtures';
import { PageShell } from './PageShell';

const meta = {
  title: 'Templates/PageShell',
  component: PageShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Template · Page shell: skip link + Header + `<main id="main">` + Footer (+ Sticky CTA on mobile). Declares the `page` container every organism responds to.',
      },
    },
  },
} satisfies Meta<typeof PageShell>;

export default meta;
type Story = StoryObj<typeof meta>;

const header = (
  <Header items={navItems.map((i) => ({ ...i, active: false }))} cta={{ label: 'Get a free audit', href: '/audit' }} social={social} />
);
const footer = (
  <Footer
    tagline="Wren Pages — Small sites. Big first impressions."
    social={social}
    columns={footerColumns}
    copyright="© 2026 Wren Pages. Made with care (and coffee)."
  />
);

/** The Home page assembled only from design-system pieces. */
export const HomeComposition: Story = {
  args: { children: null },
  render: () => (
    <PageShell header={header} footer={footer} stickyCta={<StickyCta label="Free audit" href="/audit" />}>
      <Hero
        badge="A tiny web studio for local businesses"
        title="Small sites. Big first impressions."
        lead="We build fast, friendly websites for salons, cafés, barbers and local pros — so the people who find you on Google actually call you."
        actions={
          <CtaGroup>
            <Button size="lg" showArrow href="/audit">
              Get a free audit
            </Button>
            <Button size="lg" variant="secondary" href="/#pricing">
              See packages
            </Button>
          </CtaGroup>
        }
        note="Loads in under 2 seconds · Mobile-first · Built and supported by real people"
      />
      <Section tone="subtle">
        <Container>
          <SectionHeading eyebrow="Why it matters" title="Your reviews are great. Your website isn't helping." />
          <Grid variant="three">
            <ProblemCard icon="search" title="No site, just Facebook.">
              Customers who Google you hit a dead end — and call the next shop.
            </ProblemCard>
            <ProblemCard icon="smartphone" title="An old site that's slow on phones.">
              53% of mobile visitors leave if a page takes over 3 seconds.
            </ProblemCard>
            <ProblemCard icon="external-link" title="Your link goes to the wrong place.">
              A broken or outdated link on Google quietly costs you bookings.
            </ProblemCard>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading eyebrow="How it works" title="From “hello” to live in about two weeks" />
          <Grid variant="four" as="ol">
            <StepCard step={1} title="Free audit (5 min video).">
              We record a short video showing exactly what&apos;s working.
            </StepCard>
            <StepCard step={2} title="Quick call & plan.">
              20 minutes. One-page plan and a fixed price.
            </StepCard>
            <StepCard step={3} title="We design & build.">
              A preview link to click around on your own phone.
            </StepCard>
            <StepCard step={4} title="Approve, pay, launch.">
              When you&apos;re happy, we go live on your domain.
            </StepCard>
          </Grid>
        </Container>
      </Section>
      <Section tone="subtle">
        <Container>
          <SectionHeading align="center" eyebrow="Packages" title="Simple pricing. No surprises." />
          <Grid variant="pricing" as="div">
            {plans.map((p) => (
              <PricingCard key={p.name} {...p} />
            ))}
          </Grid>
        </Container>
      </Section>
    </PageShell>
  ),
};
