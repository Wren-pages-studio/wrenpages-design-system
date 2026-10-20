import type { ReactNode } from 'react';
import { Text } from '../../atoms/Text';
import { cx } from '../../utils/cx';
import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  /** h1 for the page title, h2 for sections (default). */
  level?: 1 | 2;
  /** `page` uses the page-title ramp (36 → 48), `section` the section ramp (30 → 40). */
  size?: 'section' | 'page';
  align?: 'start' | 'center';
  /** Use on Forest sections: eyebrow turns honey, text cream. */
  inverse?: boolean;
  id?: string;
}

/** Eyebrow + title + lead block that opens every section. */
export function SectionHeading({ eyebrow, title, lead, level = 2, size, align = 'start', inverse, id }: SectionHeadingProps) {
  const variant = size ?? (level === 1 ? 'page' : 'section');
  return (
    <div className={cx(styles.heading, styles[align])}>
      {eyebrow && (
        <Text variant="eyebrow" tone={inverse ? 'accent' : 'brand'}>
          {eyebrow}
        </Text>
      )}
      <Text as={`h${level}`} variant={variant} id={id}>
        {title}
      </Text>
      {lead && (
        <Text variant="lead" tone={inverse ? 'inherit' : 'secondary'} measure>
          {lead}
        </Text>
      )}
    </div>
  );
}
