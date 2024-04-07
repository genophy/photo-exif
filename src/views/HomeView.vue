<!--
  FileDesc  : HomeView
  path      : src/views/HomeView.vue
  Author    : genophy (2024-04-07 01:14)
  Version   :
  Usage     :
-->
<template>
  <div class="flex flex-col min-h-80 p-12 v-home-view items-center justify-center select-none">
    <div class="flex w-full p-4 top-0 z-10 head justify-center sticky">
      <p class="mr-20 btn-choose">
        <template v-if="fileLoading">加载中...</template>
        <template v-else>
          <span>选择图片</span>
          <input type="file" @change="filechange" multiple accept="image/*" />
        </template>
      </p>

      <div
        @click="bgColorFlagStore.toggle()"
        class="switch"
        :class="[bgColorFlagStore.bgPrim ? 'on' : 'off']"
      >
        <p class="p-on">主调底色[点击切换]</p>
        <p class="p-off">白色底色[点击切换]</p>
      </div>
    </div>
    <div class="mt-5 w-full">
      <ImageTask v-if="images.length > 0" :images="images"></ImageTask>
      <div v-else class="text-center w-full">
        <div class="flex font-bold text-white p-8 text-5xl justify-center items-center">样片</div>
        <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
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

import sampleImage1 from '@/libs/assets/sample1.png'
import sampleImage2 from '@/libs/assets/sample2.png'
import sampleImage3 from '@/libs/assets/sample3.png'
import sampleImage4 from '@/libs/assets/sample4.png'
import sampleImage5 from '@/libs/assets/sample5.png'
import { useBgColorFlagStore } from '@/stores/bgColorFlag'

const bgColorFlagStore = useBgColorFlagStore()

const sampleImages = [sampleImage1, sampleImage2, sampleImage3, sampleImage4, sampleImage5]

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
.head {
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
.btn-choose {
  position: relative;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  padding: 8px 48px;
  text-align: center;
  line-height: 54px;
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
</style>
