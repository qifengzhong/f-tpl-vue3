/*
 * @Description:stylelint配置
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-13 21:39:52
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-22 15:37:05
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended'
    // 'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
}

