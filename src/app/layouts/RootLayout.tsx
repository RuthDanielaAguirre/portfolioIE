import { ReactNode } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { ScrollToTop } from '../../components/atoms/ScrollToTop';
import { KintsugiBackground } from '../../components/organisms/KintsugiBackground';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a08', color: '#f0ece0' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--gold-main)] focus:px-4 focus:py-2 focus:text-[var(--background)]"
      >
        Skip to content
      </a>
      <KintsugiBackground />

      <div className="relative z-10">
        <Navbar />
        <ScrollToTop />
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
};
