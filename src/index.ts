/**
 * @wrenpages/design-system
 *
 * Atomic structure: tokens → atoms → molecules → organisms → templates.
 * Import the stylesheet once in the app entry:
 *   import '@wrenpages/design-system/styles.css';
 */
import './styles/index.css';

export * from './atoms';
export * from './molecules';
export * from './organisms';
export * from './templates';
export * from './layout';
export { LinkProvider, BaseLink, isExternalHref } from './utils/link-context';
export type { LinkComponent, LinkComponentProps } from './utils/link-context';
export * as tokens from './tokens';
