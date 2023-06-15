<script lang="ts" setup>
import { ref } from "vue";
import { reactive } from 'vue';
import { createBook } from '../api';


const hasUser = ref(false);
function login(event) {
  console.log(event);
  hasUser.value = true;
}
function logout(event) {
  console.log(event);
  hasUser.value = false;
}


const form = reactive({
  name: '',
  sex: '',
  work: '',
  tel: '',
  id_type: '',
  id_num: '',
  inviter: '',
  booktime: 0,
  reason: '',
  photo: '',
  state: 0, 
  ////
  date1: '',
  date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: '',
})

async function onSubmit() {
  console.log('submit!')

  const month = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
  }
  let time = String(form.date1+form.date2)
  let timelist = time.split(' ')
  let hms = timelist[10].slice(0, 2) + timelist[10].slice(3, 5) + timelist[10].slice(6, 8)
  let booktime = Number(timelist[3]+month[timelist[1]]+timelist[2]+hms)
  let book = {
    name: form.name,
    sex: form.sex,
    work: form.work,
    tel: form.tel,
    id_type: form.id_type,
    id_num: form.id_num,
    inviter: form.inviter,
    booktime: booktime,
    reason: form.reason,
    photo: '',
    state: 0,
  }

  await createBook(book);

  form.name = '';
  form.sex = '';
  form.work = '';
  form.tel = '';
  form.id_type = '';
  form.id_num = '';
  form.inviter = '';
  form.booktime = 0;
  form.reason = '';
  form.photo = '';
  form.state = 0;
  ////
  form.date1 = '';
  form.date2 = '';
}


// export default{

// }
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
            <el-text size="large">预约系统</el-text>
          </el-col>
        </el-row>
      </el-button>

      <RouterLink :to="{name: 'home'}">to home</RouterLink>

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
    <!-- main  -->
    <el-main>
        <!-- <el-text>预约界面</el-text> -->
        <el-form :model="form" label-width="120px">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入您的姓名"/>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.sex" placeholder="请选择您的性别">
                  <el-option label="男" value="男" />
                  <el-option label="女" value="女" />
              </el-select>
            </el-form-item>
            <el-form-item label="职业">
              <el-input v-model="form.work" placeholder="请输入您的职业"/>
            </el-form-item>
            <el-form-item label="电话号码">
              <el-input v-model="form.tel" placeholder="请输入您的电话号码"/>
            </el-form-item>
            <el-form-item label="证件类型">
              <el-select v-model="form.id_type" placeholder="请选择您的证件类型">
                  <el-option label="中国大陆居民身份证" value="中国大陆居民身份证" />
                  <el-option label="港澳居民居住证" value="港澳居民居住证" />
                  <el-option label="台湾居住证" value="台湾居住证" />
                  <el-option label="外国人永久居留身份证" value="外国人永久居留身份证" />
              </el-select>
            </el-form-item>
            <el-form-item label="证件号码">
              <el-input v-model="form.id_num" placeholder="请输入您的证件号码"/>
            </el-form-item>
            <el-form-item label="邀请人">
              <el-input v-model="form.inviter" placeholder="请输入您的邀请人"/>
            </el-form-item>
      <!-- class Book(BaseModel):
            booktime: int
            photo: str
            state: int -->
            <el-form-item label="预约时间">
            <el-col :span="11">
                <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
                />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                style="width: 100%"
                />
            </el-col>
            </el-form-item>
            <el-form-item label="预约事由">
              <el-input v-model="form.reason" placeholder="请输入您的预约事由" type="textarea"/>
            </el-form-item>
            <!-- <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
            </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
            </el-form-item> -->
            <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
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