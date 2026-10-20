import type { MouseEventHandler, ReactNode } from 'react';
import { Divider } from '../../atoms/Divider';
import { Logo } from '../../atoms/Logo';
import { Text } from '../../atoms/Text';
import { TextLink } from '../../atoms/TextLink';
import { SocialLinks, type SocialLink } from '../../molecules/SocialLinks';
import { BaseLink } from '../../utils/link-context';
import styles from './Footer.module.css';

export interface FooterLink {
  label: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  homeHref?: string;
  tagline: ReactNode;
  social?: SocialLink[];
  columns: FooterColumn[];
  copyright: ReactNode;
  /** Legal line: address and policy links. */
  legal?: ReactNode;
}

/** Footer · Breakpoint. Forest band with brand, link columns and legal line. */
export function Footer({ homeHref = '/', tagline, social, columns, copyright, legal }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <BaseLink href={homeHref} className={styles.logo} aria-label="Wren Pages — home">
              <Logo theme="dark" title="" />
            </BaseLink>
            <Text variant="h4">{tagline}</Text>
            {social && <SocialLinks items={social} />}
          </div>
          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.title} className={styles.column}>
                <Text as="h2" variant="eyebrow" tone="accent" className={styles.columnTitle}>
                  {col.title}
                </Text>
                {col.links.map((link) => (
                  <TextLink
                    key={link.href + String(link.label)}
                    tone="quiet"
                    href={link.href}
                    onClick={link.onClick}
                    className={styles.columnLink}
                  >
                    {link.label}
                  </TextLink>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Divider tone="inverse" />
        <div className={styles.bottom}>
          <p>{copyright}</p>
          {legal && <p>{legal}</p>}
        </div>
      </div>
    </footer>
  );
}

/** Visible marker for unknown content — e.g. the postal address (CAN-SPAM). */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className={styles.placeholder}>{children}</span>;
}
