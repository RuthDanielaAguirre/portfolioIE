import { useState, useEffect } from 'react';
import type { UseScrollVisibilityOptions } from '../types';

export const useScrollVisibility = (options: UseScrollVisibilityOptions = {}) => {
  const { showAfter = 400 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  return isVisible;
};
