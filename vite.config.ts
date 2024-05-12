/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    name: 'jsdom',
    root: './src',
    environment: 'jsdom',
    server: {
      deps: {
        // 添加这个配置解决：TypeError: Unknown file extension ".css" 错误
        inline: ['element-plus'],
      },
    },
    // browser: {
    //   enabled: true,
    //   name: 'chrome'
    // }
    // setupFiles: ['./setup.happy-dom.ts'],
  },
})
