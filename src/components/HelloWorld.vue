<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-16 14:01:08
-->
<template>
  <div class="main">
    <h1 data-test="todo">彭于晏</h1>
  </div>
</template>
<script>
// import { ref,toRefs,onBeforeMount,onMounted,onUnmounted,getCurrentInstance,nextTick } from 'vue';
import axios from 'axios'
export default {
  components: {},
  props: [],
  emits: [],
  setup(props, ctx) {
    const m1 = async () => {
      const { data } = await axios.get('/api/get')
      console.log(data)
    }
    return {
      m1
    }
  }
}
</script>

<style lang="scss" scoped></style>
