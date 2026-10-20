import { BIRD_BODY, WING_FOLD, WING_PAGE } from '../Logo/paths';
import s from './Illustration.module.css';

const STAR = 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z';

function BirdShape() {
  return (
    <>
      <circle className={s.inverse} cx="50" cy="50" r="50" />
      <path className={s.accent} d={BIRD_BODY} />
      <g className={s.wing} transform="rotate(-18 47 56)">
        <path d={WING_PAGE} />
        <path className={s.inverse} d={WING_FOLD} />
      </g>
      <circle className={s.inverse} cx="64" cy="36" r="3.4" />
    </>
  );
}

export function BirdArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={label}>
      <BirdShape />
    </svg>
  );
}

export function BirdFlyingArt({ label }: { label: string }) {
  return (
    <svg viewBox="-10 -10 150 120" role="img" aria-label={label}>
      <path className={s.speedAccent} d="M4 46h22" />
      <path className={s.speedBrand} d="M0 62h30" />
      <path className={s.speedAccent} d="M10 78h18" />
      <g transform="translate(36 0) rotate(-14 50 50)">
        <BirdShape />
      </g>
    </svg>
  );
}

export function PhoneArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 200 380" role="img" aria-label={label}>
      <rect className={s.phoneFrame} x="4" y="4" width="192" height="372" rx="30" />
      <rect className={s.border} x="78" y="16" width="44" height="6" rx="3" />
      <rect className={s.inverse} x="22" y="36" width="156" height="26" rx="8" />
      <circle className={s.accent} cx="38" cy="49" r="7" />
      <rect className={s.textInverse} x="52" y="45" width="50" height="8" rx="4" />
      <rect className={s.accentSubtle} x="22" y="74" width="156" height="104" rx="12" />
      <path className={s.accent} d="M40 160l32-40 22 26 16-16 32 30z" />
      <circle className={s.accent} cx="140" cy="100" r="11" />
      <rect className={s.textPrimary} x="22" y="192" width="120" height="12" rx="6" />
      <rect className={s.border} x="22" y="212" width="150" height="7" rx="3.5" />
      <rect className={s.border} x="22" y="226" width="130" height="7" rx="3.5" />
      <rect className={s.actionPrimary} x="22" y="248" width="92" height="28" rx="14" />
      <g className={s.accent}>
        {[22, 38, 54, 70, 86].map((x) => (
          <path key={x} transform={`translate(${x} 292) scale(.55)`} d={STAR} />
        ))}
      </g>
      <rect className={s.brandSubtle} x="22" y="314" width="156" height="40" rx="10" />
      <rect className={s.inverse} x="34" y="328" width="70" height="8" rx="4" />
    </svg>
  );
}

export type ScreenTone = 'accent' | 'brand' | 'error';

/** Before/after split used by work cards (placeholder until real screenshots exist). */
export function BeforeAfterArt({ tone = 'accent' }: { tone?: ScreenTone }) {
  const hero = { accent: s.accent, brand: s.brandSubtle, error: s.errorSubtle }[tone];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className={s.subtle} width="200" height="300" />
      <rect className={s.border} x="20" y="24" width="160" height="18" />
      <rect className={s.border} x="20" y="56" width="160" height="90" />
      <rect className={s.border} x="20" y="160" width="120" height="8" />
      <rect className={s.border} x="20" y="176" width="150" height="8" />
      <rect className={s.border} x="20" y="192" width="100" height="8" />
      <rect className={s.surface} x="200" width="200" height="300" />
      <rect className={s.inverse} x="216" y="20" width="168" height="24" rx="8" />
      <circle className={s.accent} cx="230" cy="32" r="6" />
      <rect className={hero} x="216" y="54" width="168" height="96" rx="12" />
      <rect className={s.textPrimary} x="216" y="162" width="130" height="12" rx="6" />
      <rect className={s.border} x="216" y="182" width="160" height="7" rx="3.5" />
      <rect className={s.actionPrimary} x="216" y="202" width="84" height="26" rx="13" />
      <path className={s.splitLine} d="M200 0v300" />
      <circle className={s.splitKnob} cx="200" cy="150" r="16" />
      <path className={s.splitArrows} d="M194 144l-6 6 6 6M206 144l6 6-6 6" />
    </svg>
  );
}
