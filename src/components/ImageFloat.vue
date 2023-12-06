<script setup>
import { reactive, ref } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps(['visible', 'url']);
const emit = defineEmits(['closeImage']);

const state = reactive({
  with: 0,
  height: 0,
  scaling: 1,
});

const imageRef = ref(null);

const enlargeHandle = () => {
  if (imageRef.value.height > 1500) return;
  imageRef.value.style.height = Math.floor(imageRef.value.height * 3 / 2) + 'px';
}

const narrowHandle = () => {
  if (imageRef.value.height < 100) return;
  imageRef.value.style.height = Math.floor(imageRef.value.height / 3 * 2) + 'px';
}

</script>
<template>
  <div class="image-wrap" v-show="visible">
    <div class="image-content">
      <div class="content">
        <img :src="url" alt="" ref="imageRef">
        <div class="image-last abs">
          <Icon icon="ep:arrow-left-bold" />
        </div>
        <div class="image-next abs">
          <Icon icon="ep:arrow-right-bold" />
        </div>
      </div>

      <div class="close abs" @click="emit('closeImage')">
        <Icon icon="ep:close" />
      </div>
      <div class="image-radio">
        <Icon class="enlarge" @click="enlargeHandle" icon="ep:circle-plus-filled" />
        <Icon class="narrow" @click="narrowHandle" icon="ep:remove-filled" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.image-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: var(--shadow-mask);
}

.image-content {
  position: absolute;
  width: 1000px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: all 1s ease 0.3s;
  background-color: var(--image-bg-color);
  border-radius: 6px;
  border: 1px solid var(--new-btn-border-color);
  box-shadow: 0.5px 0.5px 1px 1px var(--new-btn-border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  .content {
    position: relative;
    user-select: none;
    margin-top: 28px;
    width: 96%;
    height: 88%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .abs {
    position: absolute;
  }

  .image-last {
    top: 0;
    left: 0;
    height: 100%;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #0003;
    }
  }

  .image-next {
    top: 0;
    right: 0;
    height: 100%;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #0003;
    }
  }

  .close {
    right: 10px;
    top: 5px;
    font-size: large;

    cursor: pointer;
    color: var(--text-color);

    :active {
      color: var(--toggle-color);
    }
  }

  .image-radio {
    width: 10%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: var(--text-color);

    .enlarge {
      font-size: 28px;
      height: 100%;
      cursor: pointer;

      :active {
        color: var(--audio-progress-color);
      }
    }

    .narrow {
      font-size: 28px;
      height: 100%;
      cursor: pointer;

      :active {
        color: var(--audio-progress-color);
      }
    }
  }

}
</style>