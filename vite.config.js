import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        product_listing: resolve(__dirname, 'src/product_listing/index.html'),
        product_pages: resolve(__dirname, 'src/product_pages/index.html'),
      },
    },
  },
})
