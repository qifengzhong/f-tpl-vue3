/*
 * @Description: 整合Plugin
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:27:59
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 21:01:04
 */
import vue from '@vitejs/plugin-vue'
import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'
import { configCdnPlugin } from './cdn'
import { configImageminPlugin } from './imagemin'

export function createVitePlugins(viteEnv, isBuild) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    // VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  const VitePlugins = [
    // 必须
    vue()
  ]

  // cdn加速
  VitePlugins.push(configCdnPlugin())

  // mock数据
  VITE_USE_MOCK && VitePlugins.push(configMockPlugin(isBuild))

  if (isBuild) {
    // 图片压缩
    VITE_USE_IMAGEMIN && VitePlugins.push(configImageminPlugin())

    // 包压缩
    VitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE))
  }

  return VitePlugins
}
