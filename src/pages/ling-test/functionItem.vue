<template>
  <div>
 <view class="functionList_funcWrap">

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-soldDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出售设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-buyDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求购设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-rentOutDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出租设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-rentInDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求租设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-transportDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">运输设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-buyDinas.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求购砂石</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-soldDinas.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出售砂石</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-recruitCasual.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求职</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-findWork.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">招聘</text>
      </view>

      <view class="functionList_funcItem" @click="changValue">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-projectInfo.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">工程信息{{funtionItem}}</text>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data(){
    return {
      funtionItem:this.value
    }
  },
  computed: {
    $$imagePath() { return this.$imagePath }
  },
  watch: {
    value(newValue, oldValue) {
     this.funtionItem = newValue
    }
  },
  methods:{
    changValue(){
      // this.funtionItem = 'dddddd'
      console.log(this.value)
      console.log(this.funtionItem);
      // 通过v-model 组件双向数据绑定
       setTimeout(()=> {this.$emit('input','更改了')},100)
    }
  }
}
</script>
<style>
.functionList_funcWrap {
  display: flex;
  padding: 10rpx 0;
  justify-content: flex-start;
  /* 换行 */
  flex-wrap: wrap;
}
.functionList_funcItem {
  margin: 25rpx 0;
  width: 142rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.functionList_funcImage {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
}
.functionList_funcText {
  font-size: 24rpx;
  margin-top: 20rpx;
  color: #333;
}
</style>

