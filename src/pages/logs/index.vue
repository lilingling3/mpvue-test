<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <Card :text="'index:' + (index + 1) + ' . ' + log" />
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    formatTime
  } from '@src/base/utils/date';
  import Card from '@src/components/Card/index.vue';
  
  export default {
    components: { Card,},
  
    data() {
      return {
        logs: [],
      };
    },
  
    created() {
      const logs = (wx.getStorageSync('logs') || []);
      this.logs = logs.map(log => formatTime(new Date(log)));
    },
  };
</script>

<style>
  .log-list {
    display: flex;
    flex-direction: column;
    padding: 40rpx;
  }
  
  .log-item {
    margin: 10rpx;
  }
</style>
