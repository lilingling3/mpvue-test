import { stringUtil } from '@src/base/utils';
import cf from '@src/base/common-func';

export default {
  props: ['contactInfo'],
  data() {
    return {
      str: stringUtil.attachA(this.$props.text),
    }
  },
  methods:{
    gotoLogs(e,id){
      // cf.gotoPage('logs');
      console.log(`点击的id ${id}`)
      //子组件向父组件传递数据
      this.$emit('childrenClick',id);
      console.log('自定义属性', e.currentTarget.dataset.id)
    }
  }
};