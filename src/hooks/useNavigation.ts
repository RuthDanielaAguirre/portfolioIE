import { useLocation, useNavigate } from 'react-router-dom';
import type { UseNavigationReturn } from '../types';
import { ROUTES } from '../lib/routes';

export const useNavigation = (): UseNavigationReturn => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === ROUTES.HOME;

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      navigate(`${ROUTES.HOME}${href}`);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isHomePage,
    scrollToSection,
    scrollToTop
  };
};
