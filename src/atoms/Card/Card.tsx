import type { ElementType, HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** 0 none · 1 card (steps, work, pricing) · 2 raised (highlighted plan) · 3 overlay (form card). */
  elevation?: 0 | 1 | 2 | 3;
  /** lg 20 = content cards · xl 28 = pricing & form cards. */
  radius?: 'lg' | 'xl';
  /** md 24 · lg 32 · none (media cards manage their own padding). */
  padding?: 'none' | 'md' | 'lg';
  /** Brand 2px outline — the highlighted pricing card. */
  highlighted?: boolean;
  /** Hides the 1px hairline (form card over Forest). */
  borderless?: boolean;
}

/** Surface container shared by step, problem, testimonial, work, pricing and form cards. */
export function Card({
  as: Tag = 'div',
  elevation = 0,
  radius = 'lg',
  padding = 'md',
  highlighted,
  borderless,
  className,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cx(
        styles.card,
        styles[`radius-${radius}`],
        styles[`padding-${padding}`],
        styles[`elevation-${elevation}`],
        highlighted && styles.highlighted,
        borderless && styles.borderless,
        className,
      )}
      {...rest}
    />
  );
}
