import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
// 在 vite.config.ts 顶部定义
import fs from 'fs';
const localPackages = fs.readdirSync(path.resolve(__dirname, 'packages'));

const localPkgs = [
  'den', 'hooks', 'log', 'mcap-support', 'message-path',
  'suite', 'suite-base', 'suite-desktop', 'suite-web', 'theme'
];
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
   // 1. 优先级排序：先尝试寻找 .ts 文件，再尝试 .tsx
    // Vite 会按这个顺序在每个 Alias 路径后尝试追加后缀
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],

    alias: [
      // 2. 【最关键】显式映射 den/async 到它的真实源码位置
      // 如果 packages/den/src 下面有 async.ts 或 async/index.ts，就这样写：
      {
        find: '@lichtblick/den/async',
        replacement: path.resolve(__dirname, 'packages/den/async')
      },

      // 1. 针对本地存在的包，生成精确的路径映射
      ...localPkgs.map(pkg => ({
        find: new RegExp(`^@lichtblick\/${pkg}$`),
        replacement: path.resolve(__dirname, `packages/${pkg}/src`)
      })),
      ...localPkgs.map(pkg => ({
        find: new RegExp(`^@lichtblick\/${pkg}\/(.*)$`),
        replacement: path.resolve(__dirname, `packages/${pkg}/src/$1`)
      })),

      // 5. Vue 项目默认别名
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },
})
