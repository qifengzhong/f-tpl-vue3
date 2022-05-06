/*
 * @Description: 统一出口
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-20 15:16:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-05-07 00:07:57
 */

import mixServer from '../request/handleRequest/index'

// 自动化引入模块（查找js文件）
const files = import.meta.globEager('./*.js') // vite

const filePathArr = Object.keys(files)

filePathArr.forEach((key, index) => {
  if (key === './index.js') return
  // 获取模块
  const fileName = key.split('/')[1].split('.')[0]
  mixServer.parseRouter(fileName, files[key].default)
})

export default mixServer

