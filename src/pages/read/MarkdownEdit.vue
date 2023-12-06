<script setup>
import 'md-editor-v3/lib/style.css'
import { MdEditor } from 'md-editor-v3';
import { reactive, computed, watch, inject } from 'vue';
import { useStore } from 'vuex';
import './read.css'
import { saveFile } from '@/service/api.js'

const store = useStore();
const state = reactive({
  dark: inject('getTheme'),
  params: {},
  value: '',
  name: '',
  suffix: '',
  preview: false,
  toolBars: [
    'save',
    'revoke',
    'next',
    '-',
    'bold',
    'underline',
    'italic',
    '-',
    'title',
    'strikeThrough',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    'task',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    'katex',
    '=',
    'preview',
    'htmlPreview',
    'catalog',
  ]
});

const saveHandle = () => {
  const form = new FormData();
}

const getText = computed(() => store.state.text);
watch(getText, text => {
  const names = text.name.split(".");
  const suffix = names.pop();
  state.value = text.value;
  state.name = names.join(".");
  state.suffix = suffix;
  state.params = text.params;
}, { immediate: true, deep: true });

</script>
<template>
  <div class="text-wrap">
    <div class="title">
      <span>标题：</span>
      <input type="text" v-model="state.name">
      <span>.</span>
      <select name="suffix" v-model="state.suffix">
        <option value="md">md</option>
        <option value="txt">txt</option>
      </select>
    </div>
    <MdEditor v-model="state.value" :theme="state.dark ? 'light' : 'dark'" class="edit" :toolbars="state.toolBars"
      :preview="state.preview" @onSave="saveHandle" />
  </div>
</template>
<style lang="scss" scoped>
.text-wrap {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    width: 100%;
    height: 40px;
    text-align: left;
    text-indent: 2em;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    background-color: var(--shell-color);
    color: var(--text-color);

    span {
      font-size: 14px;
    }

    input {
      border: none;
      outline: none;
      background-color: var(--shell-color);
      color: var(--text-color);
      font-size: 14px;
    }

    select {
      font-size: 14px;
      width: 60px;
      outline: none;
      border: none;
      background-color: var(--shell-color);
      color: var(--text-color);
    }
  }

  .edit {
    flex: 1;
  }
}
</style>