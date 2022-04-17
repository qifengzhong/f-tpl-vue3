/*
 * @Description:CDN插件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:27:41
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 17:29:52
 */

import importToCDN from 'vite-plugin-cdn-import'

export function configCdnPlugin() {
  return importToCDN({
    modules: [
      {
        name: 'vue',
        var: 'Vue',
        path: 'https://unpkg.com/vue@next'
      },
      {
        name: 'element-plus',
        var: 'ElementPlus',
        path: 'https://unpkg.com/element-plus',
        css: 'https://unpkg.com/element-plus/dist/index.css'
      }
    ]
  })
}
