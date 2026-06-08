import { useState, useEffect } from 'react';
import type { UseScrollTrackingOptions } from '../types';

export const useScrollTracking = (options: UseScrollTrackingOptions = {}) => {
  const { threshold = 50 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
