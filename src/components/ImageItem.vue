<!--
  FileDesc  : ImageItem
  path      : src/components/ImageItem.vue
  Author    : genophy (2024-04-07 02:18)
  Version   :
  Usage     :
-->
<template>
  <div class="v-image-item">
    <div class="image-v relative">
      <template v-if="dataUrl">
        <!-- 下载 -->
        <div class="flex mb-2 justify-between items-center">
          <p v-if="file?.name" class="image-v-title">{{ file.name }}</p>
          <a
            :href="dataUrl"
            :download="fileName || file.name || 'image-out.png'"
            class="shadow-black shadow-2xl btn-download"
            title="下载"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </a>
        </div>

        <img :src="dataUrl" alt="" />
      </template>
      <div v-if="imgLoading" class="icon-loading">
        <svg
          t="1712436877660"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4275"
          width="64"
          height="64"
        >
          <path
            d="M256 529.066667H85.333333a17.066667 17.066667 0 1 1 0-34.133334h170.666667a17.066667 17.066667 0 0 1 0 34.133334z"
            opacity=".278"
            p-id="4276"
            fill="#ffffff"
          ></path>
          <path
            d="M99.84 640a17.066667 17.066667 0 0 1-4.437333-33.553067l164.693333-44.373333a17.066667 17.066667 0 1 1 8.891733 32.9728l-164.693333 44.373333a17.544533 17.544533 0 0 1-4.4544 0.580267z"
            opacity=".322"
            p-id="4277"
            fill="#ffffff"
          ></path>
          <path
            d="M264.533333 462.523733a16.896 16.896 0 0 1-4.369066-0.580266l-164.693334-43.52a17.0496 17.0496 0 1 1 8.721067-32.989867l164.693333 43.52a17.066667 17.066667 0 1 1-4.352 33.570133z"
            opacity=".239"
            p-id="4278"
            fill="#ffffff"
          ></path>
          <path
            d="M384.017067 307.2a17.032533 17.032533 0 0 1-14.7968-8.533333l-85.333334-147.626667a17.066667 17.066667 0 0 1 29.559467-17.083733l85.333333 147.626666A17.066667 17.066667 0 0 1 384.017067 307.2z"
            opacity=".122"
            p-id="4279"
            fill="#ffffff"
          ></path>
          <path
            d="M639.982933 307.2a17.0496 17.0496 0 0 1-14.762666-25.6l85.333333-147.626667a17.066667 17.066667 0 1 1 29.559467 17.066667l-85.333334 147.626667a17.032533 17.032533 0 0 1-14.7968 8.533333z"
            opacity=".922"
            p-id="4280"
            fill="#ffffff"
          ></path>
          <path
            d="M692.906667 347.306667a17.066667 17.066667 0 0 1-12.117334-29.098667l120.337067-121.173333a17.066667 17.066667 0 1 1 24.234667 24.046933l-120.337067 121.173333a17.1008 17.1008 0 0 1-12.117333 5.051734z"
            opacity=".878"
            p-id="4281"
            fill="#ffffff"
          ></path>
          <path
            d="M733.883733 401.066667a17.066667 17.066667 0 0 1-8.5504-31.8464l147.626667-85.333334a17.0496 17.0496 0 1 1 17.066667 29.5424l-147.626667 85.333334a16.776533 16.776533 0 0 1-8.516267 2.304z"
            opacity=".839"
            p-id="4282"
            fill="#ffffff"
          ></path>
          <path
            d="M512 273.066667a17.066667 17.066667 0 0 1-17.066667-17.066667V85.333333a17.066667 17.066667 0 0 1 34.133334 0v170.666667a17.066667 17.066667 0 0 1-17.066667 17.066667z"
            p-id="4283"
            fill="#ffffff"
          ></path>
          <path
            d="M578.577067 281.6a17.066667 17.066667 0 0 1-16.520534-21.418667l43.52-164.693333a17.066667 17.066667 0 0 1 33.006934 8.721067l-43.52 164.693333a17.066667 17.066667 0 0 1-16.4864 12.6976z"
            opacity=".961"
            p-id="4284"
            fill="#ffffff"
          ></path>
          <path
            d="M445.44 282.453333a17.066667 17.066667 0 0 1-16.469333-12.629333l-44.373334-164.693333a17.066667 17.066667 0 0 1 32.955734-8.891734l44.373333 164.693334a17.066667 17.066667 0 0 1-16.4864 21.521066z"
            opacity=".078"
            p-id="4285"
            fill="#ffffff"
          ></path>
          <path
            d="M924.177067 640c-1.4848 0-2.9696-0.187733-4.4544-0.580267l-164.693334-44.373333a17.066667 17.066667 0 0 1 8.874667-32.9728l164.693333 44.373333a17.066667 17.066667 0 0 1-4.420266 33.553067z"
            opacity=".722"
            p-id="4286"
            fill="#ffffff"
          ></path>
          <path
            d="M881.476267 742.4a17.015467 17.015467 0 0 1-8.482134-2.269867l-148.48-85.333333a17.0496 17.0496 0 1 1 16.9984-29.5936l148.48 85.333333a17.0496 17.0496 0 0 1-8.516266 31.863467z"
            opacity=".678"
            p-id="4287"
            fill="#ffffff"
          ></path>
          <path
            d="M813.226667 830.293333a17.015467 17.015467 0 0 1-12.066134-5.000533l-120.337066-120.337067a17.0496 17.0496 0 1 1 24.132266-24.132266l120.337067 120.337066a17.0496 17.0496 0 0 1-12.066133 29.1328z"
            opacity=".639"
            p-id="4288"
            fill="#ffffff"
          ></path>
          <path
            d="M938.666667 529.066667H768a17.066667 17.066667 0 1 1 0-34.133334h170.666667a17.066667 17.066667 0 1 1 0 34.133334z"
            opacity=".761"
            p-id="4289"
            fill="#ffffff"
          ></path>
          <path
            d="M401.066667 941.226667a17.066667 17.066667 0 0 1-16.4864-21.504l44.373333-164.693334a17.066667 17.066667 0 1 1 32.955733 8.874667l-44.373333 164.693333a17.066667 17.066667 0 0 1-16.469333 12.629334z"
            opacity=".478"
            p-id="4290"
            fill="#ffffff"
          ></path>
          <path
            d="M298.6496 898.56a17.066667 17.066667 0 0 1-14.779733-25.565867l85.333333-148.48a17.083733 17.083733 0 0 1 29.5936 16.9984l-85.333333 148.48a17.032533 17.032533 0 0 1-14.813867 8.567467z"
            opacity=".439"
            p-id="4291"
            fill="#ffffff"
          ></path>
          <path
            d="M512 955.733333a17.066667 17.066667 0 0 1-17.066667-17.066666V768a17.066667 17.066667 0 1 1 34.133334 0v170.666667a17.066667 17.066667 0 0 1-17.066667 17.066666z"
            opacity=".522"
            p-id="4292"
            fill="#ffffff"
          ></path>
          <path
            d="M725.3504 898.56a17.032533 17.032533 0 0 1-14.7968-8.533333l-85.333333-147.626667a17.066667 17.066667 0 0 1 29.559466-17.066667l85.333334 147.626667a17.066667 17.066667 0 0 1-14.762667 25.6z"
            opacity=".6"
            p-id="4293"
            fill="#ffffff"
          ></path>
          <path
            d="M622.062933 942.08c-7.509333 0-14.421333-5.0176-16.469333-12.629333l-44.3904-164.693334a17.066667 17.066667 0 1 1 32.9728-8.874666l44.3904 164.693333a17.066667 17.066667 0 0 1-16.503467 21.504z"
            opacity=".561"
            p-id="4294"
            fill="#ffffff"
          ></path>
          <path
            d="M759.4496 463.36a17.083733 17.083733 0 0 1-4.420267-33.553067l164.693334-44.373333a17.066667 17.066667 0 0 1 8.874666 32.955733l-164.693333 44.373334a16.657067 16.657067 0 0 1-4.4544 0.597333z"
            opacity=".702"
            p-id="4295"
            fill="#ffffff"
          ></path>
          <path
            d="M330.24 347.306667a17.015467 17.015467 0 0 1-12.066133-5.000534l-120.32-120.32a17.0496 17.0496 0 1 1 24.132266-24.132266l120.32 120.32a17.0496 17.0496 0 0 1-12.066133 29.1328z"
            opacity=".161"
            p-id="4296"
            fill="#ffffff"
          ></path>
          <path
            d="M290.116267 401.066667a17.032533 17.032533 0 0 1-8.533334-2.286934l-147.626666-85.333333a17.066667 17.066667 0 1 1 17.083733-29.5424l147.626667 85.333333a17.066667 17.066667 0 0 1-8.5504 31.829334z"
            opacity=".2"
            p-id="4297"
            fill="#ffffff"
          ></path>
          <path
            d="M142.523733 742.4a17.066667 17.066667 0 0 1-8.567466-31.8464l147.626666-85.333333a17.066667 17.066667 0 1 1 17.083734 29.559466l-147.626667 85.333334a16.930133 16.930133 0 0 1-8.516267 2.286933z"
            opacity=".361"
            p-id="4298"
            fill="#ffffff"
          ></path>
          <path
            d="M209.92 830.293333a17.066667 17.066667 0 0 1-12.117333-29.098666l120.32-121.173334a17.066667 17.066667 0 0 1 24.2176 24.029867l-120.32 121.1904a16.896 16.896 0 0 1-12.100267 5.051733z"
            opacity=".4"
            p-id="4299"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 格式修改项 -->
    <div class="opacity-0 -z-10 absolute pointer-events-none">
      <!-- <div> -->
      <div class="image-p" :style="{ backgroundColor: bgColor, color: fgColor }" ref="imageP">
        <!-- 图像 -->
        <div class="p-12">
          <img
            v-if="fileBlob"
            :src="fileBlob"
            alt="图片"
            class="rounded-3xl shadow-black shadow shadow-2xl image"
          />
        </div>
        <!-- 内容 -->
        <div class="content">
          <div class="data01">
            <p class="t1">
              <template
                v-if="
                  metadata?.Model?.description || metadata?.['Device Manufacturer']?.description
                "
              >
                <p>
                  <strong>{{
                    metadata?.Model?.description || metadata?.['Device Manufacturer']?.description
                  }}</strong>
                </p>
              </template>
            </p>
            <p className="space-x-3 mt-3  t2">
              <span v-if="metadata?.LensModel?.description || metadata?.Lens?.description">
                {{ metadata?.LensModel?.description || metadata?.Lens?.description }}</span
              >
            </p>

            <p className="space-x-3 mt-1  t3">
              <span
                v-if="
                  metadata?.FocalLength?.description &&
                  metadata?.FocalLength?.description.toLowerCase() !== 'unknown'
                "
              >
                {{ metadata?.FocalLength?.description.split(' ')[0] }}mm
              </span>
              <span v-if="metadata?.FNumber?.description">
                {{ metadata?.FNumber?.description }}
              </span>
              <span v-if="metadata?.ExposureTime?.description">
                {{ metadata?.ExposureTime?.description }}
              </span>
              <span v-if="metadata?.ISOSpeedRatings?.description">
                ISO{{ metadata?.ISOSpeedRatings?.description }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isDarkColor } from '@/libs/helper/hex.helper'
import { readImgToColor } from '@/libs/helper/readImg'
import { useBgColorFlagStore } from '@/stores/bgColorFlag'
import { domToPng } from 'modern-screenshot'
import { nextTick, onMounted, ref } from 'vue'

const bgColorFlagStore = useBgColorFlagStore()

const props = defineProps({
  file: null,
  metadata: null
})

let fileBlob = ref()
let dataUrl = ref()
let imageP = ref()
let bgColor = ref('#fff')
let fgColor = ref('#000')
let fileName = ref('')

let imgLoading = ref(false)

onMounted(async () => {
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
  // 若用图片主调颜色
  if (bgColorFlagStore.bgPrim) {
    await resetBgColorAndFgColor(fileBlob.value)
  }

  nextTick(async () => {
    dataUrl.value = await domToPng(imageP.value)

    imgLoading.value = false
  })
})

async function resetBgColorAndFgColor(imageUrl: any) {
  const color = (await readImgToColor(imageUrl)) as any
  bgColor.value = `rgb(${color.join(',')})`
  if (isDarkColor(bgColor.value)) {
    fgColor.value = '#fff'
  }
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
      border-radius: 20px 20px 0 20px;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .btn-download {
      color: #222;
      border-radius: 20px 20px 20px 0;
      background-color: rgb(232, 232, 232);
      padding: 8px;
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
    width: 1440px;
    background-color: #fff;
    // border-radius: 48px;
    position: relative;
    .content {
      text-align: center;
      padding: 24px;
      .t1 {
        font-size: 32px;
        line-height: 16px;
      }
      .t2 {
        font-size: 24px;
        line-height: 16px;

        padding-top: 18px;
      }
      .t3 {
        font-size: 18px;
        padding-top: 8px;
      }
    }
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
</style>