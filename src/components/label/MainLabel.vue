<template>
  <div class="mainLabel">
    <el-card
      v-for="i in labelData"
      :key="i.targetUrl"
      class="box"
      @click="linkTo(i.targetUrl)"
    >
      {{ i.title }}
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { labelData } from "./label";
const props = defineProps<{
  activeTab: string;
}>();
const linkTo = (url: string) => {
  window.open(url, "_blank");
};
watch(
  () => props,
  () => {
    console.log(props.activeTab);
  },
  { immediate: true, deep: true }
);
</script>
<style lang="less" scoped>
.mainLabel {
  display: flex;
  .box {
    padding: 20px;
    margin: 20px;
    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
    }
  }
}
</style>