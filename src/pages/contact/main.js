import Vue from 'vue';
import contact from './index.vue';

const contactInstance = new Vue(contact);
contactInstance.$mount();

export default {
  config: {
    navigationBarTitleText: '联系人',
  },
};
