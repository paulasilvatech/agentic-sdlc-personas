import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paulasilvatech.github.io',
  base: '/agentic-sdlc-personas',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
