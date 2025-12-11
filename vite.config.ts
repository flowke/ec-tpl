import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: path.join(__dirname, 'src/renderer'),
  base: './',
  plugins: [react()],
  envDir: __dirname,
  build: {
    outDir: path.join(__dirname, 'dist/renderer'),
    emptyOutDir: true,
    rollupOptions: {
      external: ['electron']
    }
  },
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@renderer': path.join(__dirname, 'src/renderer'),
      '@types': path.join(__dirname, 'src/types')
    }
  }
});

