<!--
  FileDesc  : App
  path      : src/App.vue
  Author    : genophy (2024-04-07 07:38)
  Version   :
  Usage     :
-->
<template>
  <div>
    <RouterView />
    <PageCopyright />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageCopyright from './components/pages/PageCopyright.vue'
</script>

<script setup lang="ts"></script>

<style scoped lang="css"></style>
