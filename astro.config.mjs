import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [],
    resolve: {
      alias: {
        $assets: path.resolve('./src/assets'),
        $components: path.resolve('./src/components'),
        $layouts: path.resolve('./src/layouts'),
        $scripts: path.resolve('./src/scripts'),
        $styles: path.resolve('./src/styles'),
      },
    },
  },
});
