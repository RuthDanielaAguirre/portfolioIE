import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { GoldLine } from '../atoms/GoldLine';
import { MonoLabel } from '../atoms/MonoLabel';

interface ProjectDetailSectionProps {
  title: string;
  children: ReactNode;
}

export const ProjectDetailSection = ({
  title,
  children
}: ProjectDetailSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <MonoLabel className="mb-6 text-[var(--gold-main)]">{title}</MonoLabel>
      <GoldLine width="60px" opacity={0.6} className="mb-6" />
      {children}
    </motion.div>
  );
};