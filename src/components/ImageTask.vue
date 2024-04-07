<!--
  FileDesc  : ImageTask
  path      : src/components/ImageTask.vue
  Author    : genophy (2024-04-07 02:11)
  Version   :
  Usage     :
-->
<template>
  <div
    class="text-center w-full grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] v-image-task"
  >
    <template v-if="images?.length > 0">
      <div class="m-8" v-for="(item, idx) in images as any" :key="idx">
        <ImageItem :file="item.file" :metadata="item.metadata"></ImageItem>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import ImageItem from './ImageItem.vue'

defineProps({
  images: null
})
</script>

<style scoped lang="scss"></style>
