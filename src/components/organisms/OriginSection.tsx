import { useTranslation } from 'react-i18next';
import { SectionShell } from '../../app/layouts/SectionShell';
import { SectionHeader } from '../molecules/SectionHeader';
import { GoldLine } from '../atoms/GoldLine';
import { ImageReveal } from '../molecules/ImageReveal';
import { images } from '../../data/images';
import type { EditorialImage } from '../../types';

interface OriginGalleryItem extends EditorialImage {
  wrapperClassName: string;
}

const originAltTexts = {
  es: [
    'Retrato editorial en exterior con pose serena y encuadre horizontal',
    'Retrato en movimiento con luz suave y encuadre cinematografico',
    'Instalacion de videomapping inmersivo con proyecciones geometricas',
    'Retrato conceptual en formato cuadrado con estetica cyborg',
    'Fotografia editorial horizontal con enfoque narrativo y textura calida',
    'Retrato futurista en tonos rojos con presencia cyborg'
  ],
  en: [
    'Outdoor editorial portrait with a calm pose and horizontal framing',
    'Portrait in motion with soft light and cinematic framing',
    'Immersive video mapping installation with geometric projections',
    'Conceptual square portrait with a cyborg aesthetic',
    'Horizontal editorial photograph with narrative focus and warm texture',
    'Futuristic portrait in red tones with a cyborg presence'
  ]
};

export const OriginSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const editorialImages: OriginGalleryItem[] = [
    {
      src: images.origin[0],
      alt: originAltTexts[lang][0],
      aspectRatio: '4/3',
      wrapperClassName: 'sm:col-span-1'
    },
    {
      src: images.origin[1],
      alt: originAltTexts[lang][1],
      aspectRatio: '4/3',
      wrapperClassName: 'sm:col-span-1'
    },
    {
      src: images.origin[2],
      alt: originAltTexts[lang][2],
      aspectRatio: '3/2',
      wrapperClassName: 'sm:col-span-2'
    },
    {
      src: images.origin[3],
      alt: originAltTexts[lang][3],
      aspectRatio: '1/1',
      wrapperClassName: 'sm:col-span-1'
    },
    {
      src: images.origin[4],
      alt: originAltTexts[lang][4],
      aspectRatio: '3/2',
      wrapperClassName: 'sm:col-span-1'
    },
    {
      src: images.origin[5],
      alt: originAltTexts[lang][5],
      aspectRatio: '16/10',
      wrapperClassName: 'sm:col-span-2'
    }
  ];

  return (
    <SectionShell>
      <SectionHeader title={t('origin.title')} />

      <div className="grid grid-cols-1 gap-12 sm:gap-14 md:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-20 xl:gap-24">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {editorialImages.map(({ wrapperClassName, ...image }) => (
            <div key={image.src} className={wrapperClassName}>
              <ImageReveal {...image} />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center lg:pl-2 xl:pl-6">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <GoldLine width="60px" opacity={0.6} className="mb-6 sm:mb-8" />
            <h3
              className="mb-4 font-['Cormorant_Garamond'] text-[1.8rem] italic leading-[1.1] text-[var(--foreground)] sm:mb-6 sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3rem]"
              style={{ fontWeight: 300 }}
            >
              {t('origin.quote')}
            </h3>
            <GoldLine width="60px" opacity={0.6} />
          </div>

          <p
            className="whitespace-pre-line font-['DM_Mono'] text-[0.9rem] font-light leading-[1.9] text-[var(--foreground)] sm:text-[0.95rem] sm:leading-[2] md:text-[1rem]"
          >
            {t('origin.body')}
          </p>
        </div>
      </div>
    </SectionShell>
  );
};
