import { useEffect, type ReactNode } from 'react';
import { timing } from '../../tokens';
import { cx } from '../../utils/cx';
import styles from './Toast.module.css';

export interface ToastProps {
  open: boolean;
  children: ReactNode;
  /** Auto-dismiss delay in ms; 0 keeps it open. */
  duration?: number;
  onClose?: () => void;
  /** Renders in normal flow (docs). */
  inline?: boolean;
}

/** Toast / overlay — 200 ms fade + 16px rise, announced politely. */
export function Toast({ open, children, duration = timing.toast, onClose, inline }: ToastProps) {
  useEffect(() => {
    if (!open || !duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose, children]);

  return (
    <div role="status" className={cx(styles.toast, open && styles.visible, inline && styles.inline)}>
      {children}
    </div>
  );
}
