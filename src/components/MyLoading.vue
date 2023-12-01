<script setup>
  import { ref, inject } from 'vue'

  const loading = ref(true);
  const closeLoading = () => {
    loading.value = false;
  };

  defineExpose({
    closeLoading
  })
</script>

<template>
  <div :class="['loading-wrapper', { 'close-loading': !loading}]">
    <img src="@/assets/default.png" alt="waiting">
    <div class="loading-text">
      <span>loading</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--body-color);
  color: var(--text-color);
  z-index: 999;
  img {
    height: 60%;
  }

  .loading-text {
    font-size: 30px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: loading 3s both;

    :nth-child(2) {
      animation: loading 1.5s linear 0s infinite alternate;

      @keyframes loading {
        0% {
          transform: translateY(-40%);
        }

        100% {
          transform: translateY(0%);
        }
      }
    }

    :nth-child(3) {
      animation: loading 1.5s linear 0.5s infinite alternate;

      @keyframes loading {
        0% {
          transform: translateY(-40%);
        }

        100% {
          transform: translateY(0%);
        }
        
      }
    }
    :nth-child(4) {
      animation: loading 1.5s linear 1s infinite alternate;

      @keyframes loading {
        0% {
          transform: translateY(-40%);
        }

        100% {
          transform: translateY(0%);
        }
      }
    }

  }
}

.close-loading {
  display: none;
}
</style>