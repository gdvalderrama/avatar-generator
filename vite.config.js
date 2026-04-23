import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/avatar-generator/' : '/',
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: fileURLToPath(new URL('src/styles/quasar.variables.scss', import.meta.url))
    })
  ]
})
