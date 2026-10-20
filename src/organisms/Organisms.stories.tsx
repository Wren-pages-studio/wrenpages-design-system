import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../atoms/Button';
import { TextLink } from '../atoms/TextLink';
import { Container, Grid, Section } from '../layout';
import { CtaGroup } from '../molecules/CtaGroup';
import { auditChecklist, auditFields, footerColumns, navItems, plans, social } from '../templates/fixtures';
import { AboutBlock } from './AboutBlock';
import { AuditForm, AuditSection } from './AuditForm';
import { ComparisonTable } from './ComparisonTable';
import { CtaBand } from './CtaBand';
import { FaqList } from './FaqList';
import { Footer, Placeholder } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { LinkInBio } from './LinkInBio';
import { Message } from './Message';
import { PageHeader } from './PageHeader';
import { PricingCard } from './PricingCard';
import { StickyCta } from './StickyCta';

const meta = {
  title: 'Organisms/Catalog',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Full sections. Switch the viewport toolbar (375 / 768 / 1440) to see each breakpoint variant.' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderClosed: Story = {
  name: 'Header · Menu closed',
  render: () => <Header static items={navItems} cta={{ label: 'Get a free audit', href: '/audit' }} social={social} />,
};

export const HeaderOpen: Story = {
  name: 'Header · Menu open (mobile)',
  parameters: { viewport: { defaultViewport: 'mobile' } },
  globals: { viewport: { value: 'mobile' } },
  render: () => <Header static menuOpen items={navItems} cta={{ label: 'Get a free audit', href: '/audit' }} social={social} />,
};

export const HeroSection: Story = {
  name: 'Hero',
  render: () => (
    <Hero
      badge="A tiny web studio for local businesses"
      title="Small sites. Big first impressions."
      lead={
        <>
          We build fast, friendly websites for salons, cafés, barbers and local pros — so the people who find you on Google actually call
          you. Launch price from <strong>$390</strong>, and the first clients pay only after they approve.
        </>
      }
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
  ),
};

export const PricingCards: Story = {
  name: 'Pricing card · Highlighted false / true',
  render: () => (
    <Section tone="subtle">
      <Container>
        <Grid variant="pricing" as="div">
          {plans.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </Grid>
      </Container>
    </Section>
  ),
};

export const Comparison: Story = {
  name: 'Comparison table',
  render: () => (
    <Section>
      <Container>
        <ComparisonTable
          caption="What each package includes"
          columns={['Landing Page', 'Small Website']}
          rows={[
            { feature: 'Custom design in your colors', values: [true, true] },
            { feature: 'Home, Services, About, Gallery, Contact', values: [false, true] },
            { feature: 'Ready in', values: ['~7 days', '~14 days'] },
            { feature: 'Launch price', values: ['$390', '$890'] },
          ]}
        />
      </Container>
    </Section>
  ),
};

export const Faq: Story = {
  name: 'FAQ list',
  render: () => (
    <Section>
      <Container>
        <FaqList
          defaultOpenIds={['pay']}
          items={[
            { id: 'pay', question: 'Do I really pay only after I approve the site?', answer: 'Yes — for our first launch clients.' },
            { id: 'time', question: 'How long does it take?', answer: 'Landing pages in about 7 days, small websites in about 14.' },
            { id: 'own', question: 'Do I own my website?', answer: 'Yes. Once paid, the domain and site are yours.' },
          ]}
          footer={<TextLink href="/faq">See all questions →</TextLink>}
        />
      </Container>
    </Section>
  ),
};

function AuditDemo({ withErrors }: { withErrors?: boolean }) {
  const [values, setValues] = useState<Record<string, string>>(
    withErrors ? { business: 'Daybreak Coffee', link: 'none', email: 'daybreak@coffee' } : {},
  );
  const errors = withErrors ? { name: 'This field is required.', email: 'Please enter a valid email.' } : {};
  return (
    <AuditSection
      eyebrow="Free website audit"
      title="Not sure your website is helping? Let us look — free."
      lead="Send us your business name. Within 2 business days we'll send a short video audit: speed, mobile, Google listing and 3 quick fixes. No pitch-deck, no obligation."
      checklist={auditChecklist}
      form={
        <AuditForm
          fields={auditFields}
          values={values}
          errors={errors}
          alert={withErrors ? 'Please fix 2 fields below.' : undefined}
          onChange={(name, value) => setValues((v) => ({ ...v, [name]: value }))}
          onSubmit={(e) => e.preventDefault()}
          submitLabel="Send my free audit"
          micro="A real person reads every request. 🐦"
        />
      }
    />
  );
}

export const Audit: Story = { name: 'Audit form · Variant section', render: () => <AuditDemo /> };
export const AuditError: Story = { name: 'Audit form · State error', render: () => <AuditDemo withErrors /> };

export const About: Story = {
  name: 'About · Length short',
  render: () => (
    <Section tone="accent-subtle">
      <Container>
        <AboutBlock
          eyebrow="About us"
          title="A tiny studio with a big soft spot for small businesses 🐦"
          paragraphs={['Wren Pages is a small web studio — and the people who build your site are the same people who answer your email.']}
          footer={<TextLink href="/about">More about us →</TextLink>}
        />
      </Container>
    </Section>
  ),
};

export const InnerPageHeader: Story = {
  name: 'Page header',
  render: () => (
    <PageHeader
      eyebrow="Packages"
      title="Simple pricing. No surprises."
      lead="Launch pricing for our first clients — the full price is shown so you know what you're getting."
    />
  ),
};

export const Band: Story = {
  name: 'CTA band',
  render: () => (
    <Section>
      <Container>
        <CtaBand
          title="Real client work coming soon — maybe yours?"
          action={
            <Button size="lg" showArrow href="/audit">
              Get a free audit
            </Button>
          }
        />
      </Container>
    </Section>
  ),
};

export const Messages: Story = {
  name: 'Message · Type thanks / 404',
  render: () => (
    <>
      <Message
        type="thanks"
        title="Got it — thank you! 🐦"
        lead="A real person will look at your site and send your video audit within 2 business days."
        actions={
          <CtaGroup center>
            <Button size="lg" href="/">
              Back to home
            </Button>
            <Button size="lg" variant="secondary" href="/pricing">
              See our packages
            </Button>
          </CtaGroup>
        }
      />
      <Message type="not-found" title="This page flew away 🐦" lead="The page you're looking for doesn't exist or has moved." />
    </>
  ),
};

export const LinkBio: Story = {
  name: 'Link-in-bio',
  render: () => (
    <LinkInBio
      name="Wren Pages"
      tagline="Small sites. Big first impressions. 🐦"
      siteLabel="wrenpages.pages.dev"
      social={social.slice(0, 2)}
      links={[
        { id: 'audit', href: '/audit', icon: 'search', variant: 'primary', label: 'Get a free website audit' },
        { id: 'pricing', href: '/pricing', icon: 'sparkle', label: 'See launch pricing' },
        { id: 'work', href: '/work', icon: 'smartphone', label: 'Recent work' },
        { id: 'call', href: '#', icon: 'calendar', note: 'external', label: 'Book a 20-min call' },
      ]}
    />
  ),
};

export const SiteFooter: Story = {
  name: 'Footer',
  render: () => (
    <Footer
      tagline="Wren Pages — Small sites. Big first impressions."
      social={social}
      columns={footerColumns}
      copyright="© 2026 Wren Pages. Made with care (and coffee)."
      legal={
        <>
          Wren Pages · <Placeholder>[PLACEHOLDER: 123 Example St, Suite 000, City, ST 00000, USA]</Placeholder> ·{' '}
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
        </>
      }
    />
  ),
};

export const Sticky: Story = {
  name: 'Mobile sticky CTA',
  render: () => <StickyCta inline label="Free audit" href="/audit" />,
};
