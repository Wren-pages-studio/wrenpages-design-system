import type { ReactNode } from 'react';
import { Card } from '../../atoms/Card';
import { Icon, type IconName } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import styles from './InfoCard.module.css';

interface BaseProps {
  title: ReactNode;
  children: ReactNode;
}

export interface StepCardProps extends BaseProps {
  /** Step number shown in the honey disc. */
  step: number;
}

/** Step card · Number, Title, Body (How it works). */
export function StepCard({ step, title, children }: StepCardProps) {
  return (
    <Card as="li" elevation={1} className={styles.step}>
      <span className={styles.stepNumber} aria-hidden="true">
        {step}
      </span>
      <Text as="h3" variant="h4">
        {title}
      </Text>
      <Text variant="body-s" tone="secondary">
        {children}
      </Text>
    </Card>
  );
}

export interface ProblemCardProps extends BaseProps {
  icon: IconName;
}

/** Problem card · Icon, Title, Body (Services / "Why it matters"). */
export function ProblemCard({ icon, title, children }: ProblemCardProps) {
  return (
    <Card as="li" className={styles.problem}>
      <span className={styles.problemIcon}>
        <Icon name={icon} />
      </span>
      <Text as="h3" variant="h4">
        {title}
      </Text>
      <Text variant="body-s" tone="secondary">
        {children}
      </Text>
    </Card>
  );
}
