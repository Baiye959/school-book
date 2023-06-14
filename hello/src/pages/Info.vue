<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <el-tabs tab-position="top" style="height: 200px">
    <el-tab-pane label="待审核">
      <TabContent state="0" />
    </el-tab-pane>
    <el-tab-pane label="已通过">
      <TabContent state="1" />
    </el-tab-pane>
    <el-tab-pane label="未通过">
      <TabContent state="2" />
    </el-tab-pane>
    <el-tab-pane label="已取消">
      <TabContent state="3" />
    </el-tab-pane>
  </el-tabs>
</template>