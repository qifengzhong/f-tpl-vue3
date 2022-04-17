<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 16:55:54
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-17 20:10:22
-->

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import axios from 'axios'
async function fn() {
  const { data } = await axios.get('/api/get')
  const res = await axios.post('http://175.178.51.126:8091/smallA/login')
  console.log(data)
}
fn()
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <el-card>
    <div
      class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
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
  </el-card>
</template>

<style>
.word {
  @apply text-blue-500 font-bold;
}
</style>
