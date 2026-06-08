import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib';

interface SectionShellProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  useContainer?: boolean;
}

export const SectionShell = ({
  children,
  as: Component = 'section',
  className,
  containerClassName,
  useContainer = true
}: SectionShellProps) => {
  return (
    <Component
      className={cn(
        'min-h-screen px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-24 lg:py-32',
        className
      )}
    >
      {useContainer ? (
        <div className={cn('mx-auto max-w-7xl', containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </Component>
  );
};