/*
 * @Description: 压缩插件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:26:50
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 17:46:35
 */

import compressPlugin from 'vite-plugin-compression'

export function configCompressPlugin(compress, deleteOriginFile = false) {
  const compressList = compress.split(',')

  const plugins = []

  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile
      })
    )
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    )
  }
  return plugins
}
