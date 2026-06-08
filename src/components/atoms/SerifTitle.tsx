import type { SerifTitleProps } from '../../types';

const sizeClasses = {
  sm: 'text-[2rem] leading-[1.2]',
  md: 'text-[3rem] leading-[1.1]',
  lg: 'text-[4.5rem] leading-[1]',
  xl: 'text-[6rem] leading-[0.95]',
  hero: 'text-[8vw] md:text-[7rem] lg:text-[10rem] leading-[0.9]'
};

export const SerifTitle = ({
  children,
  size = 'md',
  italic = false,
  className = ''
}: SerifTitleProps) => {
  return (
    <h1
      className={`font-['Cormorant_Garamond'] ${sizeClasses[size]} ${italic ? 'italic' : ''} text-[var(--foreground)] ${className}`}
      style={{ fontWeight: 300 }}
    >
      {children}
    </h1>
  );
};
