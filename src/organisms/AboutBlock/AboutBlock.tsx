import type { ReactNode } from 'react';
import { Illustration } from '../../atoms/Illustration';
import { Text } from '../../atoms/Text';
import styles from './AboutBlock.module.css';

export interface AboutBlockProps {
  eyebrow: ReactNode;
  title: ReactNode;
  /** h1 on the About page, h2 on Home. */
  level?: 1 | 2;
  /** Body paragraphs. */
  paragraphs: ReactNode[];
  /** Highlighted brand line ("Like the wren…"). */
  highlight?: ReactNode;
  signature?: ReactNode;
  /** Extra content after the signature (link, note). */
  footer?: ReactNode;
  id?: string;
}

/** About · Length short|full. Bird illustration + story; signed "— The Wren Pages team". */
export function AboutBlock({
  eyebrow,
  title,
  level = 2,
  paragraphs,
  highlight,
  signature = '— The Wren Pages team',
  footer,
  id = 'about-title',
}: AboutBlockProps) {
  return (
    <div className={styles.grid}>
      <Illustration type="bird" placement="about" />
      <div className={styles.copy}>
        <Text variant="eyebrow" tone="brand">
          {eyebrow}
        </Text>
        <Text as={`h${level}`} variant={level === 1 ? 'page' : 'section'} id={id}>
          {title}
        </Text>
        {paragraphs.map((p, i) => (
          <Text key={i} tone="secondary">
            {p}
          </Text>
        ))}
        {highlight && <p className={styles.highlight}>{highlight}</p>}
        <Text variant="h4">{signature}</Text>
        {footer}
      </div>
    </div>
  );
}
