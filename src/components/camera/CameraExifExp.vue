<!--
  FileDesc  : CameraExifExp
  path      : src/components/camera/CameraExifExp.vue
  Author    : genophy (2024-04-09 07:09)
  Version   :
  Usage     :
-->
<template>
  <div class="text-sm text-left v-camera-exif-exp">
    <p>
      Make: <span>{{ t0 }}</span>
    </p>
    <p>
      Artist: <span>{{ s_Artist }}</span>
    </p>
    <p>
      CameraOwnerName:<span>{{ s_CameraOwnerName }}</span>
    </p>
    <p>
      OwnerName: <span>{{ s_OwnerName }}</span>
    </p>

    <p>
      creator: <span>{{ s_creator }}</span>
    </p>
    <p>
      Software: <span>{{ s_Software }}</span>
    </p>
    <p>
      Copyright: <span>{{ s_Copyright }}</span>
    </p>
    <p>
      Image Width: <span>{{ s_Image_Width }}</span>
    </p>
    <p>
      Image Height: <span>{{ s_Image_Height }}</span>
    </p>
    <p>
      GPSLatitude: <span>{{ s_GPSLatitude }}</span>
    </p>
    <p>
      GPSLongitude: <span>{{ s_GPSLongitude }}</span>
    </p>
    <p>
      Address: <span>{{ s_address || '-' }}</span>
    </p>
    <p>
      AddressDetail: <span>{{ s_addressDetail || '-' }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { getAddr, gps2bd } from '@/libs/helper/address'
import { computed, ref, unref, watch } from 'vue'

const props = defineProps({
  metadata: null
})

// 一下是特别参数
const t0 = computed(() => props.metadata?.Make?.description || '')
// 所有者
const s_Artist = computed(() => props.metadata?.Artist?.description || '-')
const s_CameraOwnerName = computed(() => props.metadata?.CameraOwnerName?.description || '-')
const s_OwnerName = computed(() => props.metadata?.OwnerName?.description || '-')
const s_creator = computed(() => props.metadata?.creator?.description || '-')
const s_Software = computed(() => props.metadata?.Software?.description || '-')
const s_Copyright = computed(() => props.metadata?.Copyright?.description || '-')
const s_Image_Width = computed(() => props.metadata?.['Image Width']?.description || '0')
const s_Image_Height = computed(() => props.metadata?.['Image Height']?.description || '0')
const s_GPSLatitude = computed(() => props.metadata?.['GPSLatitude']?.description || '0')
const s_GPSLongitude = computed(() => props.metadata?.['GPSLongitude']?.description || '0')
const s_address = ref('')
const s_addressDetail = ref('')
watch(
  s_GPSLatitude.value,
  () => {
    if (unref(s_GPSLatitude) && unref(s_GPSLongitude) && +unref(s_GPSLatitude) !== 0) {
      gps2bd(unref(s_GPSLatitude), unref(s_GPSLongitude)).then((res: any) => {
        if (!res) return
        const { lat, lng } = res?.points?.[0] as any
        getAddr(lat, lng).then((res: any) => {
          if (!res) return
          s_address.value = res.address
          s_addressDetail.value = parseMapData(res.content.address_detail)
        })
      })
    }
  },
  { immediate: true }
)

function parseMapData(data: any) {
  const arr = []
  for (let key in data) {
    if (data[key]) {
      arr.push(`${key} : ${data[key]}`)
    }
  }
  return arr.join(' | ')
}
</script>

<style scoped lang="css"></style>
