import Vue from 'vue';
import App from './App.vue';
import './App.css';
import store from './store/index';
import mptoastRegistry from 'mptoast/registry'
mptoastRegistry(Vue)

if(true){
  require('./customize.css');
}
Vue.prototype.$store = store;//确保所有子组件实例都能够访问this.$store
// 挂载一个全局的图片路径,方便后期修改图片地址的时候,做统一修改
// 这个地址是编译后的地址
Vue.prototype.$imagePath = '/static/images/' 
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，构建工具会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/ling-test/main',
      'pages/counter/main',
      'pages/logs/main', 
      'pages/contact/main',
      'pages/today-task/main',
    ],
    window: {
      backgroundTextStyle: 'dark',              // 下拉时的背景颜色(只能选dark跟light其中一个)
      navigationBarTitleText: 'L2L-weapp',      // 顶部栏中间标题
      navigationBarBackgroundColor: '#0779fc',  // 顶部栏背景色
      navigationBarTextStyle: 'black'           // 顶部栏前景色(只能选black跟light其中一个)
    },
  },
};
