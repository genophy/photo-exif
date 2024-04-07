<!--
  FileDesc  : HomeView
  path      : src/views/HomeView.vue
  Author    : genophy (2024-04-07 01:14)
  Version   :
  Usage     :
-->
<template>
  <div class="flex flex-col items-center justify-center p-12 select-none min-h-80 v-home-view">
    <div class="sticky top-0 z-10 flex justify-between w-full p-4 head">
      <div class="items-center justify-between flex-grow md:flex">
        <p class="p-3 text-sm btn-choose sm:p-6 sm:text-3xl">
          <template v-if="fileLoading">加载中...</template>
          <template v-else>
            <span>选择图片</span>
            <input type="file" @change="filechange" multiple accept="image/*" />
          </template>
        </p>
        <div class="hidden mx-8 img-w md:block">
          宽度
          <input class="mx-4 ipt-img-w" type="text" v-model="imageWidthStore.imageWidth" />
          px
        </div>
      </div>
    </div>
    <div class="w-full mt-5">
      <ImageTask v-if="images.length > 0" :images="images"></ImageTask>
      <div v-else class="w-full text-center">
        <div class="flex items-center justify-center p-8 text-5xl font-bold text-white">样片</div>
        <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <img v-for="(item, idx) in sampleImages" :key="idx" class="img" :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as ExifReader from 'exifreader'
import { ref } from 'vue'

import ImageTask from '@/components/ImageTask.vue'

import { useImageWidthStore } from '@/stores/ImageWidth'

const imageWidthStore: any = useImageWidthStore()

const sampleImages = [
  './samples/sample1.jpeg',
  './samples/sample2.jpeg',
  './samples/sample3.jpeg',
  './samples/sample4.jpeg'
]

let fileLoading = ref(false)
let images: any = ref([])

async function filechange(e: any) {
  images.value = []
  fileLoading.value = true
  const files: any[] = e.target.files || []
  try {
    if (files?.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const tags = await ExifReader.load(files[i])
        console.log('---> ', tags)

        images.value.push({ file: files[i], metadata: tags })
      }
    }
    fileLoading.value = false
  } catch (err) {
    console.error(err)
    fileLoading.value = false
  }
}
</script>

<style scoped lang="scss">
.v-home-view {
  max-width: 1440px;
  margin: 0 auto;
}
.head {
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
.btn-choose {
  position: relative;
  color: #fff;
  font-weight: bolder;

  text-align: center;
  line-height: 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s linear;
  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:hover {
    box-shadow:
      0px 0px 30px 0px #fff inset,
      0px 0px 40px 0px #fff;
    text-shadow: 0 0 10px #fff;
  }

  > input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    &:hover,
    &:active {
      cursor: pointer;
    }
  }
}

.switch {
  width: 200px;
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;

  > .p-on,
  > .p-off {
    display: block;
    transition: all 0.2s linear;
  }
  .p-on {
    color: #35fa7a;
  }
  .p-off {
    color: #fff;
  }
  &.on {
    > .p-on {
      transform: scale(1) translateY(0) rotateY(0deg);
    }
    > .p-off {
      transform: scale(0.4) translateY(-10px) rotateY(-15deg);
    }
  }
  &.off {
    > .p-on {
      transform: scale(0.4) translateY(10px) rotateY(15deg);
    }
    > .p-off {
      transform: scale(1) translateY(0) rotateZ(0deg);
    }
  }
  &:hover {
    opacity: 1;
    text-shadow: 0 0 10px #fff;
  }
}

.sample-img {
  width: 1300px;
  display: block;
}

.img-w {
  font-size: 16px;
  font-weight: 800;
  text-align: center;
}
.ipt-img-w {
  padding: 12px 0;
  width: 80px;
  border-radius: 20px;
  color: #222;
  text-align: center;
}
</style>
