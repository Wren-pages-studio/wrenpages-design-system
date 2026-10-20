import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';

/** Content for assistive tech only (screen-reader text). */
export function VisuallyHidden({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cx('wp-sr-only', className)} {...rest} />;
}
