import { GoldLine } from '../atoms/GoldLine';
import type { SectionHeaderProps } from '../../types';

export const SectionHeader = ({ title, align = 'left' }: SectionHeaderProps) => {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-14 lg:mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : ''}`}>
      <h2
        className="font-['Cormorant_Garamond'] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] italic"
        style={{ fontWeight: 300, color: 'var(--foreground)' }}
      >
        {title}
      </h2>
      <GoldLine
        width={align === 'center' ? '100px' : '140px'}
        opacity={0.48}
        className="mt-4 sm:mt-5 md:mt-6"
      />
    </div>
  );
};
