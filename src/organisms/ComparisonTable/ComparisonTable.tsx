import type { ReactNode } from 'react';
import { CheckMarker } from '../../atoms/CheckMarker';
import { VisuallyHidden } from '../../atoms/VisuallyHidden';
import styles from './ComparisonTable.module.css';

/** `true` = included, `false` = not included, anything else is rendered as-is (bold). */
export type ComparisonValue = boolean | ReactNode;

export interface ComparisonRow {
  feature: ReactNode;
  values: ComparisonValue[];
}

export interface ComparisonTableProps {
  caption: string;
  featureHeader?: string;
  columns: string[];
  rows: ComparisonRow[];
}

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) return <CheckMarker tone="inverse" label="Included" />;
  if (value === false)
    return (
      <>
        <span className={styles.dash} aria-hidden="true">
          —
        </span>
        <VisuallyHidden>Not included</VisuallyHidden>
      </>
    );
  return <strong>{value}</strong>;
}

/** Comparison table · Breakpoint. Forest header, zebra rows, check markers. */
export function ComparisonTable({ caption, featureHeader = 'Feature', columns, rows }: ComparisonTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className="wp-sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{featureHeader}</th>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th scope="row">{row.feature}</th>
              {row.values.map((v, j) => (
                <td key={j}>
                  <Cell value={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
