/*
 * @Description: 解决跨域
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-13 16:54:11
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-20 18:20:09
 */

// 判断是否是Https
const httpsRE = /^https:\/\//

export function createProxy(list) {
  const ret = {}
  for (const i in list) {
    const [prefix, target] = list[i]
    const isHttps = httpsRE.test(target)
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }
  // for (const [prefix, target] of list) {
  //   const isHttps = httpsRE.test(target)

  //   ret[prefix] = {
  //     target,
  //     changeOrigin: true,
  //     ws: true,
  //     rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
  //     // https is require secure=false
  //     ...(isHttps ? { secure: false } : {})
  //   }
  // }
  return ret
}
