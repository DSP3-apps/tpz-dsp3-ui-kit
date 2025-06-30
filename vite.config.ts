/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import path from 'node:path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/fonts/**/*',
          dest: 'assets/fonts',
        },
        {
          src: 'src/assets/images/**/*',
          dest: 'assets/images',
        },
        {
          src: 'src/assets/styles/**/*',
          dest: 'assets/styles',
        },
      ]
    }),
  ],
  css: {
    postcss: { plugins: [tailwindcss] },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
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
      external: (id) =>
        ['react', 'react-dom', 'tailwindcss', 'react/jsx-runtime'].includes(id) ||
        id.startsWith('next/'),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
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
