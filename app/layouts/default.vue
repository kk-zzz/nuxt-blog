<template>
  <div>
    <NuxtTime :datetime="Date.now()" />
    <slot />
    <!-- 屏幕阅读器提示 -->
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p class="sr-only">{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
  </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
  
</style>