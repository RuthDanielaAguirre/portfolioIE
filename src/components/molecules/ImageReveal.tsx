import { useState } from 'react';
import { motion } from 'motion/react';
import type { ImageRevealProps } from '../../types';

export const ImageReveal = ({ src, alt, aspectRatio = '3/4' }: ImageRevealProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group rounded-lg"
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(1) sepia(0.3) brightness(0.8) contrast(1.1)'
        }}
        animate={{
          filter: isHovered
            ? 'grayscale(0) sepia(0) brightness(1) contrast(1)'
            : 'grayscale(1) sepia(0.3) brightness(0.8) contrast(1.1)'
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(244,208,111,0.12) 0%, transparent 60%)',
          mixBlendMode: 'overlay'
        }}
        animate={{
          opacity: isHovered ? 0 : 0.6
        }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="absolute inset-0 border border-[rgba(244,208,111,0.0)]"
        animate={{
          borderColor: isHovered ? 'rgba(244,208,111,0.4)' : 'rgba(244,208,111,0.0)'
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(to right, transparent, var(--gold-main), transparent)',
          scaleX: 0,
          transformOrigin: 'center'
        }}
        animate={{
          scaleX: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
};
