<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeTab" class="el-menu-vertical-demo">
        <el-menu-item-group>
          <el-menu-item
            @click="changeTab(i.index)"
            :index="i.index"
            v-for="i in menus"
            :key="i.index"
            >{{ i.title }}
            <div class="edit">
              <i-ep-edit @click.stop="editDetail(i)"></i-ep-edit>
              <i-ep-delete @click.stop="deleteItem(i.index)"></i-ep-delete>
            </div>
          </el-menu-item>
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
      :title="mode == 'add' ? '添加标签' : '修改标签'"
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
          <el-button type="primary" @click="addType"> 确认 </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </el-container>
</template>

<script setup lang="ts">
import MainLabel from "@/components/label/MainLabel.vue";
import { menuList, Menu } from "@views/home/home";
import { Search } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
// const state = reactive({
//   menuList: menuList,
// });
let menus = reactive<Menu[]>(menuList);
const searchValue = ref<string>("");
const activeTab = ref<string>("2");
const dialogVisible = ref(false);
const labelName = ref("");
const statement = ref<string>("「凡所有相，皆为虚妄。若见诸相非相，即见如来」");
const editMode = ref<boolean>(false);
const mode = ref<string>("add");
const index = ref<string>("");
//切换菜单项
const changeTab = (index: string) => {
  //   console.log(index);
  activeTab.value = index;
};
//新增菜单
const createMenu = () => {
  dialogVisible.value = true;
  mode.value = "add";
  labelName.value = "";
  index.value = "";
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
//编辑左侧菜单标签
const editDetail = (i: any) => {
  mode.value = "update";
  dialogVisible.value = true;
  labelName.value = i.title;
  index.value = i.index;
};
//添加标签
const addType = () => {
  if (index.value) {
    menus.forEach((i) => {
      if (i.index == index.value) {
        i.title = labelName.value;
      }
    });
  } else {
    menus.push({
      index: `${menus.length + 1}dd`,
      title: labelName.value,
    });
  }
  dialogVisible.value = false;
};
//删除左侧菜单标签
const deleteItem = (index: string) => {
  ElMessageBox.confirm("是否确认删除", "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    // menus.splice(
    //   0,
    //   menus.length,
    //   ...menus.filter((i: any) => i.index! == index)
    // );
    // console.log(menus);
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
.edit {
  display: none;
}
.el-menu-item {
  justify-content: space-between;
  &:hover .edit {
    display: flex;
    svg {
      margin-right: 12px;
    }
  }
}
</style>