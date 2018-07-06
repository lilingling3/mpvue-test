import Card from '@src/components/Card/index.vue';
// import {Card} from '@src/component';
import cf from '@src/base/common-func';
import L2LButton from '@src/views/L2LButton.vue';
import * as wxApi from '@src/base/wx-api';

export default {
  components: {
    Card, L2LButton,
  },
  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
    };
  },
  methods: {
    bindViewTap() {
      cf.gotoPage('logs');
    },
    async getUserInfo() {
      await wxApi.login();
      const { userInfo } = await wxApi.getUserInfo();
      this.userInfo = userInfo;
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
  },
  computed: {

  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
};