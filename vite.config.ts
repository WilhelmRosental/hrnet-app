import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: './public',
  base: './',
  build: {
    outDir: '../dist/renderer',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'),
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
