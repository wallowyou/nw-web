import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    cssCodeSplit: false,
    sourcemap: false,
    minify: false,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'NwUtils',
      fileName: 'nw-utils'
    },
    rollupOptions: {}
  }
})
