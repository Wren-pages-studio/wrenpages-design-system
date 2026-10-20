import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import { Icon, type IconName } from '../Icon';
import styles from './IconButton.module.css';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  /** Required accessible name (icon-only control). */
  label: string;
  /** Pressed/selected look, e.g. the open mobile menu. */
  active?: boolean;
  visualState?: 'hover' | 'pressed' | 'focus';
}

export function IconButton({ icon, label, active, visualState, className, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cx(styles.iconButton, active && styles.active, visualState && styles[`is-${visualState}`], className)}
      {...rest}
    >
      <Icon name={icon} />
    </button>
  );
}
