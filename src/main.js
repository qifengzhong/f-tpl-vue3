/*
 * @Description: main.js
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 22:44:29
 */
import { createApp } from 'vue'
import App from './App.vue'
// 引入tailwindCSS【注意】要放在elementplus的上面，不然会影响element的样式
import './style/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).mount('#app')
