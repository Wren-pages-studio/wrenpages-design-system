import type { ReactNode } from 'react';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { Text } from '../../atoms/Text';
import { VisuallyHidden } from '../../atoms/VisuallyHidden';
import { FeatureRow } from '../../molecules/FeatureRow';
import styles from './PricingCard.module.css';

export interface PricingCardProps {
  name: ReactNode;
  /** Launch price, e.g. "$390". */
  price: ReactNode;
  /** Full price shown struck through — prices are always full + launch. */
  fullPrice: ReactNode;
  /** e.g. "(locked for 12 months)". */
  priceNote?: ReactNode;
  description: ReactNode;
  features: ReactNode[];
  cta: { label: string; href: string };
  /** Brand outline + raised shadow + accent "Most popular" badge + primary CTA. */
  highlighted?: boolean;
  highlightLabel?: ReactNode;
  badgeLabel?: ReactNode;
}

/** Pricing card · Highlighted false|true. */
export function PricingCard({
  name,
  price,
  fullPrice,
  priceNote,
  description,
  features,
  cta,
  highlighted,
  highlightLabel = 'Most popular',
  badgeLabel = 'Launch price',
}: PricingCardProps) {
  return (
    <Card as="article" radius="xl" padding="lg" elevation={highlighted ? 2 : 1} highlighted={highlighted} className={styles.card}>
      <div className={styles.badges}>
        <Badge tone="brand">{badgeLabel}</Badge>
        {highlighted && (
          <Badge tone="accent" icon="star">
            {highlightLabel}
          </Badge>
        )}
      </div>
      <Text as="h3" variant="h3">
        {name}
      </Text>
      <p className={styles.price}>
        <VisuallyHidden>Launch price</VisuallyHidden>
        <span className={styles.now}>{price}</span>
        <VisuallyHidden>, full price</VisuallyHidden>
        <s className={styles.full}>{fullPrice}</s>
        {priceNote && <span className={styles.note}>{priceNote}</span>}
      </p>
      <Text tone="secondary">{description}</Text>
      <ul className={styles.features}>
        {features.map((feature, i) => (
          <FeatureRow key={i}>{feature}</FeatureRow>
        ))}
      </ul>
      <Button href={cta.href} variant={highlighted ? 'primary' : 'secondary'} size="lg" block showArrow>
        {cta.label}
      </Button>
    </Card>
  );
}
