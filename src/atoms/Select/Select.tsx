import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import { Icon } from '../Icon';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  /** Shown as the first, empty option. */
  placeholder?: string;
  invalid?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { options, placeholder, invalid, className, ...rest },
  ref,
) {
  return (
    <span className={cx(styles.select, className)}>
      <select ref={ref} aria-invalid={invalid || undefined} className={styles.control} {...rest}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>
            {o.label}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className={styles.chevron} />
    </span>
  );
});
