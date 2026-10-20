import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Choice.module.css';

export interface ChoiceProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  /** Pins the focus ring — documentation only. */
  visualFocus?: boolean;
}

const makeChoice = (type: 'checkbox' | 'radio') =>
  forwardRef<HTMLInputElement, ChoiceProps>(function Choice({ label, visualFocus, className, ...rest }, ref) {
    return (
      <label className={cx(styles.choice, className)}>
        <input ref={ref} type={type} className={cx(styles.control, styles[type], visualFocus && styles['is-focus'])} {...rest} />
        <span>{label}</span>
      </label>
    );
  });

/** Checkbox · Checked × State default|focus|disabled. */
export const Checkbox = makeChoice('checkbox');
/** Radio · Checked × State default|focus|disabled. */
export const Radio = makeChoice('radio');
