import type { MouseEventHandler, ReactNode } from 'react';
import { Badge, type BadgeTone } from '../../atoms/Badge';
import { Card } from '../../atoms/Card';
import { BeforeAfterArt, type ScreenTone } from '../../atoms/Illustration';
import { Text } from '../../atoms/Text';
import { TextLink } from '../../atoms/TextLink';
import styles from './WorkCard.module.css';

export interface WorkCardBadge {
  label: ReactNode;
  tone?: BadgeTone;
}

export interface WorkCardProps {
  name: ReactNode;
  /** Project type, e.g. "Café landing page". */
  type: ReactNode;
  /**
   * Label of the project status. Concept sites use `{ label: 'Concept', tone: 'accent' }`.
   * Overrides `demo`.
   */
  badge?: WorkCardBadge;
  /** @deprecated since 1.1.0 — use `badge`. Shows the v1.0 "Demo project" outline badge. */
  demo?: boolean;
  /** Placeholder art tone until real before/after screenshots exist. */
  tone?: ScreenTone;
  /** Card artwork or real screenshot (4:3 WebP), e.g. `<ConceptSiteArt motif="house" />`. Replaces the placeholder art. */
  media?: ReactNode;
  /** Caption pinned on the media (e.g. "Sample site for a fictional business"). */
  mediaCaption?: ReactNode;
  link?: { href: string; label: ReactNode; onClick?: MouseEventHandler<HTMLAnchorElement> };
}

/** Work card · Name, Type, Badge, Show link. */
export function WorkCard({ name, type, badge, demo = true, tone = 'accent', media, mediaCaption, link }: WorkCardProps) {
  const status = badge ?? (demo ? { label: 'Demo project', tone: 'outline' as const } : undefined);
  return (
    <Card as="li" elevation={1} padding="none">
      <div className={styles.media}>
        {media ?? <BeforeAfterArt tone={tone} />}
        {mediaCaption && <span className={styles.caption}>{mediaCaption}</span>}
      </div>
      <div className={styles.body}>
        {status && <Badge tone={status.tone ?? 'outline'}>{status.label}</Badge>}
        <Text as="h3" variant="h4">
          {name}
        </Text>
        <Text variant="body-s" tone="secondary">
          {type}
        </Text>
        {link && (
          <TextLink href={link.href} onClick={link.onClick}>
            {link.label}
          </TextLink>
        )}
      </div>
    </Card>
  );
}
