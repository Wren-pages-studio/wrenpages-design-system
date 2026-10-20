import type { ReactNode } from 'react';
import { SectionHeading } from '../../molecules/SectionHeading';
import { Container } from '../../layout';
import styles from './PageHeader.module.css';

export interface PageHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
}

/** Page header (inner pages): eyebrow + H1 + lead, tighter padding than a section. */
export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <Container className={styles.container}>
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} level={1} />
      </Container>
    </section>
  );
}
