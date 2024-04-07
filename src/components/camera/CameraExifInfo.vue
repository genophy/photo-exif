<!--
  FileDesc  : CameraExifInfo
  path      : src/components/CameraExifInfo.vue
  Author    : genophy (2024-04-09 07:08)
  Version   :
  Usage     :
-->
<template>
  <div class="v-camera-exif-info">
    <div class="flex items-center justify-between w-full px-8 py-4 flex-nowrap camera-desc">
      <div class="text-left content-item">
        <p class="flex space-x-3 text-lg flex-nowrap">
          <span class="font-title">
            {{ t31 }}
          </span>
          <span class="font-title">
            {{ t32 }}
          </span>
          <span class="font-title">
            {{ t33 }}
          </span>
          <span class="font-title">
            {{ t34 }}
          </span>
        </p>
        <p class="mt-1 text-base opacity-65">{{ t4 }}</p>
      </div>
      <div class="flex items-center text-left content-item">
        <div v-if="t0" class="pr-6 border-r-2" :style="{ borderColor: fgColor }">
          <div class="camera-icon">
            <CameraIcon :name="t0"></CameraIcon>
          </div>
        </div>
        <div class="pl-6">
          <p class="text-xl font-title">
            {{ t1 }}
          </p>
          <p className="mt-1 text-base opacity-65 ">
            {{ t2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CameraIcon from './CameraIcon.vue'
const props = defineProps({
  metadata: null,
  fgColor: {
    type: String,
    default: '#000'
  }
})

// 厂商
const t0 = computed(() => props.metadata?.Make?.description || '')
// 相机
const t1 = computed(
  () => props.metadata?.Model?.description || props.metadata?.['Device Manufacturer']?.description
)

// 镜头
const t2 = computed(
  () => props.metadata?.LensModel?.description || props.metadata?.Lens?.description
)
// 参数

const t31 = computed(() =>
  props.metadata?.ISOSpeedRatings?.description
    ? `ISO${props.metadata?.ISOSpeedRatings?.description}`
    : ''
)
const t32 = computed(() =>
  props.metadata?.FocalLength?.description &&
  props.metadata?.FocalLength?.description.toLowerCase() !== 'unknown'
    ? `${props.metadata?.FocalLength?.description.split(' ')[0]}mm`
    : ''
)
const t33 = computed(() => props.metadata?.FNumber?.description || '')
const t34 = computed(() =>
  props.metadata?.ExposureTime?.description ? `${props.metadata?.ExposureTime?.description}s` : ''
)

// 时间
const t4 = computed(() =>
  (props.metadata?.DateTimeOriginal?.description || '')
    .replace(':', '年')
    .replace(':', '月')
    .replace(' ', '日 ')
)
</script>

<style scoped lang="scss">
.camera-icon {
  height: 52px;
  padding: 4px;
  max-width: 120px;
}
</style>
