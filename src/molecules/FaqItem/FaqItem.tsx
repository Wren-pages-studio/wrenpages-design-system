import { useId, useState, type ReactNode } from 'react';
import { Icon } from '../../atoms/Icon';
import { cx } from '../../utils/cx';
import styles from './FaqItem.module.css';

export interface FaqItemProps {
  question: ReactNode;
  answer: ReactNode;
  /** Uncontrolled initial state. */
  defaultOpen?: boolean;
  /** Controlled state. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Heading level wrapping the question button. */
  headingLevel?: 2 | 3 | 4;
}

/** FAQ item · Open false|true — accordion with a 200 ms grid-rows transition. */
export function FaqItem({ question, answer, defaultOpen = false, open, onOpenChange, headingLevel = 3 }: FaqItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const panelId = useId();
  const Heading = `h${headingLevel}` as const;

  const toggle = () => {
    const next = !isOpen;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div className={cx(styles.item, isOpen && styles.open)}>
      <Heading className={styles.heading}>
        <button type="button" className={styles.question} aria-expanded={isOpen} aria-controls={panelId} onClick={toggle}>
          <span>{question}</span>
          <Icon name={isOpen ? 'minus' : 'plus'} tone="brand" />
        </button>
      </Heading>
      <div className={styles.answer} id={panelId} role="region" aria-hidden={!isOpen}>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
