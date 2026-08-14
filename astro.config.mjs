// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-wine-three-iox2jn0bx6.vercel.app',
  integrations: [sitemap()],
});