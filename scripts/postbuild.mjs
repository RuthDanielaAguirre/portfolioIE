import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const routes = [
  '/',
  '/projects/mongame',
  '/projects/the-lighthunt',
  '/projects/tudu',
  '/projects/femcoders-club',
  '/projects/arcade-3d'
];

const distDir = path.resolve('dist');

const normalizeSiteUrl = (value) => {
  if (!value) {
    return 'http://localhost:4173';
  }

  return value.startsWith('http://') || value.startsWith('https://')
    ? value.replace(/\/$/, '')
    : `https://${value.replace(/\/$/, '')}`;
};

const siteUrl = normalizeSiteUrl(
  process.env.VITE_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL
);

const now = new Date().toISOString();
const defaultPreviewImage = `${siteUrl}/images/projects/mongame.png`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${now}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const updateBuiltIndex = async () => {
  const { readFile } = await import('node:fs/promises');
  const indexPath = path.join(distDir, 'index.html');
  const indexHtml = await readFile(indexPath, 'utf8');

  const patchedHtml = indexHtml
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${defaultPreviewImage}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${defaultPreviewImage}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${siteUrl}/" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${siteUrl}/" />`);

  await writeFile(indexPath, patchedHtml, 'utf8');
};

await mkdir(distDir, { recursive: true });
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8');
await updateBuiltIndex();

console.log(`[postbuild] sitemap.xml and robots.txt generated for ${siteUrl}`);