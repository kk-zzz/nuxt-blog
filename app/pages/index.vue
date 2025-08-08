<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="isDiv = !isDiv">toggle {{ isDiv ? 'button' : 'div' }}</button>
    <component :is="isDiv ? BaseFooDiv : MyButton" />
    <hr />
    <section style="height: 1000px;">
      <h2>MountainsList</h2>
      <button v-if="!show" @click="show = true">show list</button>
    </section>
    <LazyMountainsList v-if="show" hydrate-on-visible @hydrated="onHydrate" />

  </div>
</template>
  
<script setup lang='ts'>
/**
 * 若是动态组件，component，两种引入组件方式
 * 1. 使用 resolveComponent(组件名称) 来获取组件 
 * 2. import { 组件名称, ... } from '#components' 中引入
 */
import { BaseFooDiv } from '#components'
const MyButton = resolveComponent('BaseFooButton')
const isDiv = ref(false)
const show = ref(false)

function onHydrate() {
  console.log("Component has been hydrated!")
}
</script>
  
<style lang="scss" scoped>
  
</style>