import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBgColorFlagStore = defineStore('bgColorFlag', () => {
  const bgPrim = ref(true)

  function toggle() {
    bgPrim.value = !bgPrim.value
  }

  return { bgPrim, toggle }
})
