import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Output mode: 'static' for full SSG, 'hybrid' for static + dynamic routes
  output: 'static',

  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.js',
    }),
  ],

  // GitHub Pages deployment
  site: 'https://www.prabhashswarnajith.tech/',
  base: '/',

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
