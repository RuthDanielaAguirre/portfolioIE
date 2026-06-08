import type { TagProps } from '../../types';

export const Tag = ({ children }: TagProps) => {
  return (
    <span
      className="inline-block px-3 py-1 font-['DM_Mono'] text-[0.7rem] tracking-[0.08em] uppercase rounded-lg"
      style={{
        fontWeight: 300,
        color: 'var(--gold-light)',
        border: '1px solid rgba(244, 208, 111, 0.24)',
        background: 'rgba(244, 208, 111, 0.08)'
      }}
    >
      {children}
    </span>
  );
};
