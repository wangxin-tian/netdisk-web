<script setup>
import image from '@/assets/avator-s.jpg'
import musicSource from '@/assets/柔和之光.mp3'
import { Icon } from '@iconify/vue';
import { ref, toRefs, reactive, watch, computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();
const volume = ref(60);
const pause = ref(true);
const music = ref(null);
const seekbar = ref(null);

const state = reactive({
  url: musicSource,
  name: '柔和之光.mp3',
  current: '00:00',
  end: '00:00',
  circle: false,
  love: false,
  volume: true
})

const imageRotate = ref(false);

const setVolume = (tag) => {
  if (tag === 'add') {
    const value = volume.value + 10;
    volume.value = value > 100 ? 100 : value;
  }

  if (tag === 'sub') {
    const value = volume.value - 10;
    volume.value = value < 0 ? 0 : value;
  }
}

const closeVolume = () => {
  const isMuted = !state.volume;
  state.volume = isMuted;
  music.value.volume = isMuted ? 1 : 0;
};

const handlePlay = () => {
  if (music.value.paused) {
    music.value.play();
    pause.value = false;
    imageRotate.value = true;
    console.log(music)
    console.log(imageRotate.value)
  } else {
    music.value.pause();
    pause.value = true;
    imageRotate.value = false;
    console.log(imageRotate.value)
  }
}

const musicLoaded = () => {
  console.log('加载', music)
  seekbar.value.max = music.value.duration;
  const ds = parseInt(music.value.duration % 60).toString().padStart(2, 0);
  const dm = parseInt((music.value.duration / 60) % 60).toString().padStart(2, 0);
  state.end = dm + ':' + ds;
  handlePlay();
}

const musicEnd = () => {
  console.log('结束', music)
  music.value.pause();
  pause.value = true;
  music.value.currentTime = 0;
}

const timeUpdate = () => {
  seekbar.value.value = music.value.currentTime;
  const ds = parseInt(music.value.currentTime % 60).toString().padStart(2, 0);
  const dm = parseInt((music.value.currentTime / 60) % 60).toString().padStart(2, 0);
  state.current = dm + ':' + ds;
}

/** 点击进度条时更新音乐 */
const handleSeekbar = () => {
  music.value.currentTime = seekbar.value.value;
}

const setMusicCircle = () => {
  const isloop = !state.circle;
  state.circle = isloop;
  music.value.loop = isloop;
}

const formatName = name => {
  console.log('name', name)
  if (name) {

    return name.length > 16 ? name.substring(0, 13) + '...' : name;
  }
  return '-'
}

const getAudio = computed(() => {
  return store.state.audio
});

watch(getAudio, (value) => {
  state.url = value.url;
  state.name = formatName(value.name);
}, { deep: true });

</script>
<template>
  <div class="audio-wrap">
    <div class="audio-title">
      <Icon icon="ep:top-left" />
      音乐盒子
    </div>
    <div class="audio-display">
      <div class="image-wrap">
        <img :src="image" alt="audio-default-image" :class="imageRotate ? '' : 'audio-image'" width="130">
      </div>
    </div>
    <div class="info">
      <div class="title">
        <span class="scroll-word">
          {{ state.name }}
        </span>
      </div>
      <div class="singer">困困</div>
    </div>
    <div class="audio-btns">
      <Icon icon="mynaui:repeat" @click="setMusicCircle" :class="state.circle ? 'circle-active' : ''" />
      <Icon icon="mdi:heart" @click="state.love = !state.love" :class="state.love ? 'love-active' : ''" />
      <div class="volume" @click="closeVolume">
        <Icon v-show="state.volume" icon="basil:volume-up-solid" />
        <Icon v-show="!state.volume" icon="basil:volume-off-solid" />
      </div>
    </div>
    <div class="audio-sound">
      <Icon icon="carbon:subtract" @click="setVolume('sub')" />
      <progress max="100" :value="volume" />
      <Icon icon="mdi:add" @click="setVolume('add')" />
    </div>
    <div class="audio-progress">
      <span class="current">{{ state.current }}</span>
      <input type="range" @click="handleSeekbar" class="audio-time-range" value="0" max="0" ref="seekbar">
      <span class="end">{{ state.end }}</span>
    </div>
    <div :class="['controller', { 'pause-music': pause }]" @click="handlePlay">
      <Icon icon="mdi:play" class="play" />
      <Icon icon="mdi:pause" class="pause" />
    </div>
    <audio class="music-element" :src="state.url" ref="music" @ended="musicEnd" @loadeddata="musicLoaded"
      @timeupdate="timeUpdate" />
  </div>
</template>
<style lang="scss" scoped>
.audio-wrap {
  width: 90%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--audio-bg-color);
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 1px 1px var(--shadow-color);

  .audio-title {
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;

    svg:hover {
      color: var(--hide-btn-color);
    }
  }

  .audio-display {

    .image-wrap {
      padding: 4px;
      overflow: hidden;
      border-radius: 50%;

      img {
        border-radius: 50%;
        border: 1px solid #000a;
        box-shadow:
          1px 1px 1px 1px var(--new-btn-border-color),
          -1px 1px 1px 1px var(--new-btn-border-color),
          1px -1px 1px 1px var(--new-btn-border-color),
          -1px -1px 1px 1px var(--new-btn-border-color);
        animation: ra 10s linear 0s infinite running both;

        @keyframes ra {
          0% {
            transform: rotate(0);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      }

      .audio-image {
        animation-play-state: paused;
      }
    }
  }

  .info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    height: 50px;

    .title {
      width: 100%;
      font-weight: bolder;
      text-align: center;

      .scroll-word {
        /*
        animation-name: scroll;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        
        @keyframes scroll {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }
        */
      }
    }

    .singer {
      font-size: 10px;
      color: var(--primary-color);
    }

  }

  .controller {
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;

    .play {
      opacity: 0;
    }

    .pause {
      opacity: 1;
    }

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .pause-music {
    .play {
      opacity: 1;
    }

    .pause {
      opacity: 0;
    }
  }

  .audio-btns {
    width: 50%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .volume {
      position: relative;
      height: 14px;
      width: 14px;

      svg {
        position: absolute;
      }
    }

    svg,
    span {
      cursor: pointer;
    }

    .circle-active {
      color: var(--hide-btn-color);
    }

    .love-active {
      color: rgb(255, 98, 98)
    }
  }

  .audio-sound {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: large;
    display: none;

    progress {
      height: 3px;
      width: 50%;
    }
  }

  .audio-progress {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    .current {
      margin-right: 10px;
    }

    .end {
      margin-left: 10px;
    }

    input[type="range"] {
      -webkit-appearance: none !important;
      margin: 0;
      padding: 0;
      background: #fffa;
      height: 4px;
      width: 120px;
      outline: none;
      cursor: pointer;
      overflow: hidden;
      border-radius: 5px;

      &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        background-color: rgba(255, 0, 25, 0.96);
        height: 4px;
        width: 4px;
        border-radius: 4px;
        box-shadow: -100vw 0 0 100vw var(--audio-progress-color);
      }

      &::-moz-range-thumb {
        background-color: rgb(255, 0, 25);
        height: 5px;
        width: 5px;
        border-radius: 5px;
      }

      &::-ms-thumb {
        background-color: rgb(255, 0, 25);
        height: 5px;
        width: 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>