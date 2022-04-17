/*
 * @Description: tailwind配置
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-13 21:20:42
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-13 22:50:23
 */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 移除没有用到样式
  // 增加类名前缀
  // prefix: 'ldt-', // text-center => ldt-text-center
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  // 禁用基础样式【防止与组件库冲突】
  corePlugins: {
    preflight: false
  }
}
