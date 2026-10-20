import type { MouseEventHandler } from 'react';
import { Icon, type IconName } from '../../atoms/Icon';
import { BaseLink } from '../../utils/link-context';
import styles from './SocialLinks.module.css';

export interface SocialLink {
  icon: IconName;
  href: string;
  /** Accessible name, e.g. "Wren Pages on Instagram (@wrenpages)". */
  label: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface SocialLinksProps {
  items: SocialLink[];
}

/** Social links · Items IG | TikTok | Mail (44px round targets). */
export function SocialLinks({ items }: SocialLinksProps) {
  return (
    <div className={styles.social}>
      {items.map((item) => (
        <BaseLink key={item.label} href={item.href} aria-label={item.label} onClick={item.onClick} className={styles.link}>
          <Icon name={item.icon} />
        </BaseLink>
      ))}
    </div>
  );
}
