import {stringUtil } from "@src/base/utils";
  
export default {
  props: ["text"],
  data() {
    return {
      str: stringUtil.attachA()
    };
  }
};