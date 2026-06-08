import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import '../i18n/config';
import { RootLayout } from './layouts/RootLayout';
import { AppRoutes } from './routes/AppRoutes';
import { useReducedMotion } from '../hooks';

function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  useReducedMotion();

  return (
    <RootLayout>
      <ScrollToTopOnMount />
      <AppRoutes />
    </RootLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}