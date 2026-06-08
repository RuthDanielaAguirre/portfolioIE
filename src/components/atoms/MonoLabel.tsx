import type { MonoLabelProps } from '../../types';

export const MonoLabel = ({ children, className = '' }: MonoLabelProps) => {
  return (
    <span
      className={`font-['DM_Mono'] text-[0.75rem] tracking-[0.15em] uppercase text-[var(--muted)] ${className}`}
      style={{ fontWeight: 300 }}
    >
      {children}
    </span>
  );
};
