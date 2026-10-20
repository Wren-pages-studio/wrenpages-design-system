import type { ReactNode } from 'react';
import { Text } from '../../atoms/Text';
import styles from './CtaBand.module.css';

export interface CtaBandProps {
  title: ReactNode;
  /** Usually a primary <Button>. */
  action: ReactNode;
}

/** CTA band · Forest rounded panel with a title and one action. */
export function CtaBand({ title, action }: CtaBandProps) {
  return (
    <div className={styles.band}>
      <Text as="h2" variant="section">
        {title}
      </Text>
      {action}
    </div>
  );
}
