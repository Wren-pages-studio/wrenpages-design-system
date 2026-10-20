import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Icon, type IconName } from '../Icon';
import styles from './Badge.module.css';

export type BadgeTone = 'accent' | 'brand' | 'neutral' | 'success' | 'error' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  icon?: IconName;
  children: ReactNode;
}

export function Badge({ tone = 'neutral', icon, className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx(styles.badge, styles[tone], className)} {...rest}>
      {icon && <Icon name={icon} size="sm" />}
      {children}
    </span>
  );
}
