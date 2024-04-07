<!--
  FileDesc  : CameraIcon
  path      : src/components/CameraIcon.vue
  Author    : genophy (2024-04-08 04:09)
  Version   :
  Usage     :
-->
<template>
  <img
    style="width: 100%; height: 100%; object-fit: contain"
    v-if="cameraName"
    :src="`./imgs/${cameraName}.svg`"
    alt=""
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

const cameraName = computed(() => `${props.name || ''}`.split(' ')[0].toLocaleLowerCase())
</script>

<style scoped lang="css"></style>
