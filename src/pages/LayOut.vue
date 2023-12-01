<script setup>
import { defineAsyncComponent, ref } from 'vue'

const SideBar = defineAsyncComponent(() =>
  import("@/components/SideBar.vue")
);

const close = ref(true);
const dark = ref(true);

const toggleMenu = () => (close.value = !close.value);
const toggleTheme = () => (dark.value = !dark.value);

</script>
<template>
  <div :class="dark ? 'light' : 'dark'">
    <SideBar :close="close" :dark="dark" @toggleMenu="toggleMenu" @toggleTheme="toggleTheme"></SideBar>
    <div :class="['content', { 'content-open': !close }]">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  position: fixed;
  width: calc(100vw - 88px);
  left: 88px;
  height: 100%;
  transition: all 0.3s ease;
}

.content-open {
  width: calc(100vw - 250px) !important;
  left: 250px !important;
  transition: all 0.3s ease;
}
.light, .dark {
  width: 100%;
  height: 100%;
  background-color: var(--body-color);
}
.dark {
  background-color: var(--body-color);
}
</style>