import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true
    }),
  ],

  // 配置端口
  server: {
    host: '0.0.0.0', // 指定服务器主机名
    port: 8000, // 指定服务器端口
    hmr: true, // 开启热更新
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false // 是否开启 https
  },

  // 配置路径别名
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      '@pages': path.join(__dirname, './src/pages')
    }
  }
  
})
