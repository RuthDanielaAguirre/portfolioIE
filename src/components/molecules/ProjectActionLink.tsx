import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib';

interface ProjectActionLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: 'subtle' | 'primary';
}

export const ProjectActionLink = ({
  href,
  label,
  icon: Icon,
  variant = 'subtle'
}: ProjectActionLinkProps) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-[\'DM_Mono\'] text-[0.75rem] font-light uppercase tracking-[0.1em]',
        isPrimary
          ? 'bg-[var(--gold-main)] text-[var(--background)]'
          : 'border border-[rgba(244,208,111,0.3)] bg-[rgba(244,208,111,0.08)] text-[var(--foreground)]'
      )}
      whileHover={
        isPrimary
          ? { background: 'var(--gold-light)' }
          : {
              background: 'rgba(244,208,111,0.16)',
              borderColor: 'rgba(244,208,111,0.5)'
            }
      }
    >
      <Icon size={16} />
      {label}
    </motion.a>
  );
};