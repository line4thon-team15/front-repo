import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    server: {
      proxy: {
        '/main': {
          target: 'https://4thline.kr', // 실제 백엔드 서버 URL로 변경
          changeOrigin: true,
        },
      },
    },
  },
});

