<script setup>
import { ref } from "vue";
import Info from "./pages/Info.vue";
import Settings from "./pages/Settings.vue";

const currentView = ref(1);
const hasUser = ref(false);

const route = ref([Info, Settings]);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
  currentView.value = key;
};
function login(event) {
  console.log(event);
  hasUser.value = true;
}
function logout(event) {
  console.log(event);
  hasUser.value = false;
}
</script>

<template>
  <el-container>
    <!-- header -->
    <el-header>
      <el-button link>
        <el-row :gutter="20" justify="space-between" align="middle">
          <el-col :span="40">
            <el-icon size="25"><MoonNight /></el-icon>
          </el-col>
          <el-col :span="100">
            <el-text size="large">预约管理系统</el-text>
          </el-col>
        </el-row>
      </el-button>
      <!-- ! -->

      <RouterLink :to="{name: 'book'}">to book</RouterLink>

      <el-row v-if="hasUser" :gutter="30" justify="space-around">
        <el-col :span="100"> <el-button link>个人中心</el-button> </el-col>
        <el-col :span="100">
          <el-button @click="logout">登出</el-button>
        </el-col>
      </el-row>
      <el-row v-else :gutter="30" justify="space-around">
        <el-col :span="100">
          <el-button type="primary" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- aside  -->
      <el-aside width="20%">
        <el-scrollbar>
          <el-menu
            :default-openeds="['1']"
            default-active="1"
            @select="handleOpen"
          >
            <!-- 第一个选项 -->
            <el-menu-item index="1">
              <template #title>
                <el-icon> <message /> </el-icon>预约信息
              </template>
            </el-menu-item>

            <el-menu-item index="2">
              <template #title>
                <el-icon> <Setting /> </el-icon>系统设置
              </template>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- main  -->
        <el-main>
          <div v-for="(page, index) in route">
            <component v-show="index == currentView - 1" :is="page" />
            <!-- <page /> -->
          </div>
        </el-main>
        <el-footer>
          <el-row justify="center">
            <el-col>
              <el-text type="info" size="small"
                >Copyright © 2023 学校名称</el-text>
            </el-col>
            <el-col>
              <el-text type="info" size="small">Made by ZLX @abcdefg</el-text>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: var(--el-box-shadow-light);
  padding: 0px 30px;
}
.el-main {
  height: calc(100vh - 120px);
}

.el-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  text-align: center;
}
</style>


<!-- <script lang="ts" setup>
// import TabContent from './components/TabContent.vue'
// import { ref } from 'vue'
import Info from './Info.vue'
import Two from './Two.vue'

const pages = [Info, Two]
let route = Info
let routekey = 0
// let route
// let routekey
function changepage (index)  {
  route = pages[index];
  routekey = index;
}
</script>

<template>
  <div class="common-layout" id = "app">
    <el-container>
      <el-header>
        <el-text class="mx-1" size="large">预约</el-text>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu router="true" @select="changepage">
              <el-menu-item :index="0" ><router-link to="/info">预约信息</router-link></el-menu-item>
              <el-menu-item :index="1" ><router-link to="/info">2</router-link></el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main> <el-scrollbar>
                <el-tab-pane label="待审核">待审核
                </el-tab-pane>
                <el-tab-pane label="已通过">已通过
                  <TabContent state="已通过"/>
                </el-tab-pane>
                <el-tab-pane label="未通过">未通过
                  <TabContent state="未通过"/>
                </el-tab-pane>
                <el-tab-pane label="已取消">已取消
                  <TabContent state="已取消"/>
                </el-tab-pane>
              </el-tabs>
              <view v-for="(page,index) in pages" >
                <view v-show="routekey == index">
                  <component :is="page"></component>
                </view>
              </view>
            </el-scrollbar></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.el-header {
  /* border: 1px solid black; */
  text-align: center;
  height: 60px;
}

.el-main {
  height: calc(100vh - 120px);
}

.el-footer {
  height: 60px;
}

</style> -->
