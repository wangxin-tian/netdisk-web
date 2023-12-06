<script setup>
import { Icon } from '@iconify/vue';
import { ArrowRight } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import { baseURL } from '@/config/config.js';
import message from '@/utils/message.js';

const mimeMap = {
  "image/jpeg": 1,
  "image/png": 1,
  "image/gif": 1,
  "audio/mpeg": 2,
  "audio/wav": 2,
  "video/mp4": 3,
  "video/quicktime": 3,
  "application/pdf": 4,
  "text/plain": 4,
  "text/markdown": 4
};

const store = useStore();
const props = defineProps(['open', 'urlList']);
const emit = defineEmits(['toggleSide', 'returnRoot', 'popUrl', 'openFolder'])
const url = baseURL + '/files/upload';

const beforeUpload = (file) => {

  const isLt20M = file.size / 1024 / 1024 < 20;
  if (!isLt20M) {
    message('error', '文件不能大于20MB');
  }
  return isLt20M;
};

const addFile = (file) => {
  console.log(file)
  console.log('type:', file.type)
  const len = props.urlList.length;
  console.log(len)
  let folderid = 0;
  if (len > 0) { folderid = props.urlList[len - 1].id }

  console.log(folderid)

  const data = {
    filename: file.name,
    userid: store.getters.getUserid,
    filetype: mimeMap[file.type] ?? 5,
    filesize: file.size / 1024 / 1024,
    folderid: folderid
  };

  return {
    "file-data": JSON.stringify(data),
  }
};

const uploadSuccess = () => {
  const len = props.urlList.length;
  if (len < 1) {
    emit('returnRoot');
    return;
  }
  const item = props.urlList[len - 1];
  emit('openFolder', item.id);
};

const back = () => {
  emit('popUrl');
  uploadSuccess();
}

</script>
<template>
  <div class="home-head-content">
    <div class="head-btns">
      <span class="btn-list" v-if="store.getters.isLogin">
        <el-space>
          <div class="head-title">全部文件</div>
          <el-upload class="upload-wrap" :action="url" :before-upload="beforeUpload" :data="addFile"
            :on-success="uploadSuccess" :show-file-list="false">
            <el-button link class="upload">上传</el-button>
          </el-upload>
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
    <div class="url-ctrl">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/home' }" @click="emit('returnRoot')">root</el-breadcrumb-item>
        <template v-for="(item, index) of urlList" :key="index">
          <el-breadcrumb-item>{{ item.folderName }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
      <div class="return-parent" @click="back">
        <span>回退</span>
        <Icon icon="el:return-key" class="rtn-icon" />
      </div>
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

      .add-file,
      .add-folder {
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
      margin-right: 20px;
    }

    .upload-wrap {
      height: 40px;
      width: 100px;

      .upload {
        height: 40px;
        width: 100px;
        background-color: var(--upload-btn-color);
        color: #fff;

        &:hover {
          background-color: var(--upload-toggle-color);
        }
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

  .head-btns+div {
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .return-parent {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      cursor: pointer;

      .rtn-icon {
        font-size: 16px;
      }

      &:hover {
        border: solid 1px var(--return-parent-color);
        color: var(--return-parent-color);
      }

      &:active {
        filter: contrast(200%);
      }
    }
  }
}
</style>