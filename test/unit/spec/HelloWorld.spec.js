/*
 * @Description: 单元测试用例
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-15 23:34:20
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-16 13:36:42
 */
import { expect,it,describe,beforeAll } from 'vitest'
import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

let wrapper
beforeAll(() => {
  wrapper = mount(HelloWorld)
})

describe('my test', () => {
  it('test1', () => {
    expect(wrapper.get('[data-test="todo"]').text()).toBe('彭于晏')
  })
})

