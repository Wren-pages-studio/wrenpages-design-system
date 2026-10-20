import { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Error look; also sets aria-invalid. */
  invalid?: boolean;
  /** Pins a visual state — documentation only. */
  visualState?: 'hover' | 'focus';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, visualState, className, type = 'text', ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cx(styles.input, visualState && styles[`is-${visualState}`], className)}
      {...rest}
    />
  );
});
