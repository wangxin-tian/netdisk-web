<script setup>
import content from '@pages/person/resume.js'
import { onMounted } from 'vue'

onMounted(async () => {
  window.print();
});

</script>
<template>
  <div class="wrap">
    <section class="resume">
      <div v-html="content"></div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(5px);
  background-image: url('@/assets/bg.png');

  .resume {
    position: relative;
    height: 98vh;
    padding: 10px;
    border-radius: 6px;
    width: fit-content;
    overflow-y: scroll;
    background-color: var(--shell-color);

    .download-resume {
      top: 20px;
      right: 50%;
      position: fixed;
      transform: translateX(50%);
    }

    /* Webkit浏览器（如Chrome、Safari） */
    &::-webkit-scrollbar {
      width: 0px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Firefox浏览器 */
    &::-moz-scrollbar {
      width: 0px;
    }

    &::-moz-scrollbar-track {
      background: #f1f1f1;
    }

    /* IE浏览器 */
    &::-ms-scrollbar {
      width: 0px;
    }

    &::-ms-scrollbar-track {
      background: #f1f1f1;
    }
  }
}
</style>