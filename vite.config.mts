/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'node:path';

import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'UI KIT',
      formats: ['es', 'umd'],
      fileName: (format) => `ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
      // sourcemap: true,
      // emptyOutDir: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    allowOnly: true,
    setupFiles: [path.resolve(__dirname, './vitest.setup.ts')],
    include: ['./src/**/*.test.{ts,tsx}'],
  },
});
