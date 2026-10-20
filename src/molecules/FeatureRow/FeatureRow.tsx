import type { ReactNode } from 'react';
import { CheckMarker } from '../../atoms/CheckMarker';
import { cx } from '../../utils/cx';
import styles from './FeatureRow.module.css';

export interface FeatureRowProps {
  children: ReactNode;
  /** Excluded features render muted. */
  included?: boolean;
  /**
   * brand — pricing card rows (body text)
   * accent — audit bullets on Forest (inherits inverse text)
   */
  tone?: 'brand' | 'accent';
  as?: 'li' | 'div';
}

/** Pricing feature row · Included true|false (also the audit checklist bullet). */
export function FeatureRow({ children, included = true, tone = 'brand', as: Tag = 'li' }: FeatureRowProps) {
  return (
    <Tag className={cx(styles.feature, styles[tone], !included && styles.excluded)}>
      <CheckMarker tone={included ? tone : 'muted'} label={included ? undefined : 'Not included:'} />
      <span>{children}</span>
    </Tag>
  );
}
