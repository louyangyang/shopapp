// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ******开发服务器配置******
  server: {
    host: true, // 监听所有地址
    port: 8080, //指定开发服务器端口：默认3000
    open: true, //启动时自动在浏览器中打开
    cors: false, //为开发服务器配置 CORS
    proxy: {
      //配置自定义代理规则
      // 字符串简写写法
      // '/jpi': 'http://192.168.218.65:4567',
      //wifi 服务器地址 192.168.173.64
      // 常用服务器地址 192.168.218.13
      '/api': {
        target: 'http://192.168.218.13:3000',
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  // ******resolver配置******
  resolve: {
    alias: {
      // 别名配置
      // 键必须以斜线开始和结束
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, './src/components'),
      assets: resolve(__dirname, './src/assets'),
      '#': resolve(__dirname, 'types'),
      build: resolve(__dirname, 'build')
    }
  },
})