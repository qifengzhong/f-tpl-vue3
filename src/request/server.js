/*
 * @Description: axios配置文件
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-20 15:17:59
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-20 22:19:07
 */

import axios from 'axios'

const service = axios.create({
  baseUrl: '',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
