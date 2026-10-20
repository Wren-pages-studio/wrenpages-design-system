import type { ReactNode } from 'react';
import { Badge } from '../../atoms/Badge';
import { Illustration } from '../../atoms/Illustration';
import { Text } from '../../atoms/Text';
import styles from './Hero.module.css';

export interface HeroProps {
  badge?: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  /** Usually a <CtaGroup> with primary + secondary buttons. */
  actions?: ReactNode;
  /** Small muted trust line under the actions. */
  note?: ReactNode;
  /** Defaults to the phone mockup illustration. */
  visual?: ReactNode;
}

/** Hero · Breakpoint. Copy + phone visual; 1 column mobile, 2 columns desktop. */
export function Hero({ badge, title, lead, actions, note, visual }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid}>
        <div className={styles.copy}>
          {badge && <Badge tone="neutral">{badge}</Badge>}
          <Text as="h1" variant="hero" id="hero-title">
            {title}
          </Text>
          <Text variant="lead" tone="secondary">
            {lead}
          </Text>
          {actions}
          {note && (
            <Text variant="caption" tone="muted">
              {note}
            </Text>
          )}
        </div>
        {visual ?? <Illustration type="phone" placement="hero" />}
      </div>
    </section>
  );
}
