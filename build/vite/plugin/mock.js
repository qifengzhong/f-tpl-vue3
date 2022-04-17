/*
 * @Description: mock插件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:26:13
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 17:28:44
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild
  })
}
