import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue', 'ant-design-vue'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].mjs'
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          exports: 'named'
        }
      ]
    },
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'nw-antdv'
    }
  },
  plugins: [vue()]
})
