<template>
  <div class="test-container">
    <p>滑块</p>
    <scroll-view
        class="nav"
        scroll-x="true"
        scroll-with-animation="true"
        :scroll-left="navScrollLeft">
        <div v-for="(item,index) in navData"
             :key="item.id"
             class="nav-item"
             :class="{active:index==curNavIndex}"
             @click.stop="switchNav(item.id)">
          {{item.name}}
        </div>
      </scroll-view>
    <p>轮播图</p>
    <swiper circular="true" autoplay="true" class="swiper-container">
      <block v-for="(item,index) in imgUrls" :key="index" class="swiper-item">
        <swiper-item >
          <image mode="aspectFit" :src="item" class="swiper-image"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="box" :hidden="!isShow">原生hidden</div>
    <div class="box" v-show="isShow">v-show</div>
    <div class="box" :class="{'hidden':!isShow}">原生hidden</div>
    <button @click="showUser">点 我</button>
    <LoginComp></LoginComp>
    <p>控制count{{lingCount}}</p>
    <button @click="increment">+</button>
    <button @click="incrementOne">incrementOne+</button>
    <button @click="decrementCommitCount">decrementCommitCount:-</button>
    <button @click="decrementDispatchCount">decrementDispatchCount:-</button>
    <textarea placeholder="这是一个textarea" @input="textareaInput"></textarea>
    <!-- 父组件向子组件传递数据，自定义事件 -->
    <ContactItem v-for="contactInfo in contactList" :contactInfo="contactInfo" :key="contactInfo.id" v-on:childrenClick="childrenClick"></ContactItem>
    <image mode="aspectFit" class="topinfo_gender" :src="$$imagePath + 'female.png'" v-if="$$imagePath && userInfo.sex==1"></image>
    <image mode="aspectFit" class="topinfo_gender" :src="$$imagePath + 'male.png'" v-if="$$imagePath && userInfo.sex==2"></image>
    <p>用户信息</p>
    <CounterComp :userInfo="userInfo"></CounterComp>
    <FunctionItem v-model="modeValue"></FunctionItem>
    <p>手机号码加密</p>
    <div class="phone-wrap">
      <div>{{showPhone}}</div>
      <!-- mode aspectFit 保证图片不变形 -->
      <image mode="aspectFit" class="cellEyeClose" :src="$$imagePath + 'eye_close.png'" v-if="$$imagePath && !isShowPhoneNumber" @tap="setPhoneVisibility(true)"></image>
      <image mode="aspectFit" class="cellEyeOpen" :src="$$imagePath + 'eye_open.png'" v-if="$$imagePath && isShowPhoneNumber" @tap="setPhoneVisibility(false)"></image>
    </div>
    <div>pick下拉框</div>
    <div class="cell pr20">
      <view class="cellLeft">出生日期</view>
      <view class="cellRight">
        <picker mode="date" class="cellRight" :value="userInfo.birthday" @change="birthDateChange">
          <view class="center">
            {{birthdayShow}}
            <image mode="aspectFit" class="cellArrow" :src="$$imagePath + 'rightArrow.png'" v-if="$$imagePath"></image>
          </view>
        </picker>
      </view>
    </div>
    <button @click="showTestToast">测试弹框</button>
    <mptoast></mptoast>
  
  </div>
</template>

<script src="./index.js">
  
</script>

<style src="./index.css">
  
</style>
