<script setup>
import { ref, reactive, onMounted, provide } from 'vue'
import message from '@/utils/message.js'
import { userLogin } from '@/service/api.js'
import { Icon } from '@iconify/vue'
import MyLoading from '@/components/MyLoading.vue'
import ModelForm from './component/ModelForm.vue'
import { useStore } from 'vuex'

const store = useStore();
const loadingRef = ref(null);
const open = ref(false);
const form = ref({ username: '', password: '' });


const setOpen = () => {
  open.value = true;
}

const closeForm = () => {
  open.value = false;
}

const jumpBlog = () => {
  window.open("http://118.195.140.233:3000/home", "_blank");
}

const submitForm = async () => {
  console.log(form);
  const res = await userLogin(form.value);
  console.log(res)
  res.code === 400 && message('warning', res.msg);

  if (res.code === 200) {
    await store.dispatch('login', res.data);
    message('success', res.msg);
    console.log(await store.state.user)
  }
  closeForm();
}

onMounted(() => {
  setTimeout(() => {
    loadingRef.value.closeLoading();
  }, 1000);
});
</script>
<template>
  <div class="login-wrapper">
    <ModelForm v-if="open" :form="form" @closeForm="closeForm" @submitForm="submitForm"/>
    <MyLoading ref="loadingRef" />
    <div class="card">
      <span class="card-title">
        <Icon class="warning" icon="ep:warning" /><span>温馨提示</span>
      </span>
      <div class="card-content">
        <div><span>1.</span><span>登入账号后才可以查看所有内容哦</span></div>
        <div><span>2.</span><span>个人信息页是本人的简历页</span></div>
        <div><span>3.</span><span>增加文件拖拽功能</span></div>
        <div><span>4.</span><span>增加右键扩展功能</span></div>
        <div><span>5.</span><span>未登入状态打开的网盘页是我分享的文件哦！</span></div>
      </div>
    </div>
    <span v-if="store.getters.isLogin">
      <el-space>
        <el-button plain >退出登入</el-button>
        <el-button plain @click="jumpBlog" >访问博客</el-button>
        <el-button plain >网盘状态</el-button>
      </el-space>
    </span>
    <span v-else>
      <el-button plain @click="setOpen">登入账号</el-button>
      <el-button plain @click="jumpBlog" >访问博客</el-button>
    </span>
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
    background-color: var(--shell-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .card-title {
      display: flex;
      align-items: center;

      &>span {
        font-weight: bold;
      }
    }

    .card-content {
      margin-top: 10px;
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