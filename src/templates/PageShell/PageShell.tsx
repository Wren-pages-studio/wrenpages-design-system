import type { ReactNode } from 'react';
import { SkipLink } from '../../atoms/SkipLink';
import { cx } from '../../utils/cx';
import styles from './PageShell.module.css';

export interface PageShellProps {
  /** <Header> organism. Omit for chromeless pages (/links). */
  header?: ReactNode;
  /** <Footer> organism. */
  footer?: ReactNode;
  /** <StickyCta> shown on mobile; reserves space at the bottom of the page. */
  stickyCta?: ReactNode;
  /** Page content. Wrapped in <main id="main"> unless `bareMain` is set. */
  children: ReactNode;
  /** The content provides its own <main> landmark (e.g. LinkInBio). */
  bareMain?: boolean;
}

/**
 * Template · Page shell: skip link + header + main + footer (+ sticky CTA).
 * Declares the `page` size container every organism responds to
 * (mobile base → tablet ≥768 → desktop ≥1280), exactly like the Figma variants.
 */
export function PageShell({ header, footer, stickyCta, children, bareMain }: PageShellProps) {
  return (
    <div className={cx(styles.page, Boolean(stickyCta) && styles.hasSticky)}>
      <SkipLink />
      {header}
      {bareMain ? children : <main id="main">{children}</main>}
      {footer}
      {stickyCta}
    </div>
  );
}
