<script setup>
import AudioFloat from '@/components/AudioFloat.vue'

</script>
<template>
  <div class="side-content">
    <div class="quick-access">
      <div class="quick-title">快捷访问：</div>
    </div>
    <div class="infomation">
      <div class="into-tag">
        文件详情
      </div>
      <div class="info-content">
        <div class="name">新建文本.md</div>
        <div>
          <span class="info-title">创建时间</span>
          <span class="info-text">2022-12-23 22:28</span>
        </div>
        <div>
          <span class="info-title">文件格式</span>
          <span class="info-text">.md</span>
        </div>
        <div>
          <span class="info-title">文件大小</span>
          <span class="info-text">20</span>
        </div>
      </div>
    </div>
    <AudioFloat />
  </div>
</template>
<style lang="scss" scoped>
.side-content {
  height: 100%;
  width: calc(100% - 10px);
  box-shadow: -0.5px -0.5px 1px 1px var(--shadow-color),
    0.5px 0.5px 1px 1px var(--shadow-color);
  background-color: var(--shell-color);
  display: flex;
  flex-direction: column;
  align-items: center;

  .quick-access {
    width: 90%;
    color: var(--hide-btn-color);
    
    .quick-title {
      font-size: 16px;
      font-weight: 600;

      
    }
  }


  .infomation {
    width: 90%;
    color: var(--text-color);
    line-height: 150%;

    .name {
      font-weight: 600;
    }

    .into-tag {
      font-size: 16px;
      height: 24px;
      font-weight: 300;
    }

    .info-title {
      font-weight: bold;
      margin-right: 5px;
    }

    .info-text {
      font-size: 13px;
    }
  }

}
</style>