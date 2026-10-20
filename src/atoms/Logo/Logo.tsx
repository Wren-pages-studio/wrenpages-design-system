import type { SVGAttributes } from 'react';
import { cx } from '../../utils/cx';
import { BIRD_BODY, WING_FOLD, WING_PAGE, WORDMARK } from './paths';
import styles from './Logo.module.css';

export type LogoType = 'horizontal' | 'symbol' | 'favicon';
export type LogoTheme = 'light' | 'dark';

export interface LogoProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  /** horizontal = symbol + wordmark (primary) · symbol = mark only · favicon = simplified mark (< 24px). */
  type?: LogoType;
  /** `dark` = on Forest backgrounds (cream ring + cream wordmark). */
  theme?: LogoTheme;
  /** Accessible name. Pass "" when the logo sits inside a labelled link. */
  title?: string;
  /** sm = 40px tall (header/footer) · lg = 96px (link-in-bio symbol). */
  size?: 'sm' | 'lg';
}

/**
 * Logo · Theme light|dark × Type. Colors come from semantic tokens, so the
 * mark never drifts from the palette. Minimum: horizontal 120px wide, symbol 16px.
 */
export function Logo({ type = 'horizontal', theme = 'light', title = 'Wren Pages', size = 'sm', className, ...rest }: LogoProps) {
  const labelled = title !== '';
  const viewBox = type === 'horizontal' ? '0 0 423.2 100' : '0 0 100 100';
  return (
    <svg
      viewBox={viewBox}
      className={cx(styles.logo, styles[type], styles[theme], styles[size], className)}
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
      focusable="false"
      {...rest}
    >
      {type === 'favicon' ? (
        <>
          <circle className={styles.disc} cx="50" cy="50" r="50" />
          <g transform="translate(50 52) scale(1.14) translate(-52 -50)">
            <path className={styles.bird} d={BIRD_BODY} />
            <circle className={styles.eye} cx="63.5" cy="37" r="4.6" />
          </g>
        </>
      ) : (
        <>
          {theme === 'dark' ? (
            <circle className={styles.ring} cx="50" cy="50" r="47.5" />
          ) : (
            <circle className={styles.disc} cx="50" cy="50" r="50" />
          )}
          <path className={styles.bird} d={BIRD_BODY} />
          <g className={styles.wing} transform="rotate(-18 47 56)">
            <path d={WING_PAGE} />
            <path className={styles.fold} d={WING_FOLD} />
          </g>
          <circle className={styles.eye} cx="64" cy="36" r="3.4" />
          {type === 'horizontal' && <path className={styles.wordmark} d={WORDMARK} />}
        </>
      )}
    </svg>
  );
}
