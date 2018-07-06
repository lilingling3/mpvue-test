<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <L2LButton ></L2LButton>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <Card :text="userInfo.nickName"></Card>
      </div>
    </div>
  
    <div class="usermotto">
      <div class="user-motto">
        <Card :text="motto"></Card>
      </div>
    </div>
  
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="nav-btn">1去往Vuex示例页面</a>
    <a href="/pages/contact/main" class="nav-btn">2去往联系人页面</a>
    <a href="/pages/today-task/main" class="nav-btn">3去往今日任务页面</a>
    <a href="/pages/ling-test/main" class="nav-btn">4去往ling页面</a>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./index.css"></style>
