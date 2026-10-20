import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';
import { Text } from '../../atoms/Text';
import { Textarea } from '../../atoms/Textarea';
import { FormField } from '../../molecules/FormField';
import styles from './AuditForm.module.css';

export interface AuditFieldConfig {
  name: string;
  label: string;
  help?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'url' | 'tel';
  autoComplete?: string;
  optional?: boolean;
  multiline?: boolean;
}

export interface AuditFormProps {
  fields: AuditFieldConfig[];
  values: Record<string, string>;
  errors: Partial<Record<string, string>>;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string) => void;
  onSubmit: NonNullable<HTMLAttributes<HTMLFormElement>['onSubmit']>;
  /** Summary shown in the error alert (role="alert"), e.g. "Please fix 2 fields below." */
  alert?: ReactNode;
  submitLabel: string;
  /** Reassurance line under the button. */
  micro?: ReactNode;
  /** Honeypot input name; bots fill it, people never see it. */
  honeypotName?: string;
  /** Hidden inputs (utm_source…). */
  hidden?: Record<string, string>;
  submitting?: boolean;
  ariaLabel?: string;
}

/**
 * Audit form (presentational). Validation, submission and analytics live in the
 * app; this organism only renders states: default, error (alert + field errors) and submitting.
 */
export function AuditForm({
  fields,
  values,
  errors,
  onChange,
  onBlur,
  onSubmit,
  alert,
  submitLabel,
  micro,
  honeypotName = 'botcheck',
  hidden = {},
  submitting,
  ariaLabel = 'Free audit request',
}: AuditFormProps) {
  return (
    <form className={styles.formReset} noValidate aria-label={ariaLabel} onSubmit={onSubmit}>
      <Card radius="xl" elevation={3} borderless className={styles.form}>
        {alert && (
          <div className={styles.alert} role="alert">
            <Icon name="alert" size="md" />
            <span>{alert}</span>
          </div>
        )}
        {fields.map((f) => {
          const common = {
            name: f.name,
            placeholder: f.placeholder,
            autoComplete: f.autoComplete,
            required: !f.optional,
            value: values[f.name] ?? '',
            onBlur: () => onBlur?.(f.name),
          };
          return (
            <FormField key={f.name} label={f.label} help={f.help} error={errors[f.name]} optional={f.optional}>
              {f.multiline ? (
                <Textarea id={`f-${f.name}`} {...common} onChange={(e) => onChange(f.name, e.target.value)} />
              ) : (
                <Input id={`f-${f.name}`} type={f.type ?? 'text'} {...common} onChange={(e) => onChange(f.name, e.target.value)} />
              )}
            </FormField>
          );
        })}
        {Object.entries(hidden).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
        <label className="wp-sr-only" aria-hidden="true">
          Leave empty
          <input name={honeypotName} tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
        <Button type="submit" size="lg" block showArrow disabled={submitting}>
          {submitLabel}
        </Button>
        {micro && (
          <Text variant="caption" tone="muted" align="center">
            {micro}
          </Text>
        )}
      </Card>
    </form>
  );
}
