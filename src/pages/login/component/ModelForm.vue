<script setup>
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'

const props = defineProps(['form']);
const emit = defineEmits(['closeForm', 'submitForm']);

const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入有效密码', trigger: 'blur' },
  ]
});

</script>
<template>
  <!-- eslint-disable -->  
  <div class="model-wrap">
    <div class="model-login"  >
      <el-space style="font-size: larger;margin-bottom: 10px">
        <div></div>
        <Icon icon="ep:warning-filled" style="color: rgb(255, 153, 0);"/>
        <span>Login</span>
      </el-space>
      <el-form :model="form" label-width="60px" :rules="rules" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <div class="model-form-footer">
            <el-button type="info" @click="emit('closeForm')">NO</el-button>
            <el-button type="primary" @click="emit('submitForm')">YES</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.model-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .model-login {
    width: 300px;
    height: 200px;
    background-color: #FFF;
    border-radius: 6px;
    transform: translateY(-50%);
    padding: 5px;
    padding-top: 20px;
    padding-right: 20px;

    .model-login-title {
      width: 100%;
    }

    .model-form-footer {
      width: 100%;
      display: flex;
      align-items: right;
      justify-content: right;
    }
  }
}
</style>