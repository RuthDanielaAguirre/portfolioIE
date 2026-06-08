import { motion } from 'motion/react';
import { MonoLabel } from '../atoms/MonoLabel';
import type { TechCardProps } from '../../types';

export const TechCard = ({ category, technologies, delay = 0 }: TechCardProps) => {
  return (
    <motion.div
      className="p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,8,0.68) 0%, rgba(30,24,12,0.28) 100%)',
        backdropFilter: 'blur(16px) saturate(120%)',
        border: '1px solid rgba(244,208,111,0.24)',
        boxShadow: 'inset 0 1px 0 rgba(255,232,163,0.12), 0 0 32px rgba(244,208,111,0.06)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <MonoLabel className="mb-5 sm:mb-6 block text-[var(--gold-main)] text-[0.7rem] sm:text-[0.75rem]">{category}</MonoLabel>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg font-['DM_Mono'] text-[0.7rem] sm:text-[0.75rem]"
            style={{
              fontWeight: 300,
              color: 'var(--foreground)',
              background: 'rgba(244,208,111,0.08)',
              border: '1px solid rgba(244,208,111,0.2)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            whileHover={{
              background: 'rgba(244,208,111,0.16)',
              borderColor: 'rgba(244,208,111,0.4)',
              scale: 1.05
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
