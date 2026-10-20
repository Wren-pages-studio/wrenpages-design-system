import { createContext, forwardRef, useContext } from 'react';
import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';

/**
 * Router-agnostic links. Every DS component that renders a link goes through
 * `BaseLink`, so apps plug their router once:
 *
 *   <LinkProvider component={RouterLinkAdapter}>…</LinkProvider>
 *
 * The adapter receives `href` and must render an <a>. External links,
 * `mailto:`/`tel:` and hash links always render a native <a>.
 */
export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type LinkComponent = ComponentType<LinkComponentProps>;

const LinkContext = createContext<LinkComponent | null>(null);

export function LinkProvider({ component, children }: { component: LinkComponent; children: ReactNode }) {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>;
}

export const isExternalHref = (href: string) => /^(https?:|mailto:|tel:|#)/.test(href);

/** Absolute web URLs (other sites, social profiles) open in a new tab. */
export const isWebUrl = (href: string) => /^https?:\/\//.test(href);

export const BaseLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(function BaseLink(props, ref) {
  const Custom = useContext(LinkContext);
  // The adapter comes from context and is stable for the app's lifetime (not created during render).
  // eslint-disable-next-line react-hooks/static-components
  if (Custom && !isExternalHref(props.href)) return <Custom {...props} />;
  const newTab = isWebUrl(props.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  // Content arrives through props.children. Explicit target/rel props win over the defaults.
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a ref={ref} {...newTab} {...props} />;
});
