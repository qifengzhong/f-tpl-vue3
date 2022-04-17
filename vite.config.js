/*
 * @Description: vite配置文件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-16 11:38:42
 */

/// <reference types="vitest" />
import { defineConfig } from 'vite'

import { loadEnv } from 'vite'
// build工具类
import { wrapperEnv } from './build/utils'
// const path = require('path')
import { resolve } from 'path'
// 引入跨域函数
import { createProxy } from './build/vite/proxy/index'
// 引入插件
import { createVitePlugins } from './build/vite/plugin'

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  // 加载环境变量文件
  const env = loadEnv(mode, root)
  // 将环境变量进行数据类型的转换，并挂载到process.env中
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv
  // 判断环境
  const isBuild = command === 'build'

  // 通用配置
  const COMMON_CONFIGURATION = {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    // 输出文件
    outDir: 'dist',
    resolve: {
      // 配置别名
      alias: {
        '@': resolve(__dirname, 'src'),
        'comp': resolve(__dirname, 'src/components'),
        '/assets': './src/assets'
      }
    },
    test: {
      /** for example, use global to avoid globals imports (describe, test, expect): */
      global: true,
      environment: 'happy-dom',
      transformMode: {
        web: [/.[tj]sx$/],
      },
    },
  }

  if (command === 'serve') {
    // 开发环境
    return {
      server: {
        https: false,
        host: true,
        port: VITE_PORT || 8848,
        proxy: createProxy(VITE_PROXY)
      },
      ...COMMON_CONFIGURATION
    }
  } else {
    // 生产环境
    return {
      esbuild: {
        pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
      },
      build: {
        // 兼容目标
        target: 'es2015',
        cssTarget: 'chrome80',
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/[name]-[hash].js',
            assetFileNames: '[ext]/[name]-[hash].[ext]'
          }
        },
        // 关掉它能稍微提高打包速度
        brotliSize: false,
        chunkSizeWarningLimit: 2000
      },
      ...COMMON_CONFIGURATION
    }
  }

})
