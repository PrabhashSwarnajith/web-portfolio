import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Output mode: 'static' for full SSG, 'hybrid' for static + dynamic routes
  output: 'static',

  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.js',
    }),
    sitemap(),
  ],

  // Vercel deployment
  site: 'https://www.prabhashswarnajith.tech/',

  // Build output
  outDir: './dist',

  vite: {
    ssr: {
      external: ['fsevents'],
      noExternal: ['@mui/material', '@mui/icons-material']
    },
    optimizeDeps: {
      include: ['@mui/material', '@mui/icons-material']
    }
  }
});
