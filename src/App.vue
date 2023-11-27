<script setup>
  import { onMounted } from 'vue'
  import log from './utils/log'

  onMounted(() => {
    log.msg('你好啊我是弟皇侠!!!');
  });
</script>

<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <div class="page-body">
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .page-body {
    width: 100%;
    height: 100%;
  }
</style>
