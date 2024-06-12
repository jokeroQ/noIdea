<template>
  <div class="mainLabel">
    <el-card
      v-for="(i, index) in initData"
      :key="i.targetUrl"
      class="box draggable-item"
      @click="linkTo(i.targetUrl)"
      :draggable="editMode"
      @dragstart="onDragStart($event, index)"
      @dragover.prevent="onDragOver(index)"
      @drop="onDrop($event, index)"
      :class="{ hoverStyle: hoverIndex == index }"
    >
      {{ i.title }}
    </el-card>
    <el-card v-if="editMode" class="box" @click="showAdd">
      <i-ep-plus></i-ep-plus>
    </el-card>
    <el-dialog v-model="dialogVisible" title="添加标签" width="500">
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入目标网址" v-model="formData.url" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入书签名称" v-model="formData.title" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入图标地址" v-model="formData.icon" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入网址简介" v-model="formData.desc" />
        </el-form-item>
        <div class="autoBtn">
          <el-button>自动获取网站名称</el-button>
          <el-button>自动获取图标地址</el-button>
          <el-card>图标</el-card>
        </div>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, watch } from "vue";
import { labelData } from "./label";
const props = defineProps<{
  activeTab: string;
  editMode: boolean;
}>();
const draggedItemIndex = ref<number | null>(null);
const linkTo = (url: string) => {
  window.open(url, "_blank");
};
const dialogVisible = ref<boolean>(false);

const initData = ref(labelData.filter((i) => i.type == props.activeTab));

const hoverIndex = ref<number | null>(null);

const formData = reactive({
  url: "",
  title: "",
  icon: "",
  desc: "",
});
//拖拽事件
const onDragStart = (event: DragEvent, index: number) => {
  draggedItemIndex.value = index;
  (event.dataTransfer as DataTransfer).effectAllowed = "move";
};

//拖拽改动
const onDrop = (event: DragEvent, index: number) => {
  if (draggedItemIndex.value !== null) {
    const draggedItem = initData.value[draggedItemIndex.value];
    initData.value.splice(draggedItemIndex.value, 1);
    initData.value.splice(index, 0, draggedItem);
    draggedItemIndex.value = null;
    hoverIndex.value = null;
  }
};

const onDragOver = (index: number) => {
  hoverIndex.value = index;
};

const showAdd = () => {
  dialogVisible.value = true;
};

watch(
  () => props.activeTab,
  (newVal) => {
    // console.log(props.activeTab);
    initData.value = labelData.filter((i) => i.type == newVal);
  }
  // { immediate: true, deep: true }
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
    &.hoverStyle {
      // background-color: lightblue; // 悬停时的背景色
      border-top: 2px dashed blue;
    }
  }
  .autoBtn {
    display: flex;
    justify-content: space-between;
  }
}
</style>