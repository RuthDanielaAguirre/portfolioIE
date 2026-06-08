import { motion } from 'motion/react';

export const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className="w-[2px] h-24 rounded-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--gold-main), transparent)'
        }}
        animate={{
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ background: 'var(--gold-main)', boxShadow: '0 0 8px rgba(244, 208, 111, 0.4)' }}
        animate={{
          y: [0, 12, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
};
