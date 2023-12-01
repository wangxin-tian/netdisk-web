<script setup>
import content from '@pages/person/resume.js'
import { ref, onMounted } from 'vue'
import { Download } from '@element-plus/icons-vue'
import MyLoading from '@/components/MyLoading.vue';
import { useRouter } from 'vue-router'
import jsPDF from 'jspdf'
import html2Canvas from 'html2Canvas'

const router = useRouter();
const resumeDom = ref(null);
const loadingRef = ref(null);

const downloadResumn = () => {
  document.title = 'dhxの个人简历';
  router.push('jianli');
  if (resumeDom.value) {
    // 图片导出
    // html2Canvas(resumeDom.value).then((canvas) => {
    //   var imgData = canvas.toDataURL('image/png');
    //   var doc = new jsPDF('p', 'px', [520, 700]);
    //   doc.addImage(imgData, 'PNG', 10, 10);
    //   doc.save('简历.pdf');
    // });
  }
}

onMounted(() => {
  setTimeout(() => {
    loadingRef.value.closeLoading();
  }, 1000);
});
</script>
<template>
  <div class="wrap">
    <MyLoading ref="loadingRef" />
    <section class="resume">
      <div v-html="content" ref="resumeDom"></div>
      <el-button @click="downloadResumn" class="download-resume" :icon="Download" type="primary" circle />
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
    background-color: #FFF;

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