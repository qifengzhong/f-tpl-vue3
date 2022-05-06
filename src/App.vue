<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-05-07 00:10:55
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <el-card>
    <div
      class="word border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-blue-400 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-blue-400 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-blue-400"></div>
            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
    <h1>{{ a }}</h1>
  </el-card>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  components: {},
  props: [],
  emits: [],
  setup(props, ctx) {
    const a = ref('彭于晏')
    return {
      a
    }
  },
  async created() {
    const { proxy } = getCurrentInstance()
    const _http = proxy.$http
    _http.v(proxy)
    const res = await _http.login.loginIn({
      bindName: 'a',
      // 执行到这里时，已经拿回了数据
      success: (res, bind) => {
        bind(res.data)
      }
    })
    console.log(res)
    console.log(this.a)
  }
}
</script>

<style lang="postcss">
.word {
  @apply text-blue-500 font-bold;
}
</style>
