<script setup>
import { reactive, watch, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useStore } from "vuex";

const store = useStore();

const state = reactive({
  url: '',
  name: '视频',
  love: false,
  share: false
})

const getVideo = computed(() => {
  return store.state.video;
});

const formatName = name => {
  console.log('name', name)
  if (name) {
    return name.length > 50 ? name.substring(0, 47) + '...' : name;
  }
  return '-'
}

watch(getVideo, (value) => {
  console.log(value)
  state.url = value.url;
  state.name = formatName(value.name);
}, { immediate: true, deep: true });
</script>
<template>
  <div class="video-wrap">
    <div class="video-content">
      <div class="title">{{ state.name }}</div>
      <div class="control">
        <video :src="state.url" controls></video>
      </div>
      <div class="video-btns">
        <Icon icon="ic:baseline-download" />
        <Icon icon="mdi:heart" @click="state.love = !state.love" :class="state.love ? 'love-active' : ''" />
        <Icon icon="ep:share" @click="state.share = !state.share" :class="state.share ? 'share-active' : ''"/>
      </div>
    </div>
    <div class="video-side">
      <div class="side-content">
        <div class="side-title">播放列表</div>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.video-wrap {
  min-width: 1000px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  .video-side {
    width: 30%;
    height: 100%;
    margin-left: 10px;
    color: var(--item-text-color);
    .side-content {
      width: 100%;
      height: 100%;
      background-color: var(--shell-color);
      border-radius: 6px;
      box-shadow: 0.5px 0.5px 1px 1px var(--shadow-color);

      .side-title {
        height: 60px;
        width: 100%;
        text-align: center;
        line-height: 60px;
      }
    }
  }

  .video-content {
    width: 70%;
    min-height: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: var(--shell-color);
    color: var(--item-text-color);
    border-radius: 6px;
    box-shadow: 0.5px 0.5px 1px 1px var(--shadow-color);

    .title {
      margin-top: 20px;
      height: 40px;
      width: 80%;
      text-align: center;
      line-height: 40px;
      border: 3px dashed var(--upload-btn-color);
    }

    .control {
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: center;
      video {
        width: 100%;
        max-width: 900px;
        aspect-ratio: 16/9;
      }
    }

    .video-btns {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }

      .love-active {
        color: rgb(255, 98, 98)
      }

      .share-active {
        color: rgb(98, 121, 255)
      }
    }
  }
}
</style>