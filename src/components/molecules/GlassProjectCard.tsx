import { motion, useMotionValue, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { SerifTitle } from '../atoms/SerifTitle';
import { MonoLabel } from '../atoms/MonoLabel';
import { Tag } from '../atoms/Tag';
import { GoldLine } from '../atoms/GoldLine';
import type { GlassProjectCardProps } from '../../types';

export const GlassProjectCard = ({
  slug,
  name,
  role,
  description,
  stack,
  year,
  viewCaseLabel,
  githubUrl
}: GlassProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      className="group relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,8,0.78) 0%, rgba(30,24,12,0.38) 100%)',
        backdropFilter: 'blur(18px) saturate(130%)',
        border: '1px solid rgba(244,208,111,0.28)',
        boxShadow: 'inset 0 1px 0 rgba(255,232,163,0.18), 0 0 40px rgba(244,208,111,0.08)',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: 'inset 0 1px 0 rgba(255,232,163,0.4), 0 0 80px rgba(244,208,111,0.24), 0 20px 60px rgba(0,0,0,0.5)'
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(110deg, transparent 25%, rgba(255,232,163,0.15) 50%, transparent 75%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Gradient glow overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(244,208,111,0.12) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Kintsugi crack lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-700"
        style={{ mixBlendMode: 'screen' }}
      >
        <motion.path
          d="M 0,50 Q 100,30 200,50 T 400,50"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 100,0 Q 80,100 100,200 T 100,400"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold-main)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-gold-light)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-gold-main)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(244,208,111,0.3) 0%, transparent 70%)',
          borderTopLeftRadius: '1rem'
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(-45deg, rgba(244,208,111,0.3) 0%, transparent 70%)',
          borderBottomRightRadius: '1rem'
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
          <MonoLabel className="text-[0.65rem] sm:text-[0.75rem]">{role}</MonoLabel>
          <MonoLabel className="text-[0.65rem] sm:text-[0.75rem]">{year}</MonoLabel>
        </div>

        <h3
          className="font-['Cormorant_Garamond'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1] italic mb-3 sm:mb-4"
          style={{ fontWeight: 300, color: 'var(--foreground)' }}
        >
          {name}
        </h3>

        <p
          className="font-['DM_Mono'] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-8"
          style={{ fontWeight: 300, color: 'var(--foreground)' }}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <GoldLine className="mb-4 sm:mb-6" />

        <div className="flex items-center justify-between">
          <Link to={`/projects/${slug}`}>
            <motion.div
              className="font-['DM_Mono'] text-[0.75rem] sm:text-[0.8rem] tracking-[0.1em] uppercase"
              style={{ fontWeight: 300, color: 'var(--gold-main)' }}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              {viewCaseLabel} →
            </motion.div>
          </Link>

          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg"
              style={{
                border: '1px solid rgba(244,208,111,0.24)',
                background: 'rgba(244,208,111,0.08)'
              }}
              whileHover={{
                background: 'rgba(244,208,111,0.16)',
                borderColor: 'rgba(244,208,111,0.4)',
                scale: 1.05
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} style={{ color: 'var(--gold-main)' }} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Vertical gold accent */}
      <motion.div
        className="absolute top-0 right-0 w-1 h-full opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-gold-main), transparent)'
        }}
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60 pointer-events-none"
          style={{
            background: 'var(--color-gold-light)',
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            boxShadow: '0 0 8px var(--color-gold-glow)'
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
        />
      ))}
    </motion.article>
  );
};
