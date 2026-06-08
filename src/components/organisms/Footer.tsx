import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { GoldLine } from '../atoms/GoldLine';
import { MonoLabel } from '../atoms/MonoLabel';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/RuthDanielaAguirre',
    label: 'RuthDanielaAguirre'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ruth-daniela-aguirre/',
    label: 'ruth-daniela-aguirre'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:ruthdanielaaguirre@gmail.com',
    label: 'ruthdanielaaguirre@gmail.com'
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-14 md:py-16 border-t border-[rgba(244,208,111,0.18)]">
      <div className="max-w-7xl mx-auto">
        <GoldLine width="120px" opacity={0.4} className="mb-12 mx-auto rounded-full" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <nav aria-label="Social links" className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label={`${link.name}: ${link.label}`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="p-2 rounded-lg"
                    style={{
                      border: '1px solid rgba(244,208,111,0.28)',
                      background: 'rgba(10,10,8,0.6)'
                    }}
                    whileHover={{
                      background: 'rgba(244,208,111,0.12)',
                      borderColor: 'rgba(244,208,111,0.48)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      size={20}
                      style={{ color: 'var(--gold-main)' }}
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <MonoLabel className="text-[0.65rem] mb-1">{link.name}</MonoLabel>
                    <span
                      className="font-['DM_Mono'] text-[0.85rem] group-hover:text-[var(--gold-light)] transition-colors duration-300"
                      style={{ fontWeight: 300, color: 'var(--foreground)' }}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--gold-main)' }}
                  />
                </motion.a>
              );
            })}
          </nav>
        </div>

        <GoldLine opacity={0.18} className="mb-8 rounded-full" />

        <div className="text-center">
          <p
            className="font-['DM_Mono'] text-[0.75rem] tracking-[0.12em] uppercase"
            style={{ fontWeight: 300, color: '#a09a8e' }}
          >
            Ruth Daniela Aguirre © {currentYear}
          </p>
          <p
            className="font-['DM_Mono'] text-[0.65rem] mt-2"
            style={{ fontWeight: 300, color: '#a09a8e', opacity: 0.6 }}
          >
            Fullstack Developer & Immersive Experience Creator
          </p>
        </div>
      </div>
    </footer>
  );
};
