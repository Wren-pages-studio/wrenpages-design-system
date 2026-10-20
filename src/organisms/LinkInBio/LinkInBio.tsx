import type { ReactNode } from 'react';
import { Logo } from '../../atoms/Logo';
import { Text } from '../../atoms/Text';
import { LinkButton, type LinkButtonProps } from '../../molecules/LinkButton';
import { SocialLinks, type SocialLink } from '../../molecules/SocialLinks';
import { BaseLink } from '../../utils/link-context';
import styles from './LinkInBio.module.css';

export type LinkInBioItem = Omit<LinkButtonProps, 'children'> & { id: string; label: ReactNode };

export interface LinkInBioProps {
  homeHref?: string;
  name: ReactNode;
  tagline: ReactNode;
  links: LinkInBioItem[];
  social?: SocialLink[];
  siteLabel: ReactNode;
}

/** Link-in-bio (/links) · Breakpoint. Centered 480px column for Instagram/TikTok traffic. */
export function LinkInBio({ homeHref = '/', name, tagline, links, social, siteLabel }: LinkInBioProps) {
  return (
    <main className={styles.linkbio} id="main">
      <div className={styles.column}>
        <BaseLink href={homeHref} aria-label="Wren Pages — home" className={styles.symbol}>
          <Logo type="symbol" size="lg" title="" />
        </BaseLink>
        <div>
          <Text as="h1" variant="h3">
            {name}
          </Text>
          <Text tone="secondary">{tagline}</Text>
        </div>
        <nav className={styles.links} aria-label="Links">
          {links.map(({ id, label, ...link }) => (
            <LinkButton key={id} {...link}>
              {label}
            </LinkButton>
          ))}
        </nav>
        {social && <SocialLinks items={social} />}
        <BaseLink href={homeHref} className={styles.site}>
          {siteLabel}
        </BaseLink>
      </div>
    </main>
  );
}
