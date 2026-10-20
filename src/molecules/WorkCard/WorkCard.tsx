import type { MouseEventHandler, ReactNode } from 'react';
import { Badge } from '../../atoms/Badge';
import { Card } from '../../atoms/Card';
import { BeforeAfterArt, type ScreenTone } from '../../atoms/Illustration';
import { Text } from '../../atoms/Text';
import { TextLink } from '../../atoms/TextLink';
import styles from './WorkCard.module.css';

export interface WorkCardProps {
  name: ReactNode;
  /** Project type, e.g. "Café landing page". */
  type: ReactNode;
  /** Concept pieces always carry the "Demo project" badge. */
  demo?: boolean;
  /** Placeholder art tone until real before/after screenshots exist. */
  tone?: ScreenTone;
  /** Real screenshot (4:3 WebP). Replaces the placeholder art. */
  media?: ReactNode;
  /** Caption pinned on the media (e.g. "[PLACEHOLDER] Before / after"). */
  mediaCaption?: ReactNode;
  link?: { href: string; label: ReactNode; onClick?: MouseEventHandler<HTMLAnchorElement> };
}

/** Work card · Name, Type, Show link. */
export function WorkCard({ name, type, demo = true, tone = 'accent', media, mediaCaption, link }: WorkCardProps) {
  return (
    <Card as="li" elevation={1} padding="none">
      <div className={styles.media}>
        {media ?? <BeforeAfterArt tone={tone} />}
        {mediaCaption && <span className={styles.caption}>{mediaCaption}</span>}
      </div>
      <div className={styles.body}>
        {demo && <Badge tone="outline">Demo project</Badge>}
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
