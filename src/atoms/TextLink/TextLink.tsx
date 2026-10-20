import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { BaseLink } from '../../utils/link-context';
import { cx } from '../../utils/cx';
import styles from './TextLink.module.css';

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** `inverse` for Forest backgrounds; `quiet` for footer/menu lists (no underline until hover). */
  tone?: 'default' | 'inverse' | 'quiet';
  visualState?: 'hover' | 'focus' | 'visited';
  children: ReactNode;
}

export function TextLink({ tone = 'default', visualState, className, ...rest }: TextLinkProps) {
  return <BaseLink className={cx(styles.link, styles[tone], visualState && styles[`is-${visualState}`], className)} {...rest} />;
}
