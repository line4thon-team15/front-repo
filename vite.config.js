import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Vercel 기본 배포 디렉터리
  },
  server: {
    proxy: {
      '/main': {
        target: 'https://4thline.kr',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
