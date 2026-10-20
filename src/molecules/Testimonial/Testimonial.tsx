import type { ReactNode } from 'react';
import { Card } from '../../atoms/Card';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import styles from './Testimonial.module.css';

export interface StarsProps {
  /** 0–5 */
  rating?: number;
}

/** Star rating — filled stars use color/icon/accent. */
export function Stars({ rating = 5 }: StarsProps) {
  return (
    <div className={styles.stars} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" size="md" filled={i < rating} />
      ))}
    </div>
  );
}

export interface TestimonialProps {
  quote: ReactNode;
  name: ReactNode;
  business: ReactNode;
  rating?: number;
}

/** Testimonial snippet · Quote, Name, Business. */
export function Testimonial({ quote, name, business, rating = 5 }: TestimonialProps) {
  return (
    <Card as="figure" className={styles.testimonial}>
      <Stars rating={rating} />
      <blockquote className="wp-text--body-l">{quote}</blockquote>
      <figcaption>
        <Text as="span" variant="label-s">
          {name}
        </Text>
        <Text as="span" variant="caption" tone="muted" className={styles.business}>
          {business}
        </Text>
      </figcaption>
    </Card>
  );
}
