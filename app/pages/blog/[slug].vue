<template>
  <div class="blog mx-auto p-6">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
// console.log('route--', useRoute());
// console.log('data--', post);
</script>

<style lang="scss" scoped>
</style>
