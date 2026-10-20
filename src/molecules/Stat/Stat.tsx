import type { ReactNode } from 'react';
import { Card } from '../../atoms/Card';
import { cx } from '../../utils/cx';
import styles from './Stat.module.css';

export interface StatProps {
  value: ReactNode;
  label: ReactNode;
  /** Card look used by the About "studio numbers" row. */
  boxed?: boolean;
}

/** Stat · Value, Label ("< 2s · load time"). */
export function Stat({ value, label, boxed = true }: StatProps) {
  const content = (
    <>
      <span className={cx(styles.value, 'wp-text--stat')}>{value}</span>
      <span className={styles.label}>{label}</span>
    </>
  );
  if (!boxed) return <div className={styles.stat}>{content}</div>;
  return (
    <Card as="li" className={cx(styles.stat, styles.boxed)}>
      {content}
    </Card>
  );
}
