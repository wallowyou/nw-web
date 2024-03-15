import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    sourcemap: false,
    minify: false,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'NwRequest',
      fileName: 'nw-request'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['axios', 'lodash-es'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          axios: 'axios',
          'lodash-es': 'lodash-es'
        }
      }
    }
  },
  plugins: [dts({ rollupTypes: true })]
})
