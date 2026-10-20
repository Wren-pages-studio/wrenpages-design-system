import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../atoms/Icon';
import { BaseLink } from '../../utils/link-context';
import { cx } from '../../utils/cx';
import styles from './LinkButton.module.css';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: IconName;
  variant?: 'default' | 'primary';
  /** Small muted note before the arrow, e.g. "external". */
  note?: string;
  visualState?: 'hover';
  children: ReactNode;
}

/** Link button (/links) · Variant default|primary × State default|hover. */
export function LinkButton({ icon, variant = 'default', note, visualState, className, children, ...rest }: LinkButtonProps) {
  return (
    <BaseLink className={cx(styles.linkButton, styles[variant], visualState && styles['is-hover'], className)} {...rest}>
      <Icon name={icon} />
      <span className={styles.label}>{children}</span>
      {note && <small className={styles.note}>{note}</small>}
      <Icon name="arrow-right" />
    </BaseLink>
  );
}
