<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeTab" class="el-menu-vertical-demo">
        <el-menu-item-group>
          <el-menu-item
            @click="changeTab(i.index)"
            :index="i.index"
            v-for="i in menuList"
            :key="i.index"
            >{{ i.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-menu>
      <div class="btnGroup">
        <i-ep-folderAdd @click="createMenu" />
        <i-ep-setting @click="goEdit" />
        <i-ep-download />
        <i-ep-upload />
        <i-ep-questionFilled />
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <el-input
          v-model="searchValue"
          placeholder="请输入搜索内容"
          :suffix-icon="Search"
        />
      </el-header>
      <el-main>
        <MainLabel :activeTab="activeTab" :editMode="editMode"></MainLabel>
      </el-main>
      <el-footer>
        <div class="bottom">
          <p>{{ statement }}</p>
          <el-link @click="exitMode" :underline="false" v-if="editMode"
            >退出编辑模式</el-link
          >
        </div>
      </el-footer>
    </el-container>
    <el-dialog
      v-model="dialogVisible"
      title="添加标签"
      width="500"
      :before-close="handleClose"
    >
      <el-input
        v-model="labelName"
        style="width: 240px"
        placeholder="请输入标签名称"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </el-container>
</template>

<script setup lang="ts">
import MainLabel from "@/components/label/MainLabel.vue";
import { menuList } from "@views/home/home";
import { Search } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { ElMessageBox } from "element-plus";
// const state = reactive({
//   menuList: menuList,
// });
const searchValue = ref<string>("");
const activeTab = ref<string>("2");
const dialogVisible = ref(false);
const labelName = ref("");
const statement = ref<string>("「凡所有相，皆为虚妄。若见诸相非相，即见如来」");
const editMode = ref<boolean>(false);
//切换菜单项
const changeTab = (index: string) => {
  //   console.log(index);
  activeTab.value = index;
};
//新增菜单
const createMenu = () => {
  dialogVisible.value = true;
  labelName.value = "";
};
const handleClose = (done: () => void) => {
  dialogVisible.value = false;
};

//开启编辑功能
const goEdit = () => {
  editMode.value = true;
  ElMessage({
    message: "已经开启编辑功能，点击右下角可退出",
  });
};
//关闭编辑模式
const exitMode = () => {
  editMode.value = false;
  ElMessage({
    message: "已退出编辑模式",
  });
};
</script>
<style lang="less" scoped>
.btnGroup {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  svg {
    cursor: pointer;
  }
}
.bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>