import { cx } from '../../utils/cx';
import { Icon } from '../Icon';
import styles from './CheckMarker.module.css';

export interface CheckMarkerProps {
  /**
   * brand — pricing feature rows (forest on forest-100)
   * accent — audit bullets on Forest (ink on honey)
   * inverse — comparison table (honey on forest)
   * muted — excluded feature
   */
  tone?: 'brand' | 'accent' | 'inverse' | 'muted';
  /** Screen-reader text, e.g. "Included". Omit when the row text already says it. */
  label?: string;
  className?: string;
}

/** 24px round check marker. */
export function CheckMarker({ tone = 'brand', label, className }: CheckMarkerProps) {
  return (
    <span className={cx(styles.marker, styles[tone], className)}>
      <Icon name="check" size="xs" bold />
      {label && <span className="wp-sr-only">{label}</span>}
    </span>
  );
}
