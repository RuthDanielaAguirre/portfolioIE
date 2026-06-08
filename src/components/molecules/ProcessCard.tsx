import { motion } from 'motion/react';
import { MonoLabel } from '../atoms/MonoLabel';
import { GoldLine } from '../atoms/GoldLine';
import type { ProcessCardProps } from '../../types';

export const ProcessCard = ({ title, intro, description, points, delay = 0 }: ProcessCardProps) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <MonoLabel className="mb-4 sm:mb-5 md:mb-6 text-[var(--gold-main)]">{title}</MonoLabel>
      <GoldLine width="48px" opacity={0.6} className="mb-6 sm:mb-7 md:mb-8" />

      <p
        className="font-['DM_Mono'] text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] leading-[1.7] sm:leading-[1.8] mb-5 sm:mb-6"
        style={{ fontWeight: 300, color: 'var(--foreground)' }}
      >
        {intro}
      </p>

      {points && (
        <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
          {points.map((point, index) => (
            <motion.li
              key={index}
              className="font-['DM_Mono'] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] leading-[1.7] sm:leading-[1.8] flex items-start gap-2 sm:gap-3"
              style={{ fontWeight: 300, color: 'var(--muted)' }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.3 + index * 0.1 }}
            >
              <span style={{ color: 'var(--gold-main)' }}>—</span>
              {point}
            </motion.li>
          ))}
        </ul>
      )}

      {description && (
        <p
          className="font-['DM_Mono'] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] leading-[1.8] sm:leading-[1.9]"
          style={{ fontWeight: 300, color: 'var(--muted)' }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
