import styles from './SkipLink.module.css';

export interface SkipLinkProps {
  /** Id of the main landmark. */
  targetId?: string;
  label?: string;
}

export function SkipLink({ targetId = 'main', label = 'Skip to content' }: SkipLinkProps) {
  return (
    <a className={styles.skipLink} href={`#${targetId}`}>
      {label}
    </a>
  );
}
