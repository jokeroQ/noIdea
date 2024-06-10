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
        <MainLabel :activeTab="activeTab"></MainLabel>
      </el-main>
      <el-footer>
        <p>{{ statement }}</p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import MainLabel from "@/components/label/MainLabel.vue";
import { menuList } from "@views/home/home";
import { Search } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
// const state = reactive({
//   menuList: menuList,
// });
const searchValue = ref<string>("");
const activeTab = ref<string>("2");
const statement = ref<string>("「凡所有相，皆为虚妄。若见诸相非相，即见如来」");
const changeTab = (index: string) => {
  //   console.log(index);
  activeTab.value = index;
};
</script>