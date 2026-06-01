import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Deployed to: https://joydeeproni.github.io/uwc-website/
export default defineConfig({
  site: 'https://joydeeproni.github.io',
  base: '/uwc-website',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
  server: { port: 4321, host: true },
});
