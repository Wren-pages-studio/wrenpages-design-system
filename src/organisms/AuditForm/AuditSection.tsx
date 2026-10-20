import type { ReactNode } from 'react';
import { Text } from '../../atoms/Text';
import { FeatureRow } from '../../molecules/FeatureRow';
import { SectionHeading } from '../../molecules/SectionHeading';
import { Container, Section } from '../../layout';
import sectionStyles from './AuditSection.module.css';

export interface AuditSectionProps {
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  /** `page` renders the title as the page H1 (the /audit screen). */
  variant?: 'section' | 'page';
  checklistTitle?: ReactNode;
  checklist: ReactNode[];
  /** e.g. "Prefer email? …" */
  alternative?: ReactNode;
  /** The <AuditForm>. */
  form: ReactNode;
  id?: string;
}

/** Audit form · Variant section|page — Forest band with copy + checklist and the form card. */
export function AuditSection({
  eyebrow,
  title,
  lead,
  variant = 'section',
  checklistTitle,
  checklist,
  alternative,
  form,
  id = 'audit',
}: AuditSectionProps) {
  return (
    <Section tone="inverse" id={id} aria-labelledby={`${id}-title`}>
      <Container>
        <div className={sectionStyles.grid}>
          <div className={sectionStyles.copy}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              lead={lead}
              level={variant === 'page' ? 1 : 2}
              size={variant === 'page' ? 'page' : 'section'}
              inverse
              id={`${id}-title`}
            />
            {checklistTitle && (
              <Text as="h2" variant="h4">
                {checklistTitle}
              </Text>
            )}
            <ul className={sectionStyles.checklist}>
              {checklist.map((item, i) => (
                <FeatureRow key={i} tone="accent">
                  {item}
                </FeatureRow>
              ))}
            </ul>
            {alternative && <p className={sectionStyles.alternative}>{alternative}</p>}
          </div>
          {form}
        </div>
      </Container>
    </Section>
  );
}
