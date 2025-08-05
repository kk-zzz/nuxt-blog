<template>
  <ul class="sidebar">
    <li v-for="post in allPosts" :key="post.id">
      <NuxtLink :to="post.path" class="hover:underline">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
  
<script setup lang='ts'>
// Find all posts
const allPosts = await queryCollection('blog').order('date', 'DESC').all()
</script>
  
<style lang="scss" scoped>
  
</style>