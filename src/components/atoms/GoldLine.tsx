import type { GoldLineProps } from '../../types';

export const GoldLine = ({ width = '100%', opacity = 0.28, className = '' }: GoldLineProps) => {
  return (
    <div
      className={`h-[2px] rounded-full ${className}`}
      style={{
        width,
        background: `rgba(244, 208, 111, ${opacity})`,
        boxShadow: '0 0 8px rgba(244, 208, 111, 0.12)'
      }}
    />
  );
};
