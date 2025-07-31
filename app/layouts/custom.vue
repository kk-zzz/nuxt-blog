<template>
  <div>
    <slot />
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p class="sr-only">{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
  </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style>
  
</style>