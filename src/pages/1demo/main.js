import Vue from 'vue';
import demo from './demo';

const demoInstance = new Vue(demo);
demoInstance.$mount();

export default {
  config: {
    navigationBarTitleText: 'demo',
  },
};
