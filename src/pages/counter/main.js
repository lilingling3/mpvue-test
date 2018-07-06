import Vue from 'vue';
import counter from './index.vue';

const counterInstance = new Vue(counter);
counterInstance.$mount();

export default {
  config: {
    navigationBarTitleText: 'counter页面',
    // navigationBarBackgroundColor: '#f00'
  }
}