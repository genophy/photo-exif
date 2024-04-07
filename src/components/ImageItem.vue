<!--
  FileDesc  : ImageItem
  path      : src/components/ImageItem.vue
  Author    : genophy (2024-04-07 02:18)
  Version   :
  Usage     :
-->
<template>
  <div class="overflow-hidden v-image-item">
    <div class="relative image-v">
      <template v-if="resultImgUrl">
        <!-- 下载 -->
        <div class="flex items-center justify-between mb-2 flex-nowrap">
          <div class="flex flex-wrap items-center">
            <p v-if="file?.name" class="image-v-title">{{ file.name }}</p>
            <div class="palette-box">
              <i
                :style="{ backgroundColor: '#000', borderColor: '#fff' }"
                @click="changeColor('#000', '#fff')"
                :class="{ selected: bgColor === '#fff' }"
              ></i>
              <i
                :style="{ backgroundColor: '#fff', borderColor: '#000' }"
                @click="changeColor('#fff', '#000')"
                :class="{ selected: bgColor === '#000' }"
              ></i>
              <i
                v-for="item in palette"
                :key="item.rgb"
                :style="{ backgroundColor: item.reverse, borderColor: item.rgb }"
                @click="changeColor(item.reverse, item.rgb)"
                :class="{ selected: bgColor === item.rgb }"
              >
              </i>
            </div>
          </div>
          <a
            :href="resultImgUrl"
            :download="fileName || file.name || 'image-out.png'"
            class="flex-shrink-0 btn-download"
            title="下载"
          >
            <img src="../libs/assets/download.svg" alt="下载" />
          </a>
        </div>

        <img v-if="!imgLoading" :src="resultImgUrl" alt="" />

        <!-- exif特别参数 -->
        <CameraExifExp :metadata="metadata"></CameraExifExp>
      </template>
      <div v-if="imgLoading" class="icon-loading">
        <img
          src="../libs/assets/loading.svg"
          style="width: 64px; height: 64px"
          class="icon"
          alt="loading"
        />
      </div>
    </div>
    <!-- 格式修改项 -->
    <div class="absolute opacity-0 pointer-events-none">
      <!-- <div> -->
      <div
        class="image-p"
        :style="{ backgroundColor: bgColor, color: fgColor, width: imageWidthStore.imageWidthPx }"
        ref="imageP"
      >
        <!-- 图像 -->
        <div class="">
          <img v-if="fileBlob" :src="fileBlob" alt="图片" class="image" />
        </div>
        <!-- exif内容 -->
        <CameraExifInfo :metadata="metadata" :fgColor="fgColor"></CameraExifInfo>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { readImgToColor } from '@/libs/helper/readImg'
import { domToPng } from 'modern-screenshot'
import { nextTick, onMounted, ref } from 'vue'

import { useImageWidthStore } from '@/stores/ImageWidth'
import CameraExifExp from './camera/CameraExifExp.vue'
import CameraExifInfo from './camera/CameraExifInfo.vue'
const imageWidthStore: any = useImageWidthStore()

const props = defineProps({
  file: null,
  metadata: null
})

const fileBlob = ref()
const resultImgUrl = ref()
const imageP = ref()
const bgColor = ref('#fff')
const fgColor = ref('#000')
const fileName = ref('')
const palette: any = ref([])
const imgLoading = ref(false)

onMounted(async () => {
  // 默认用白底渲染div
  await renderDiv()
})

async function renderDiv() {
  fileBlob.value = null
  const file = props.file
  if (!file) return

  imgLoading.value = true
  if (file.name.toLowerCase().endsWith('.heic')) {
    const heic2any = (await import('heic2any')).default
    const blob = await heic2any({ blob: file })
    fileBlob.value = URL.createObjectURL(blob as Blob)
  } else {
    const blob = new Blob([file], { type: file.type })
    fileBlob.value = URL.createObjectURL(blob as Blob)
  }
  fileName.value = file.name.replace(/\.[^.]+$/, '.png')
  await getPalette()
  nextTick(async () => {
    await generatePng()

    imgLoading.value = false
  })
}

async function changeColor(fg: string, bg: string) {
  fgColor.value = fg
  bgColor.value = bg
  imgLoading.value = true
  resultImgUrl.value = null
  nextTick(async () => {
    await generatePng()
    imgLoading.value = false
  })
}

async function generatePng() {
  resultImgUrl.value = await domToPng(imageP.value)
}

async function getPalette() {
  // 获取图片色彩板
  const { paletteColors } = (await readImgToColor(fileBlob.value)) as any
  palette.value = paletteColors
}
</script>

<style scoped lang="scss">
.v-image-item {
  position: relative;

  .image-v {
    .image-v-title {
      display: inline-block;
      color: #fff;
      padding: 4px 20px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.4);
      word-break: break-all;
    }

    .btn-download {
      color: #222;
      background-color: rgb(232, 232, 232);
      padding: 4px;
      opacity: 0.64;
      &:hover {
        opacity: 1;
      }
    }

    .icon-loading {
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        animation: rotate1 2s infinite;
      }
    }
  }

  .image-p {
    position: absolute;
    background-color: #fff;
    position: relative;
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.palette-box {
  display: flex;
  flex-flow: row wrap;
  margin: 16px;
  > i {
    display: block;
    width: 32px;
    height: 32px;
    border-width: 8px;
    border-style: solid;
    margin: 4px 8px;
    border-radius: 100%;
    cursor: pointer;
    transition: scale 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }
    &.selected {
      border-radius: 0;
    }
  }
}
</style>
