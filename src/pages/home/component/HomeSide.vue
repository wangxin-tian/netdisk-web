<script setup>
import { Icon } from '@iconify/vue'
import AudioFloat from '@/components/AudioFloat.vue'

</script>
<template>
  <div class="side-content">
    <div class="quick-access">
      <div class="quick-title">
        <Icon icon="ep:caret-bottom" />
        快捷访问：
      </div>
      <div class="quick-content">
        <el-button class="quick-btn" text>
          <Icon class="quick-icon" icon="ep:partly-cloudy" />
          图片
        </el-button>
        <el-button class="quick-btn" text>
          <Icon class="quick-icon" icon="ep:service" />
          音乐
        </el-button>
        <el-button class="quick-btn" text>
          <Icon class="quick-icon" icon="ep:video-camera" />
          视频
        </el-button>
        <el-button class="quick-btn" text>
          <Icon class="quick-icon" icon="ep:tickets" />
          文档
        </el-button>
        <el-button class="quick-btn" text>
          <Icon class="quick-icon" icon="basil:other-1-outline" />
          其他
        </el-button>
      </div>
    </div>
    <div class="line"></div>
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
    <div class="line"></div>
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
  justify-content: start;
  align-items: center;
  overflow-y: auto;

  .quick-access {
    width: 90%;
    color: var(--hide-btn-color);

    .quick-title {
      line-height: 30px;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .quick-content {
      display: flex;
      flex-direction: column;

      .quick-btn {
        display: block;
        text-align: left;

        &:hover {
          color: var(--hide-btn-color);
        }

        :first-child {
          font-size: 14px;
          margin-left: 10px;
          margin-right: 5px;
        }
      }

      .el-button+.el-button {
        margin-left: 0px;
      }
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

  .line {
    width: 90%;
    height: 0;
    border-top: 1px solid var(--shadow-color);
    margin: 10px 0;
  }

  /* Webkit浏览器（如Chrome、Safari） */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b3c2e0;
  }

}

.dark .quick-btn {
  background-color: #0000 !important;
}
</style>