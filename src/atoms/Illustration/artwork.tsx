import { BIRD_BODY, WING_FOLD, WING_PAGE } from '../Logo/paths';
import s from './Illustration.module.css';

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
      {/* v1.1: the 5-star rating row became a neutral text line (no implied reviews). */}
      <rect className={s.border} x="22" y="292" width="90" height="7" rx="3.5" />
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

export type ConceptMotif = 'scissors' | 'pole' | 'house';

const conceptHero: Record<ConceptMotif, string> = {
  scissors: s.errorSubtle,
  pole: s.accent,
  house: s.brandSubtle,
};

/**
 * Single-site browser mockup for Concept projects (sample sites for fictional
 * businesses). Motif per trade: salon = scissors, barber = pole, handyman = house.
 */
export function ConceptSiteArt({ motif }: { motif: ConceptMotif }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className={s.subtle} width="400" height="300" />
      <rect className={s.surface} x="40" y="24" width="320" height="252" rx="12" />
      <rect className={s.inverse} x="40" y="24" width="320" height="28" rx="12" />
      <circle className={s.accent} cx="58" cy="38" r="5" />
      <rect className={conceptHero[motif]} x="56" y="66" width="288" height="100" rx="12" />
      {motif === 'scissors' && (
        <>
          <circle className={s.surface} cx="200" cy="116" r="34" />
          <path className={s.motifStroke} d="M186 132l28-32M186 100l28 32" />
        </>
      )}
      {motif === 'pole' && (
        <>
          <rect className={s.surface} x="188" y="78" width="24" height="76" rx="12" />
          <path className={s.poleStripes} d="M188 96l24-10M188 114l24-10M188 132l24-10" />
        </>
      )}
      {motif === 'house' && (
        <>
          <path className={s.surface} d="M160 140V108l40-30 40 30v32z" />
          <rect className={s.actionPrimary} x="190" y="116" width="20" height="24" />
        </>
      )}
      <rect className={s.textPrimary} x="56" y="182" width="130" height="12" rx="6" />
      <rect className={s.border} x="56" y="204" width="220" height="7" rx="3.5" />
      <rect className={s.border} x="56" y="218" width="180" height="7" rx="3.5" />
      <rect className={s.actionPrimary} x="56" y="238" width="96" height="26" rx="13" />
    </svg>
  );
}
