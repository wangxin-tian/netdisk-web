<script setup>
  import { onMounted } from 'vue'
  import log from './utils/log'
  import { useStore } from 'vuex'
  import { userLogin } from '@/service/api.js'

  onMounted(() => {
    log.msg('你好啊我是弟皇侠!!!');
    init();
  });

  const store = useStore();

  const init = async () => {
    try {
      if (store.getters.isLogin) return;
      
      const token = localStorage.getItem('token');
      console.log('----', token, import.meta.env.VITE_APP_BASE_URL)
      if (!token) throw new Error('no token');
      
      const res = await userLogin({});
      console.log("init:", res)
      res.code === 200 && store.dispatch('login', res.data);
      
    } catch (error) {
      store.dispatch('logout');
    }
  };
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
    background-color: var(--body-color);
  }
</style>
