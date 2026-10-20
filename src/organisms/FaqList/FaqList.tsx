import type { ReactNode } from 'react';
import { FaqItem } from '../../molecules/FaqItem';
import styles from './FaqList.module.css';

export interface FaqEntry {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

export interface FaqListProps {
  items: FaqEntry[];
  /** Ids open on first render (the design opens the first question). */
  defaultOpenIds?: string[];
  /** e.g. a "See all questions →" link. */
  footer?: ReactNode;
}

/** FAQ · Breakpoint × Items (4/3/9). 720px column of accordion items. */
export function FaqList({ items, defaultOpenIds = [], footer }: FaqListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {items.map((item) => (
          <FaqItem key={item.id} question={item.question} answer={item.answer} defaultOpen={defaultOpenIds.includes(item.id)} />
        ))}
      </div>
      {footer && <p className={styles.footer}>{footer}</p>}
    </div>
  );
}
