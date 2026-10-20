import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  /** Darker rule used inside the Forest footer. */
  tone?: 'default' | 'inverse';
}

export function Divider({ orientation = 'horizontal', tone = 'default', className, ...rest }: DividerProps) {
  return <hr aria-orientation={orientation} className={cx(styles.divider, styles[orientation], styles[tone], className)} {...rest} />;
}
