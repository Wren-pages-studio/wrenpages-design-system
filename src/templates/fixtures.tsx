/* Storybook-only fixtures with the approved copy. Not exported by the package. */
import type { AuditFieldConfig } from '../organisms/AuditForm';
import type { FooterColumn } from '../organisms/Footer';
import type { HeaderNavItem } from '../organisms/Header';
import type { SocialLink } from '../molecules/SocialLinks';

export const navItems: HeaderNavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing', active: true },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export const social: SocialLink[] = [
  { icon: 'instagram', href: 'https://www.instagram.com/wrenpages/', label: 'Wren Pages on Instagram (@wrenpages)' },
  { icon: 'tiktok', href: 'https://www.tiktok.com/@wrenpagesstudio', label: 'Wren Pages on TikTok (@wrenpagesstudio)' },
  { icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=61595434298711', label: 'Wren Pages on Facebook' },
  { icon: 'mail', href: 'mailto:wrenpages.studio@gmail.com', label: 'Email wrenpages.studio@gmail.com' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Studio',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Free Audit', href: '/audit' },
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'wrenpages.studio@gmail.com', href: 'mailto:wrenpages.studio@gmail.com' },
      { label: 'Site: wrenpages.pages.dev', href: '/' },
      { label: 'Instagram @wrenpages', href: 'https://www.instagram.com/wrenpages/' },
      { label: 'TikTok @wrenpagesstudio', href: 'https://www.tiktok.com/@wrenpagesstudio' },
      { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595434298711' },
    ],
  },
];

export const auditFields: AuditFieldConfig[] = [
  { name: 'name', label: 'Name', help: 'So we know who to reply to.', placeholder: 'Your name', autoComplete: 'name' },
  {
    name: 'business',
    label: 'Business name',
    help: 'The name customers search for.',
    placeholder: 'e.g. Daybreak Coffee',
    autoComplete: 'organization',
  },
  {
    name: 'link',
    label: 'Website or Google listing link',
    help: "Paste your site or Google Maps link. No site? Just write 'none'.",
    placeholder: 'https://',
  },
  {
    name: 'email',
    label: 'Email',
    help: "We'll send your video audit here.",
    placeholder: 'you@business.com',
    type: 'email',
    autoComplete: 'email',
  },
  {
    name: 'message',
    label: "What's bugging you about your site?",
    help: 'Slow? Outdated? No calls? Anything helps.',
    placeholder: 'Tell us what bugs you about your current site…',
    optional: true,
    multiline: true,
  },
];

export const auditChecklist = ['Speed check', 'Mobile check', 'Google listing check', '3 quick fixes'];

export const plans = [
  {
    name: 'Landing Page',
    price: '$390',
    fullPrice: '$900',
    description: 'One focused page that turns visitors into calls or bookings.',
    features: [
      'Custom design in your colors',
      'Mobile-first, loads in under 2s',
      'Click-to-call, booking or contact form',
      'Google Maps + reviews section',
      'Basic SEO setup',
      '2 rounds of edits · ready in ~7 days',
    ],
    cta: { label: 'Start with a landing page', href: '/audit?plan=landing' },
  },
  {
    name: 'Small Website (3–5 pages)',
    price: '$890',
    fullPrice: '$2,200',
    description: 'Everything a local business needs to look established.',
    features: [
      'Home, Services, About, Gallery, Contact',
      'Everything in Landing Page',
      'Google Business Profile tune-up',
      'Simple copywriting help',
      '2 rounds of edits · ready in ~14 days',
    ],
    cta: { label: 'Get a small website', href: '/audit?plan=small-website' },
    highlighted: true,
  },
  {
    name: 'Hosting & Care',
    price: '$39/mo',
    fullPrice: '$79/mo',
    priceNote: '(locked for 12 months)',
    description: 'We keep it fast, safe and up to date.',
    features: [
      'Hosting, SSL and backups',
      'Up to 30 min of edits per month',
      'Monthly speed & uptime check',
      'Friendly email support, usually same day',
    ],
    cta: { label: 'Add care to any plan', href: '/audit?plan=care' },
  },
];
