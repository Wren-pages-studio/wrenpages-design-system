import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from 'react';
import { Icon } from '../../atoms/Icon';
import { cx } from '../../utils/cx';
import styles from './FormField.module.css';

interface ControlProps {
  id?: string;
  'aria-describedby'?: string;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export interface FormFieldProps {
  label: ReactNode;
  /** Help text; hidden while an error is shown. */
  help?: ReactNode;
  /** Error message; turns the field into the error state. */
  error?: ReactNode;
  /** Adds the muted "(optional)" marker to the label. */
  optional?: boolean;
  disabled?: boolean;
  /** The control: <Input>, <Textarea> or <Select>. Wired with id + aria-describedby. */
  children: ReactElement<ControlProps>;
  className?: string;
}

/** Form field · State default|error|disabled. Label, help and error are always tied to the control. */
export function FormField({ label, help, error, optional, disabled, children, className }: FormFieldProps) {
  const autoId = useId();
  const id = (isValidElement(children) && children.props.id) || autoId;
  const helpId = `${id}-help`;
  const errorId = `${id}-err`;
  const control = cloneElement(children, {
    id,
    'aria-describedby': [help && helpId, errorId].filter(Boolean).join(' '),
    invalid: Boolean(error),
    disabled: disabled ?? children.props.disabled,
  });

  return (
    <div className={cx(styles.field, Boolean(error) && styles.hasError, disabled && styles.disabled, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {optional && <span className={styles.optional}> (optional)</span>}
      </label>
      {control}
      {help && (
        <p className={styles.help} id={helpId}>
          {help}
        </p>
      )}
      <p className={styles.error} id={errorId} aria-live="polite">
        {error && (
          <>
            <Icon name="alert" size="sm" />
            <span>{error}</span>
          </>
        )}
      </p>
    </div>
  );
}
