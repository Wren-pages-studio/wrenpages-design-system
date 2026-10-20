import { Button } from '../../atoms/Button';
import { cx } from '../../utils/cx';
import styles from './StickyCta.module.css';

export interface StickyCtaProps {
  label: string;
  href: string;
  /** Renders in flow instead of fixed (docs). */
  inline?: boolean;
}

/** Mobile sticky CTA — fixed bottom bar below 768px, hidden on larger screens. */
export function StickyCta({ label, href, inline }: StickyCtaProps) {
  return (
    <div className={cx(styles.sticky, inline && styles.inline)}>
      <Button href={href} size="lg" block showArrow>
        {label}
      </Button>
    </div>
  );
}
