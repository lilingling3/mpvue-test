<template>
<div>
<div class="login-container">
    <input  type="text" v-model="phone" 
            @input="this.changePhoneStyle"
            maxlength="13"
            focus="true"
            placeholder="请输入手机号码"
            placeholder-style="color:#999"
            class="phone-input"/>
    <img v-if="phone.length" 
         :src="$$imagePath+'cancel.png'"
         class="cancle-img"
         @click='cancleInput'
    />
  </div>
    <button :disabled='nextBtnDisabled'
            :style="{backgroundColor:btnBackgroundColor}"
            class="btn-login"
    >登陆 </button>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      nextBtnDisabled: true,
      btnBackgroundColor: '#bcbcbc'
    }
  },
  methods: {
    // 手机号码输入控制
    changePhoneStyle(e) {
      // 获取input 输入值
      let phoneNum = e.mp.detail.value;
      phoneNum = phoneNum.replace(/\s+|[^\d]+/g, '')
      let result = [];
      for (let i = 0; i < phoneNum.length; i++) {
        // charAt返回指定位置的字符
        result.push(phoneNum.charAt(i))
        if (i == 3 || i == 7) {
          result.push(' ')
        }
      }
      this.phone = result.join('')
    },
    cancleInput() {
      console.log('iiii')
      this.phone = ''
    },
    checkPhone(str) {
      var reg = /^(0|86|17951)?(13[0-9]|15[0-9]|16[6]|17[0-9]|18[0-9]|14[56789]|19[89])[0-9]{8}$/;
      if (reg.test(str)) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    $$imagePath() {
      return this.$imagePath
    }
  },
  watch:{
    phone(newValue){
      this.nextBtnDisabled = newValue.length !=13;
    },
    nextBtnDisabled(newValue){
      if(!newValue){
        this.btnBackgroundColor = '#4a4c5b'
      }
    }
  }
}
</script>

<style>
.login-container {
  padding: 0 32rpx;
  height: 100rpx;
  position: relative;
}
.phone-input {
  border: 3rpx solid #eeeff0;
  box-shadow: 0 0 2rpx #e5e6e7;
  width: 100%;
  height: 100%;
}
.cancle-img {
  position: absolute;
  top: 50%;
  right: 32rpx;
  width: 36rpx;
  height: 36rpx;
  transform: translateY(-50%);
  z-index: 3;
  /* 扩大点击范围 */
  border: 10px solid transparent;
}
.btn-login{
  color: white
}
</style>


