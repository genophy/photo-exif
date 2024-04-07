<template>
  <footer class="w-full">
    Author:
    <a href="https://github.com/genophy" target="_blank" title="genophy's github"
      >genophy's github</a
    >
    | Copyright © 2023-{{ date }} | <a href="https://beian.miit.gov.cn">苏ICP备2024079828号</a>
  </footer>
</template>

<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<style scoped lang="css">
footer {
  text-align: center;
  /* position: absolute; */
  /* bottom: 0; */
  width: 100%;
  font-size: 12px;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
a {
  color: #fff;
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: #fff;
}
</style>
