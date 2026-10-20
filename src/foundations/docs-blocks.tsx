/* Storybook doc blocks that render straight from the token objects, so the docs can never drift from the code. */
import { Icon, iconNames } from '../atoms/Icon';
import {
  borderWidth,
  breakpoints,
  grid,
  motion,
  palette,
  radius,
  responsiveText,
  semanticColors,
  shadow,
  size,
  space,
  textStyles,
  zIndex,
} from '../tokens';

const Swatch = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <div className="sb-swatch">
    <div className="sb-swatch__chip" style={{ background: `var(${cssVar})` }} />
    <div className="sb-swatch__meta">
      <strong>{name}</strong>
      <code>{cssVar}</code>
      <code>{value}</code>
    </div>
  </div>
);

export function PrimitivePalette() {
  return (
    <div className="sb-token-grid">
      {Object.entries(palette).flatMap(([family, steps]) =>
        typeof steps === 'string'
          ? [<Swatch key={family} name={family} value={steps} cssVar={`--${family}`} />]
          : Object.entries(steps).map(([step, hex]) => (
              <Swatch key={family + step} name={`${family}/${step}`} value={hex} cssVar={`--${family}-${step}`} />
            )),
      )}
    </div>
  );
}

export function SemanticPalette({ group }: { group: keyof typeof semanticColors }) {
  return (
    <div className="sb-token-grid">
      {Object.entries(semanticColors[group]).map(([name, ref]) => (
        <Swatch key={name} name={`color/${group}/${name}`} value={`→ ${ref.replace('.', '/')}`} cssVar={`--color-${group}-${name}`} />
      ))}
    </div>
  );
}

export function TypeRamp() {
  return (
    <div className="sb-stack">
      {Object.entries(textStyles).map(([name, s]) => (
        <div key={name} className="sb-row">
          <span className="sb-label">
            .wp-text--{name}
            <br />
            {s.size} / {s.lineHeight} · {s.use}
          </span>
          <span className={`wp-text--${name}`}>Small sites. Big first impressions.</span>
        </div>
      ))}
    </div>
  );
}

export function ResponsiveRoles() {
  return (
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Mobile (base)</th>
          <th>Tablet ≥{breakpoints.tablet}</th>
          <th>Desktop ≥{breakpoints.desktop}</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(responsiveText).map(([role, [m, t, d]]) => (
          <tr key={role}>
            <td>
              <code>variant="{role}"</code>
            </td>
            <td>{m}</td>
            <td>{t}</td>
            <td>{d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SpacingScale() {
  return (
    <div className="sb-stack">
      {Object.entries(space).map(([k, v]) => (
        <div key={k} className="sb-row">
          <span className="sb-label">
            --space-{k} · {v}
          </span>
          <div className="sb-space-bar" style={{ width: `var(--space-${k})` }} />
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className="sb-token-grid">
      {Object.entries(radius).map(([k, v]) => (
        <div key={k} className="sb-swatch">
          <div className="sb-swatch__chip" style={{ background: 'var(--color-bg-accent-subtle)', borderRadius: `var(--radius-${k})` }} />
          <div className="sb-swatch__meta">
            <strong>radius/{k}</strong>
            <code>--radius-{k}</code>
            <code>{v}</code>
          </div>
        </div>
      ))}
      {Object.entries(borderWidth).map(([k, v]) => (
        <div key={k} className="sb-swatch">
          <div className="sb-swatch__chip" style={{ borderBottom: `var(--border-width-${k}) solid var(--color-border-brand)` }} />
          <div className="sb-swatch__meta">
            <strong>border/{k}</strong>
            <code>--border-width-{k}</code>
            <code>{v}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SizeTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(size).map(([k, v]) => (
          <tr key={k}>
            <td>
              <code>--size-{k}</code>
            </td>
            <td>{v}</td>
          </tr>
        ))}
        {Object.entries(zIndex).map(([k, v]) => (
          <tr key={k}>
            <td>
              <code>--z-{k}</code>
            </td>
            <td>{v}</td>
          </tr>
        ))}
        {Object.entries(motion).map(([k, v]) => (
          <tr key={k}>
            <td>
              <code>--{k}</code>
            </td>
            <td>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Elevations() {
  return (
    <div className="sb-token-grid">
      {Object.keys(shadow).map((k) => (
        <div key={k} className="sb-swatch" style={{ boxShadow: `var(--shadow-${k})` }}>
          <div className="sb-swatch__meta">
            <strong>Elevation/{k}</strong>
            <code>--shadow-{k}</code>
          </div>
        </div>
      ))}
      <div className="sb-swatch" style={{ boxShadow: 'var(--focus-ring)' }}>
        <div className="sb-swatch__meta">
          <strong>Focus/Ring</strong>
          <code>--focus-ring</code>
        </div>
      </div>
    </div>
  );
}

export function GridTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Columns</th>
          <th>Gutter</th>
          <th>Margin</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(grid).map(([bp, g]) => (
          <tr key={bp}>
            <td>{bp}</td>
            <td>{g.columns}</td>
            <td>{g.gutter}</td>
            <td>{g.margin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function IconGallery() {
  return (
    <div className="sb-token-grid">
      {iconNames.map((name) => (
        <div key={name} className="sb-swatch">
          <div className="sb-swatch__meta">
            <Icon name={name} tone="default" />
            <code>{name}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
