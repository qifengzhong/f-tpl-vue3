/*
 * @Description: 图片压缩插件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:26:32
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 17:28:38
 */

import viteImagemin from 'vite-plugin-imagemin'

export function configImageminPlugin() {
  const plugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false
    },
    optipng: {
      optimizationLevel: 7
    },
    mozjpeg: {
      quality: 20
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox'
        },
        {
          name: 'removeEmptyAttrs',
          active: false
        }
      ]
    }
  })
  return plugin
}
