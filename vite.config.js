import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', // 기본 경로 설정 (Vercel에서 "/" 사용)
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // 빌드 결과 디렉터리 설정
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
