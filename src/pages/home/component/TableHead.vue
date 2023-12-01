<script setup>
import { Icon } from '@iconify/vue'
import { ref, toRefs } from 'vue'

const type = ref(1);
const checked = ref(false);

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
});
</script>
<template>
  <div class="table-head-content item">
    <input type="checkbox" v-model="checked" class="head-check-input" name="" id="">
    <Icon icon="zondicons:folder" class="item-check-icon" />
    <div class="table-head-name">文件名</div>
    <div class="table-head-time">创建时间</div>
    <div class="table-head-size">大小</div>
  </div>
</template>
<style lang="scss" scoped>
.table-head-content {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 35px !important;
  padding-left: 10px;
  text-align: left;
  color: var(--text-color);

  .hide-btns {
    width: 150px;
    opacity: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--hide-btn-color);
    cursor: pointer;
    font-weight: bold;
  }

  .table-head-name {
    width: 450px;
    text-indent: 2em;
  }

  .table-head-time {
    width: 200px;
    text-indent: 2em;
  }

  .table-head-size {
    width: 100px;
    text-indent: 2em;
  }

  .head-check-input {
    opacity: 1;
    width: 18px;
    height: 18px;
  }

  .item-check-icon {
    opacity: 0;
    width: 28px;
    height: 28px;
    margin-left: 10px;
    color: #fff0;
  }

  
}

</style>