import type { SVGAttributes } from 'react';
import { cx } from '../../utils/cx';
import { glyphs, type IconName } from './glyphs';
import styles from './Icon.module.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconTone = 'current' | 'default' | 'brand' | 'inverse' | 'accent';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  name: IconName;
  /** xs 14 · sm 16 · md 20 · lg 24 (default). */
  size?: IconSize;
  tone?: IconTone;
  /** Heavier 3px stroke, used inside small check markers. */
  bold?: boolean;
  /** Fills the glyph (stars). */
  filled?: boolean;
  /** Accessible label. Without it the icon is decorative (aria-hidden). */
  label?: string;
}

export function Icon({ name, size = 'lg', tone = 'current', bold, filled, label, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx(styles.icon, styles[size], styles[`tone-${tone}`], bold && styles.bold, filled && styles.filled, className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...rest}
    >
      {glyphs[name]}
    </svg>
  );
}
