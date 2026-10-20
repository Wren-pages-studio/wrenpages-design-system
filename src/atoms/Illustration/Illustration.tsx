import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { BirdArt, BirdFlyingArt, PhoneArt } from './artwork';
import styles from './Illustration.module.css';

export type IllustrationType = 'bird' | 'bird-flying' | 'phone' | 'image';
/** Fixed-height placements defined by the layout tokens. */
export type IllustrationPlacement = 'hero' | 'about' | 'message';

export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  type: IllustrationType;
  placement?: IllustrationPlacement;
  /** Alt text. Required for bird/phone art; for `image` it describes the placeholder slot. */
  label?: string;
  /** For `image`: the real <img> (4:3 WebP, lazy, width/height set). */
  children?: ReactNode;
}

const defaultLabels: Record<IllustrationType, string> = {
  bird: 'Wren Pages bird illustration',
  'bird-flying': 'Bird flying away illustration',
  phone: 'Illustration: a small business website on a phone',
  image: 'Image placeholder',
};

/**
 * Illustration · Type bird | bird-flying | phone | image.
 * Never a personal photo: the bird is the mascot, the phone mockup is the hero visual.
 */
export function Illustration({ type, placement, label, className, children, ...rest }: IllustrationProps) {
  const alt = label ?? defaultLabels[type];
  return (
    <div className={cx(styles.illus, styles[type], placement && styles[`placement-${placement}`], className)} {...rest}>
      {type === 'bird' && <BirdArt label={alt} />}
      {type === 'bird-flying' && <BirdFlyingArt label={alt} />}
      {type === 'phone' && <PhoneArt label={alt} />}
      {type === 'image' && (children ?? <span>{alt}</span>)}
    </div>
  );
}
