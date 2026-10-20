import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { BaseLink } from '../../utils/link-context';
import { cx } from '../../utils/cx';
import { Icon, type IconName } from '../Icon';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
/** Pins a visual state — for documentation only. */
export type ButtonVisualState = 'hover' | 'pressed' | 'focus';

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Full width (mobile menus, cards, forms). */
  block?: boolean;
  /** Use on Forest (inverse) backgrounds. */
  onInverse?: boolean;
  /** Shows the trailing arrow that nudges on hover. */
  showArrow?: boolean;
  /** Leading icon. */
  icon?: IconName;
  visualState?: ButtonVisualState;
  children: ReactNode;
}

export type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
export type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', block, onInverse, showArrow, icon, visualState, className, children, ...rest } = props;
  const classes = cx(
    styles.button,
    styles[variant],
    styles[size],
    block && styles.block,
    onInverse && styles.onInverse,
    visualState && styles[`is-${visualState}`],
    className,
  );
  const content = (
    <>
      {icon && <Icon name={icon} className={styles.icon} />}
      {children}
      {showArrow && <Icon name="arrow-right" className={cx(styles.icon, styles.arrow)} />}
    </>
  );

  if (rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <BaseLink className={classes} {...anchorProps}>
        {content}
      </BaseLink>
    );
  }
  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
