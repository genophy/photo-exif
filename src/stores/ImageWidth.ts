import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useImageWidthStore = defineStore('imageWidth', () => {
  const imageWidth = ref(1440)
  const imageWidthPx = computed(() => `${imageWidth.value}px`)

  return { imageWidth, imageWidthPx }
})
