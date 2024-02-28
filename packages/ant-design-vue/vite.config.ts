import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue', 'ant-design-vue'],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'ant-design-vue'
        },
        format: 'es',
        exports: 'named'
      }
    },
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'nwAntdv',
      fileName: 'nw-antdv',
      formats: ['es', 'cjs', 'umd', 'iife']
    }
  },
  plugins: [vue()]
});
