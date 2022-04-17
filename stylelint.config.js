/*
 * @Description:stylelint配置
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-13 21:39:52
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-14 00:07:36
 */
module.exports = {
  extends: ['stylelint-config-standard'],
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

