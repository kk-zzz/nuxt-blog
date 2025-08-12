<template>
  <div>
    Demo
    <h1 class="text-4xl">
      <slot mdc-unwrap="p" />
    </h1>
    <div>
      <slot>1111</slot>
    </div>

    <slot name="description" />
  </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
  
</style>