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
  <div class="item-wrap-body">
    <div class="item-content item">
      <input type="checkbox" v-model="checked" :class="['item-check-input', { 'checked': checked }]" name="" id="">
      <Icon v-if="type === 0" icon="zondicons:folder" class="item-check-icon folder" />
      <Icon v-else-if="type === 1" icon="ep:picture-filled" class="item-check-icon file" />
      <Icon v-else-if="type === 2" icon="zondicons:playlist" class="item-check-icon file" />
      <Icon v-else-if="type === 3" icon="material-symbols-light:smart-display-rounded" class="item-check-icon file" />
      <Icon v-else-if="type === 4" icon="zondicons:document" class="item-check-icon file" />
      <div class="item-name">{{ element ? element["filename"] : '' }}</div>
      <div class="hide-btns">
        <Icon icon="ep:share" />
        <Icon icon="ep:download" />
        <Icon icon="ep:delete" />
        <Icon icon="fluent:rename-24-regular" />
        <Icon icon="ph:copy" />
        <Icon icon="mynaui:move" />
      </div>
      <div class="item-time">{{ element ? (new Date(element["createTime"])).toLocaleString() : '' }}</div>
      <div class="item-size">{{ element["filesize"] ?? '-' }}</div>
    </div>
    <div style="height: 5px;" ></div>
  </div>
</template>
<style lang="scss" scoped>
.item-wrap-body {
  &:hover {
    background-color: var(--item-primary-color);
  }
}
.item-content {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 14px;

  .hide-btns {
    width: 150px;
    opacity: 0;
    display: flex;
    font-size: 18px;
    justify-content: space-around;
    align-items: center;
    color: var(--hide-btn-color);
    cursor: pointer;
  }

  &:hover {

    .item-check-input,
    .hide-btns {
      opacity: 1;
    }
  }

  .item-check-input {
    opacity: 0;
    width: 18px;
    height: 18px;
  }

  .checked {
    opacity: 1;
  }

  .item-check-icon {
    width: 28px;
    height: 28px;
    margin-left: 10px;
  }

  .item-name {
    min-width: 200px;
    width: 300px;
    height: 35px;
    text-align: left;
    display: flex;
    align-items: center;
    text-indent: 1em;
    text-overflow: ellipsis;

    &:hover {
      color: var(--hide-btn-color);
      cursor: pointer;
    }
  }

  .item-time {
    width: 200px;
    text-align: center;
    font-size: 14px;
  }

  .item-size {
    width: 100px;
    text-align: center;
    font-size: 14px;
  }

  .folder {
    color: rgb(255, 193, 22);
  }

  .file {
    color: #DDD;
  }
}


.item {
  width: 100%;
  height: 35px !important;
  border-top: solid 1px var(--item-border-color);
  padding-left: 10px;
  text-align: left;
  &+.item {
    margin-top: 0px;
  }
}

.item:hover {
  cursor: move;
}

.chosenClass {
  background-color: #f1f1f1;
}</style>