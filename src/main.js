/*
 * @Description: main.js
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-05-01 23:57:43
 */
import { createApp } from 'vue'
import App from './App.vue'
// 引入tailwindCSS【注意】要放在elementplus的上面，不然会影响element的样式
import './style/index.css'
import ElementPlus from 'element-plus'
// 引入二次封装的axios
import mixServer from './api/index'
// 引入图片懒加载
import lazyPlugin from 'vue3-lazy'

const app = createApp(App)
app.config.globalProperties.$http = mixServer
lazyPlugin.install(app, {
  loading: './assets/wukong.jpg',
  error: './assets/wukong.jpg'
})
app.use(ElementPlus).mount('#app')

