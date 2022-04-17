/*
 * @Description:工具类
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-11 11:29:53
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-11 11:58:04
 */

// import fs from 'fs'
// import path from 'path'
// import dotenv from 'dotenv'

// 将环境变量加载到process.env中
export function wrapperEnv(envConf) {
  const ret = {}
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'))
      } catch (error) {
        realName = ''
      }
    }
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
