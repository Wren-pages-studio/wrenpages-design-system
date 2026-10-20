import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import type { ResponsiveTextRole, TextStyleName } from '../../tokens';
import { cx } from '../../utils/cx';
import styles from './Text.module.css';

export type TextVariant = TextStyleName | ResponsiveTextRole;
export type TextTone = 'inherit' | 'primary' | 'secondary' | 'muted' | 'brand' | 'inverse' | 'accent' | 'error' | 'success';
export type TextAlign = 'start' | 'center';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Rendered element. Pick it for semantics, pick `variant` for looks. */
  as?: ElementType;
  /**
   * A Figma text style (`h2`, `body-s`, `eyebrow`…) or a responsive role that
   * changes with the page width: `hero`, `page`, `section`, `lead`, `stat`.
   */
  variant?: TextVariant;
  tone?: TextTone;
  align?: TextAlign;
  /** Limits the line length to the prose measure (720px). */
  measure?: boolean;
  children?: ReactNode;
}

export function Text({ as: Tag = 'p', variant = 'body-m', tone = 'inherit', align, measure, className, ...rest }: TextProps) {
  return (
    <Tag
      className={cx(`wp-text--${variant}`, styles[`tone-${tone}`], align && styles[`align-${align}`], measure && styles.measure, className)}
      {...rest}
    />
  );
}
