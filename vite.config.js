import { fileURLToPath, URL } from 'node:url'
import { defineConfig,  loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  define:{
    'process.env.VUE_APP_BACKEND_URL': process.env.VUE_APP_BACKEND_URL
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

