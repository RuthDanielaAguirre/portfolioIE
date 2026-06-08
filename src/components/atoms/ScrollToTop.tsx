import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useScrollVisibility, useNavigation } from '../../hooks';

export const ScrollToTop = () => {
  const isVisible = useScrollVisibility({ showAfter: 400 });
  const { scrollToTop } = useNavigation();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,8,0.88) 0%, rgba(30,24,12,0.92) 100%)',
            backdropFilter: 'blur(20px) saturate(120%)',
            border: '1px solid rgba(244,208,111,0.4)',
            boxShadow: '0 4px 24px rgba(244,208,111,0.2), inset 0 1px 0 rgba(255,232,163,0.2)'
          }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 6px 32px rgba(244,208,111,0.3), inset 0 1px 0 rgba(255,232,163,0.3)',
            borderColor: 'rgba(244,208,111,0.6)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-5 sm:h-5" style={{ color: 'var(--gold-main)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
