import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './CtaGroup.module.css';

export interface CtaGroupProps {
  /**
   * responsive — stacked full-width on mobile, horizontal from tablet (default)
   * horizontal — always in a row
   */
  layout?: 'responsive' | 'horizontal';
  /** Center the group (thanks/404 messages). */
  center?: boolean;
  children: ReactNode;
}

/** CTA group · Layout horizontal|stacked. */
export function CtaGroup({ layout = 'responsive', center, children }: CtaGroupProps) {
  return <div className={cx(styles.group, styles[layout], center && styles.center)}>{children}</div>;
}
