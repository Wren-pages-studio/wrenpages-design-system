import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { BaseLink } from '../../utils/link-context';
import { cx } from '../../utils/cx';
import styles from './NavItem.module.css';

export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** Current page → aria-current="page" + honey indicator. */
  active?: boolean;
  visualState?: 'hover' | 'focus';
  children: ReactNode;
}

/** Nav item · State default|hover|active|focus. */
export function NavItem({ active, visualState, className, ...rest }: NavItemProps) {
  return (
    <BaseLink
      aria-current={active ? 'page' : undefined}
      className={cx(styles.navItem, visualState && styles[`is-${visualState}`], className)}
      {...rest}
    />
  );
}
