import type { ReactNode } from 'react';
import { Illustration } from '../../atoms/Illustration';
import { Text } from '../../atoms/Text';
import { Container } from '../../layout';
import styles from './Message.module.css';

export interface MessageProps {
  /** thanks = sitting bird · 404 = bird flying away. */
  type: 'thanks' | 'not-found';
  title: ReactNode;
  lead: ReactNode;
  /** Buttons / links under the lead. */
  actions?: ReactNode;
}

/** Message · Type thanks|404 — centered illustration, H1, lead and actions. */
export function Message({ type, title, lead, actions }: MessageProps) {
  return (
    <section className={styles.message}>
      <Container width="message" center className={styles.container}>
        <Illustration type={type === 'thanks' ? 'bird' : 'bird-flying'} placement="message" />
        <Text as="h1" variant="page">
          {title}
        </Text>
        <Text variant="lead" tone="secondary">
          {lead}
        </Text>
        {actions}
      </Container>
    </section>
  );
}
