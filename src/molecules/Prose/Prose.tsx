import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Prose.module.css';

export type ProseProps = HTMLAttributes<HTMLDivElement>;

/**
 * Long-form text (Privacy Policy, Terms…). Style plain semantic HTML with the
 * text styles: `<section>` groups a heading with its content, `<h2>` uses
 * Heading/H3, paragraphs and list items Body/M, lists get bullets, links the
 * text-link look. Put it inside a `Container width="prose"` (720px measure).
 */
export function Prose({ className, ...rest }: ProseProps) {
  return <div className={cx(styles.prose, className)} {...rest} />;
}
