<script setup>
import { Icon } from '@iconify/vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore();
const props = defineProps(['open']);
const emit = defineEmits(['toggleSide'])

</script>
<template>
  <div class="home-head-content">
    <div class="head-btns">
      <span class="btn-list" v-if="store.getters.isLogin">
        <el-space>
          <div class="head-title">全部文件</div>
          <el-button link class="upload">上传</el-button>
          <el-button link class="new-folder">
            <Icon class="add-folder" icon="ep:folder-add" />
            <span>新增文件夹</span>
          </el-button>
          <el-button link class="new-file">
            <Icon class="add-file" icon="ep:document-add" />
            <span>新建文档</span>
          </el-button>
        </el-space>
        <span>
          <a class="side-controller">
            <Icon class="side-controller" icon="ep:menu" />
          </a>
          <a class="side-controller" v-show="!open" @click="emit('toggleSide')">
            <Icon class="side-controller" icon="ep:arrow-left" />
          </a>
          <a class="side-controller" v-show="open" @click="emit('toggleSide')">
            <Icon class="side-controller" icon="ep:arrow-right" />
          </a>
        </span>
      </span>
      <span class="btn-list" v-else>
        <el-button plain @click="setOpen">跳转登入</el-button>
      </span>
    </div>
    <div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/home' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-head-content {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
  color: var(--text-color);

  .head-btns {
    flex: 1;
    display: flex;
    align-items: center;

    .btn-list {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .add-file, .add-folder {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      .side-controller {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }

    .head-title {
      font-family: '楷体';
      font-size: 20px;
    }

    .upload {
      height: 40px;
      width: 100px;
      background-color: var(--upload-btn-color);
      color: #fff;
      margin-left: 20px;

      &:hover {
        background-color: var(--upload-toggle-color);
      }
    }

    .new-file {
      border: 1px solid var(--new-btn-border-color);
      height: 40px;
      width: 100px;
    }

    .new-folder {
      border: 1px solid var(--new-btn-border-color);
      height: 40px;
      width: 110px;
    }
  }

  div+div {
    height: 20px;
  }
}
</style>