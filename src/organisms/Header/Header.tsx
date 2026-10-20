import { useEffect, useId, useState } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { Logo } from '../../atoms/Logo';
import { NavItem } from '../../molecules/NavItem';
import { SocialLinks, type SocialLink } from '../../molecules/SocialLinks';
import { BaseLink } from '../../utils/link-context';
import { cx } from '../../utils/cx';
import styles from './Header.module.css';

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  homeHref?: string;
  items: HeaderNavItem[];
  cta: { label: string; href: string };
  social?: SocialLink[];
  /** Controlled menu state (mobile). Uncontrolled when omitted. */
  menuOpen?: boolean;
  onMenuOpenChange?: (open: boolean) => void;
  /** Not sticky (docs / previews). */
  static?: boolean;
}

/** Header · Breakpoint desktop|mobile × Menu closed|open. */
export function Header({ homeHref = '/', items, cta, social, menuOpen, onMenuOpenChange, static: isStatic }: HeaderProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = menuOpen ?? internalOpen;
  const menuId = useId();

  const setOpen = (next: boolean) => {
    if (menuOpen === undefined) setInternalOpen(next);
    onMenuOpenChange?.(next);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = previous;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <header className={cx(styles.header, open && styles.open, isStatic && styles.static)}>
      <div className={styles.bar}>
        <BaseLink className={styles.logo} href={homeHref} aria-label="Wren Pages — home">
          <Logo title="" />
        </BaseLink>
        <nav className={styles.nav} aria-label="Main">
          {items.map((item) => (
            <NavItem key={item.href} href={item.href} active={item.active}>
              {item.label}
            </NavItem>
          ))}
        </nav>
        <span className={styles.cta}>
          <Button href={cta.href} showArrow>
            {cta.label}
          </Button>
        </span>
        <IconButton
          className={styles.menuButton}
          icon={open ? 'close' : 'menu'}
          label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls={menuId}
          active={open}
          onClick={() => setOpen(!open)}
        />
      </div>
      <nav className={styles.menu} id={menuId} aria-label="Mobile">
        {items.map((item) => (
          <BaseLink
            key={item.href}
            className={styles.menuRow}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <Icon name="arrow-right" />
          </BaseLink>
        ))}
        <div className={styles.spacer} />
        <Button href={cta.href} size="lg" block showArrow onClick={() => setOpen(false)}>
          {cta.label}
        </Button>
        {social && <SocialLinks items={social} />}
      </nav>
    </header>
  );
}
