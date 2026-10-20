import type { ElementType, HTMLAttributes } from 'react';
import { cx } from '../utils/cx';
import styles from './Layout.module.css';

type SpaceStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

interface PolymorphicProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

/* ── Section ─────────────────────────────────────────────────────────── */
export type SectionTone = 'canvas' | 'subtle' | 'inverse' | 'accent-subtle';

export interface SectionProps extends PolymorphicProps {
  tone?: SectionTone;
  /** Removes the top/bottom padding when two sections of the same tone stack. */
  flush?: 'top' | 'bottom' | 'both';
  /** Centers text inside the section. */
  centered?: boolean;
}

/** Full-bleed band with the responsive section padding (64 mobile / 96 desktop). */
export function Section({ as: Tag = 'section', tone = 'canvas', flush, centered, className, ...rest }: SectionProps) {
  return (
    <Tag
      className={cx(styles.section, styles[`tone-${tone}`], flush && styles[`flush-${flush}`], centered && styles.centered, className)}
      {...rest}
    />
  );
}

/* ── Container ───────────────────────────────────────────────────────── */
export interface ContainerProps extends PolymorphicProps {
  /** default 1120 · prose 720 · message 640 · linkbio 480. */
  width?: 'default' | 'prose' | 'message' | 'linkbio';
  /** Centers children on the cross axis. */
  center?: boolean;
}

/** Max-width column with the vertical rhythm between section blocks (32 → 48 desktop). */
export function Container({ as: Tag = 'div', width = 'default', center, className, ...rest }: ContainerProps) {
  return <Tag className={cx(styles.container, styles[`width-${width}`], center && styles.center, className)} {...rest} />;
}

/* ── Stack ───────────────────────────────────────────────────────────── */
export interface StackProps extends PolymorphicProps {
  gap?: SpaceStep;
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: boolean;
}

/** Flex stack whose gap is always a spacing token. */
export function Stack({ as: Tag = 'div', gap = 4, direction = 'column', align, justify, wrap, className, ...rest }: StackProps) {
  return (
    <Tag
      className={cx(
        styles.stack,
        styles[`gap-${gap}`],
        styles[`dir-${direction}`],
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
        wrap && styles.wrap,
        className,
      )}
      {...rest}
    />
  );
}

/* ── Grid ────────────────────────────────────────────────────────────── */
export type GridVariant = 'three' | 'four' | 'work' | 'pricing' | 'stats';

export interface GridProps extends PolymorphicProps {
  /**
   * three — problems/testimonials (1 → 3)
   * four — steps (1 → 2 → 4)
   * work — portfolio (1 → 2 → 3)
   * pricing — plans (1 → single 560 column → 3)
   * stats — studio numbers (1 → 3)
   */
  variant: GridVariant;
}

export function Grid({ as: Tag = 'ul', variant, className, ...rest }: GridProps) {
  return <Tag className={cx(styles.grid, styles[`grid-${variant}`], className)} {...rest} />;
}
