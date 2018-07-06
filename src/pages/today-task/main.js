import Vue from 'vue';
import todayTask from './index.vue';

const todayTaskInstance = new Vue(todayTask);
todayTaskInstance.$mount();

export default {
  config: {
    navigationBarTitleText: 'todayTask',
  },
};
