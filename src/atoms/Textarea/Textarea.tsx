import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Textarea.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  /** Pins a visual state — documentation only. */
  visualState?: 'hover' | 'focus';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, visualState, className, rows = 4, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cx(styles.textarea, visualState && styles[`is-${visualState}`], className)}
      {...rest}
    />
  );
});
