import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: { outDir: 'docs' },
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@\/(.+)/, replacement: path.resolve(process.cwd(), 'src/$1') },
    ],
  },
});
