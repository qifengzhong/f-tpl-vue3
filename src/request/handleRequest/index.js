/*
 * @Description: 合并模块
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-20 15:36:18
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-05-07 00:22:18
 */
import server from '../server'
import qs from 'qs'
import axios from 'axios'
// 引入LRU缓存架构
// import LRUCache from './LRUCache'

// 传入可容纳的缓存数量
// const cache = new LRUCache(5)

function MixServer() {
  this.server = server
  this.VueInstance = null
}

// 引入Vue实例
MixServer.prototype.v = function (vueobj) {
  this.VueInstance = vueobj
  console.log(vueobj)
}

// 解析api请求路由,变成方法式发送请求
MixServer.prototype.parseRouter = function (modelName, urlGroup) {
  this[modelName] = {}
  Object.keys(urlGroup).forEach((apiName) => {
    // 发送请求需要传入：模块名、方法名、路径以及其他集成的配置
    this[modelName][apiName] = this.sendMes.bind(this, modelName, apiName, urlGroup[apiName].url, urlGroup[apiName].method)
    // 防止重复请求
    this[modelName][apiName].state = 'ready'
  })
}

// 缓存架构
window.axiosCache = (function () {
  const cache = {}
  return {
    get: function (api, data) {
      return new Promise((resolve, reject) => {
        if (cache[api]) {
          resolve(cache[api])
        } else {
          this.set(api, data).then((res) => {
            cache[api] = res
            resolve(res)
          })
        }
      })
    },
    set: function (api, data) {
      return axios.get(api)
    }
  }
})()

// 最终发送请求
MixServer.prototype.sendMes = function (modelName, apiName, url, requestMethod, config) {
  return new Promise((resolve, reject) => {
    config = config || {}
    const type = config.type || requestMethod || 'get'
    const data = config.data || {}
    const bindName = config.bindName || ''
    const self = this
    const before = function (res) {
      self[modelName][apiName].state = 'ready'
      return res
    }
    const defaultFn = function (res) {
      if (bindName !== '') {
        self.VueInstance[bindName] = res
      }
      // 绑定结束
      // 使请求变成promise
      resolve({
        status: 'success',
        msg: '请求成功',
        bindData: res
      })
    }
    const callback = function (res) {
      success(res, defaultFn)
    }
    const success = config.success || defaultFn
    // 避免重复请求
    if (this[modelName][apiName].state === 'ready') {
      // 策略模式分发请求
      const state = {
        get: function () {
          const urlqs = JSON.stringify(data) === '{}' ? url : url + '?' + qs.stringify(data)
          server.get(urlqs).then(before).then(callback)
        },
        post: function () {
          server.post(url, data).then(before).then(callback)
        }
      }
      state[type]()
      this[modelName][apiName].state = 'waiting'
    } else {
      resolve({
        status: 'error',
        msg: '请勿发送重复请求'
      })
    }
  })
}

export default new MixServer()

