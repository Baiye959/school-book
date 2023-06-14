<script lang="ts" setup>
import { reactive } from 'vue';
import { getBooksByState, updateBookState } from "../api";

let props = defineProps({
  state: {
    type: String,
    required: true,
  },
});

interface Book {
  id: string
  name: string
  sex: string
  work: string
  tel: string
  id_type: string
  id_num: string
  inviter: string
  booktime: Number
  reason: string
  photo: string
  state: Number
}

const data = reactive({
  books: [],
});

async function mounted(state) {
  data.books = await getBooksByState(state); // 获取图书列表
}

async function changeBookState(id: string, state: number) {
  await updateBookState(id, state); // 更新图书状态
  data.books = await getBooksByState(props.state); // 刷新图书列表
}

mounted(props.state);


async function accept (index: number, row: Book) {
  console.log(index, row)
  changeBookState(row.id, 1)
}

async function unaccept (index: number, row: Book) {
  console.log(index, row)
  changeBookState(row.id, 2)
}

</script>

<template>
  <el-table :data="data.books" style="width: 100%">
    <el-table-column label="Booktime" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.booktime }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>sex: {{ scope.row.sex }}</div>
            <div>work: {{ scope.row.work }}</div>
            <div>tel: {{ scope.row.tel }}</div>
            <div>id_type: {{ scope.row.id_type }}</div>
            <div>id_num: {{ scope.row.id_num }}</div>
            <div>inviter: {{ scope.row.inviter }}</div>
            <div>booktime: {{ scope.row.booktime }}</div>
            <div>reason: {{ scope.row.reason }}</div>
            <div>photo: {{ scope.row.photo }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="accept(scope.$index, scope.row)"
          >通过</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="unaccept(scope.$index, scope.row)"
          >不通过</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  
</template>