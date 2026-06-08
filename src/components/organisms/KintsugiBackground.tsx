import { motion, useScroll, useTransform } from 'motion/react';

export const KintsugiBackground = () => {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.2, 0.15, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.3, 0.15]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: opacity1, y: y1 }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 100,200 Q 400,100 700,300 T 1300,250 T 1800,400"
          stroke="#f4d06f"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          style={{ filter: 'blur(1px)' }}
        />
        <motion.path
          d="M 200,500 Q 500,400 800,600 T 1400,550"
          stroke="#ffe8a3"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
          style={{ filter: 'blur(1px)' }}
        />
        <motion.path
          d="M 400,800 Q 700,700 1000,900 T 1600,850"
          stroke="#8f6b2e"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1, ease: 'easeInOut' }}
          style={{ filter: 'blur(2px)' }}
        />
      </motion.svg>

      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: opacity2, y: y2, rotate }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 300,300 Q 600,200 900,400 T 1500,350 T 1900,500"
          stroke="#f4d06f"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, delay: 1.5, ease: 'easeInOut' }}
          style={{ filter: 'blur(2px)', opacity: 0.5 }}
        />
        <motion.circle
          cx="800"
          cy="400"
          r="2"
          fill="#ffe8a3"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.circle
          cx="1200"
          cy="600"
          r="1.5"
          fill="#f4d06f"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, delay: 3.5, repeat: Infinity, repeatDelay: 4 }}
        />
      </motion.svg>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(244,208,111,0.08) 0%, transparent 50%)',
          opacity: opacity1
        }}
      />
    </div>
  );
};
