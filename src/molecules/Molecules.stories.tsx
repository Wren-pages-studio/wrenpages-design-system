import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Grid } from '../layout';
import { CtaGroup } from './CtaGroup';
import { FaqItem } from './FaqItem';
import { FeatureRow } from './FeatureRow';
import { FormField } from './FormField';
import { ProblemCard, StepCard } from './InfoCard';
import { LinkButton } from './LinkButton';
import { NavItem } from './NavItem';
import { SectionHeading } from './SectionHeading';
import { SocialLinks } from './SocialLinks';
import { Stat } from './Stat';
import { Testimonial } from './Testimonial';
import { Toast } from './Toast';
import { WorkCard } from './WorkCard';

const meta = {
  title: 'Molecules/Catalog',
  parameters: {
    docs: { description: { component: 'Atoms working together. Each molecule also has its own props table in the stories below.' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavItemStates: Story = {
  name: 'Nav item · State',
  render: () => (
    <div className="sb-row">
      <NavItem href="/pricing">Pricing</NavItem>
      <NavItem href="/pricing" visualState="hover">
        Pricing
      </NavItem>
      <NavItem href="/pricing" active>
        Pricing
      </NavItem>
      <NavItem href="/pricing" visualState="focus">
        Pricing
      </NavItem>
    </div>
  ),
};

export const FormFieldStates: Story = {
  name: 'Form field · State default / error / disabled',
  render: () => (
    <div className="sb-stack">
      <FormField label="Business name" help="The name customers search for.">
        <Input placeholder="e.g. Daybreak Coffee" />
      </FormField>
      <FormField label="Email" help="We'll send your video audit here." error="Please enter a valid email.">
        <Input type="email" defaultValue="daybreak@coffee" />
      </FormField>
      <FormField label="What's bugging you about your site?" optional help="Slow? Outdated? No calls? Anything helps.">
        <Textarea placeholder="Tell us what bugs you about your current site…" />
      </FormField>
      <FormField label="Name" help="So we know who to reply to." disabled>
        <Input placeholder="Your name" />
      </FormField>
    </div>
  ),
};

export const FeatureRows: Story = {
  name: 'Pricing feature row · Included',
  render: () => (
    <ul className="sb-stack">
      <FeatureRow>Custom design in your colors</FeatureRow>
      <FeatureRow included={false}>Google Business Profile tune-up</FeatureRow>
    </ul>
  ),
};

export const Cards: Story = {
  name: 'Stat · Step card · Problem card · Testimonial',
  render: () => (
    <div className="sb-stack">
      <Grid variant="stats">
        <Stat value="< 2s" label="load time" />
        <Stat value="~7 days" label="landing page" />
        <Stat value="2 rounds" label="of edits included" />
      </Grid>
      <Grid variant="four">
        <StepCard step={1} title="Free audit (5 min video).">
          We record a short video showing exactly what&apos;s working and what isn&apos;t.
        </StepCard>
        <StepCard step={2} title="Quick call & plan.">
          20 minutes. You tell us about your business, we send a one-page plan and a fixed price.
        </StepCard>
      </Grid>
      <Grid variant="three">
        <ProblemCard icon="search" title="No site, just Facebook.">
          Customers who Google you hit a dead end — and call the next shop.
        </ProblemCard>
      </Grid>
      <Grid variant="three" as="div">
        <Testimonial
          quote="“[Placeholder] Our first real client quote will live here — short, specific, about results.”"
          name="Client name"
          business="Business · City, ST"
        />
      </Grid>
    </div>
  ),
};

export const FaqItems: Story = {
  name: 'FAQ item · Open false / true',
  render: () => (
    <div>
      <FaqItem question="How long does it take?" answer="Landing pages are usually ready in about 7 days, small websites in about 14." />
      <FaqItem
        defaultOpen
        question="Do I really pay only after I approve the site?"
        answer="Yes — for our first launch clients. We build your site on a private preview link."
      />
    </div>
  ),
};

export const CtaGroups: Story = {
  name: 'CTA group · Layout',
  render: () => (
    <div className="sb-stack">
      <CtaGroup>
        <Button size="lg" showArrow href="/audit">
          Get a free audit
        </Button>
        <Button size="lg" variant="secondary" href="/#pricing">
          See packages
        </Button>
      </CtaGroup>
      <CtaGroup layout="horizontal">
        <Button href="/">Back to home</Button>
        <Button variant="secondary" href="/pricing">
          See our packages
        </Button>
      </CtaGroup>
    </div>
  ),
};

export const LinksAndCards: Story = {
  name: 'Social links · Link button · Work card',
  render: () => (
    <div className="sb-stack">
      <SocialLinks
        items={[
          { icon: 'instagram', href: '#', label: 'Wren Pages on Instagram (@wrenpages)' },
          { icon: 'tiktok', href: '#', label: 'Wren Pages on TikTok (@wrenpages)' },
          { icon: 'mail', href: 'mailto:wrenpages.studio@gmail.com', label: 'Email wrenpages.studio@gmail.com' },
        ]}
      />
      <LinkButton href="/audit" icon="search" variant="primary">
        Get a free website audit
      </LinkButton>
      <LinkButton href="/pricing" icon="sparkle">
        See launch pricing
      </LinkButton>
      <LinkButton href="#" icon="calendar" note="external" visualState="hover">
        Book a 20-min call
      </LinkButton>
      <Grid variant="work">
        <WorkCard name="Daybreak Coffee" type="Café landing page" mediaCaption="[PLACEHOLDER] Before / after" />
        <WorkCard name="Ridgeline Plumbing" type="4-page service site" tone="brand" link={{ href: '#', label: 'View demo →' }} />
      </Grid>
    </div>
  ),
};

export const Headings: Story = {
  name: 'Section heading',
  render: () => (
    <div className="sb-stack">
      <SectionHeading eyebrow="How it works" title="From “hello” to live in about two weeks" />
      <SectionHeading
        align="center"
        eyebrow="Packages"
        title="Simple pricing. No surprises."
        lead="Launch pricing for our first clients — the full price is shown so you know what you're getting."
      />
    </div>
  ),
};

function ToastDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sb-stack">
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <Toast open={open} onClose={() => setOpen(false)}>
        External link — instagram.com/wrenpages
      </Toast>
      <Toast open inline duration={0}>
        External link — instagram.com/wrenpages (inline preview)
      </Toast>
    </div>
  );
}

export const ToastOverlay: Story = { name: 'Toast', render: () => <ToastDemo /> };
