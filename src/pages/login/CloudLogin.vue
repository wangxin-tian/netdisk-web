<script setup>
import { h, ref, onMounted, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { ElMessageBox, ElSwitch, ElForm, ElFormItem, ElInput } from 'element-plus'
import MyLoading from '@/components/MyLoading.vue';

const form = ref({ username: '', password: '' });


const loading = ref(true);
const setLoading = (value) => (loading.value = value);

const open = () => {
  ElMessageBox({
    title: 'Confirm',
    message: h('div', null, [
      h(ElForm, {
        size: 'middle',
        labelPosition: 'left',
        labelWidth: '80px',
        model: form,
        style: 'max-width: 360px'
      }, [
        h(ElFormItem, { label: '用户名', rules: { required: true } }, h(ElInput, { model: form.value.username })),
        h(ElFormItem, { label: '密码', rules: { required: true }}, h(ElInput, { model: form.value.password })),
      ])
    ]),
  })
}

onMounted(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
});
</script>
<template>
  <div class="login-wrapper">
    <MyLoading :loading="loading" />
    <div class="card">
      <span class="card-title">
        <Icon class="warning" icon="ep:warning"/><span>温馨提示</span>
      </span>
      <div class="card-content">
        <div><span>1.</span><span>登入账号后才可以查看所有内容哦</span></div>
        <div><span>2.</span><span>个人信息页是本人的简历页</span></div>
        <div><span>3.</span><span>增加文件拖拽功能</span></div>
        <div><span>4.</span><span>增加右键扩展功能</span></div>
        <div><span>5.</span><span>未登入状态打开的网盘页是我分享的文件哦！</span></div>
      </div>
    </div>
    <el-button plain @click="open">登入账号</el-button>
  </div>
</template>
<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);

  .card {
    width: 40%;
    height: 40%;
    background-color: var(--shell-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .card-title {
      display: flex;
      align-items: center;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      align-items: left;

      div {
        height: 30px;

        :first-child {
          margin-right: 10px;
        }
      }
    }
    
    .warning {
      font-size: 25px;
      color: rgb(255, 183, 0);
    }
  }
}

</style>