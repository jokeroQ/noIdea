//登录页面
<template>
  <GradientBackground v-loading="isLoading">
    <h1>欢迎来到我的世界</h1>
    <div class="block">
      <el-form
        :label-position="labelPosition"
        label-width="auto"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名:">
          <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="密码:">
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            show-password
            class="input-fixed-width"
          />
        </el-form-item>
        <el-button type="primary" @click="loginIn">登录</el-button>
      </el-form>
    </div>
  </GradientBackground>
</template>

<script lang="ts" setup>
import GradientBackground from "../../components/background/GradientBackground.vue";
import { reactive, ref } from "vue";
import type { FormProps } from "element-plus";
import { delay } from "@/utils/delay";
const labelPosition = ref<FormProps["labelPosition"]>("right");
const formLabelAlign = reactive({
  username: "admin",
  password: "",
});
const isLoading = ref(false);

async function loginIn() {
  let flag =
    formLabelAlign.username == "admin" && formLabelAlign.password == "777";
  if (flag) {
    isLoading.value = true;
    await delay(2000);
    isLoading.value = false;
  }
  ElMessage({
    message: flag ? "登录成功" : "用户名密码错误，请重新输入",
    type: flag ? "success" : "error",
  });
}
</script>

<style scoped lang="less">
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;
  padding: 40px 0;
  border-radius: 20px;
}
.input-fixed-width {
  width: 300px; /* 设置固定宽度 */
}
</style>