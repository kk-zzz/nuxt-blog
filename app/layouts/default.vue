<template>
  <div class="flex">
    <Sidebar class="w-60 border-r" />
    <div class="flex-1 p-4">
      <slot />
    </div>
  </div>
  <!-- 屏幕阅读器提示 -->
  <NuxtRouteAnnouncer>
    <template #default="{ message }">
      <p class="sr-only">{{ message }} was loaded.</p>
    </template>
  </NuxtRouteAnnouncer>
</template>
  
<script setup lang='ts'>
import Sidebar from '~/components/Sidebar.vue'
</script>
  
<style lang="scss" scoped>
  
</style>