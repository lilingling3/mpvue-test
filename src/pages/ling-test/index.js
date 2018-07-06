import constant from './constant.js'
import { constant1 } from './constant1.js'
import * as wxApi from '@src/base/wx-api'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import ContactItem from '@src/components/ContactItem/index.vue'
import CounterComp from '@src/components/counter/index.vue'
import FunctionItem from './functionItem.vue'
import LoginComp from './login.vue'
import * as userInfoConstant from '../../base/constants/userinfo'
import mptoast from 'mptoast'
//微信小程序无法进行Dom操作 所以无法动态拿到元素宽度
//这里进行模拟宽度 两个字宽度+2*margin 也就是 32+10*2 = 52
const NAV_SMALL_WIDTH = 52
//这里模拟宽度 三个字宽度+2*margin 也就是 48+10*2 = 68
const NAV_BIG_WIDTH = 68
export default {
  data: {
    isShow: false,
    contactList: [
      {
        id: 1,
        name: 'lilingling',
        age: 8888
      },
      {
        id: 2,
        name: 'jzteam',
        age: 9999
      }
    ],
    isShowPhoneNumber: true,
    birthdayShow: '请选择',
    modeValue: '2',
    imgUrls: [
      '/static/images/swiper/swiper-1.png',
      '/static/images/swiper/swiper-2.png',
      '/static/images/swiper/swiper-3.png'
    ],
    navData: [
      {
        id: '0',
        name: '快车',
        url: '/static/images/car/cart1.png'
      },
      {
        id: '1',
        name: '专车',
        url: '/static/images/car/cart2.png'
      },
      {
        id: '2',
        name: '出租车',
        url: '/static/images/car/cart3.png'
      },
      {
        id: '3',
        name: '顺风车',
        url: '/static/images/car/cart4.png'
      },
      {
        id: '4',
        name: '公交',
        url: '/static/images/car/cart5.png'
      },
      {
        id: '5',
        name: '代驾',
        url: '/static/images/car/cart6.png'
      },
      {
        id: '6',
        name: '自驾租车',
        url: '/static/images/car/cart7.png'
      },
      {
        id: '7',
        name: '二手车',
        url: '/static/images/car/cart8.png'
      }
    ],
    car: '快车',
    navScrollLeft: 0,
    curNavIndex: 0,
    navOffsetArr : [
      0,
      0,
      NAV_SMALL_WIDTH,
      NAV_SMALL_WIDTH * 2,
      NAV_SMALL_WIDTH * 2 + NAV_BIG_WIDTH,
      NAV_SMALL_WIDTH * 2 + NAV_BIG_WIDTH * 2,
      NAV_SMALL_WIDTH * 3 + NAV_BIG_WIDTH * 2,
      NAV_SMALL_WIDTH * 4 + NAV_BIG_WIDTH * 2
    ]
  },
  components: {
    ContactItem,
    CounterComp,
    FunctionItem,
    mptoast,
    LoginComp
  },
  mounted() {
    console.log('====>>', constant.counter)
    constant.counter++
    console.log('====>>', constant.counter)
    constant1.count++
    console.log('====>>', constant1.count)
    // 只读 constant1 = {}
  },
  computed: {
    ...mapState({ lingCount: 'count' }),
    userInfo() {
      // console.log(this.$store.state.userInfo.userInfo)
      // 通过this.$store.state.userInfo.userInfo 获取数据
      return this.$store.state.userInfo.userInfo
    },
    // 或者
    // ...mapGetters({ userInfo: userInfoConstant.GET_USERINFO }),
    $$imagePath() {
      return this.$imagePath
    },
    // identityInChinese () {
    //   return this.store.userInfo.getters[userInfoConstant.GET_IDENTITY_IN_CHINESE]
    // },
    showPhone() {
      if (this.isShowPhoneNumber) {
        return this.$store.state.userInfo.userInfo.mobile
      } else {
        return this.encryptPhone(this.$store.state.userInfo.userInfo.mobile)
      }
    }
  },
  methods: {
    switchNav(id) {
      this.curNavIndex = id
    },
    // watch 模拟navScrollLeft
    curNavIndex(newIndex) {
      this.navScrollLeft = this.navOffsetArr[newIndex]
      this.car = this.navData[newIndex].name
    },
    async showUser() {
      this.isShow = !this.isShow
      // 获取openid
      //     wxApi.login().then((res) => {
      //       wx.request({
      //         url: 'https://api.weixin.qq.com/sns/jscode2session',
      //         data: {
      // 　　　　　　//小程序唯一标识
      //           appid: 'wx66e41a8e26894b52',
      //           //小程序的 app secret
      //           secret: '5611e659e0dfbf5e55cd4674b1eb3906',
      //           grant_type: 'authorization_code',
      //           js_code: res.code
      //         },
      //         method: 'GET',
      //         header: { 'content-type': 'application/json' },
      //         success: function (openIdRes) {
      //           console.info("登录成功返回的openId：" + openIdRes.data.openid);
      //           // 判断openId是否获取成功
      //           if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
      //             　　　　　　　　// 一点需要注意 询问用户 是否授权 那提示 是这API发出的

      //           } else {
      //             console.info("获取用户openId失败");
      //           }
      //         },
      //         fail: function (error) {
      //           console.info("获取用户openId失败");
      //           console.info(error);
      //         }
      //       })
      //     })

      var s = await wxApi.login()
      console.log(s)
    },
    textareaInput() {
      console.log('textareaInput===>>')
    },
    ...mapMutations(['increment']),
    ...mapActions(['incrementOne']),
    // commit mutations
    decrementCommitCount: function() {
      this.$store.commit('decrement', 2)
    },
    //dispatch actions
    decrementDispatchCount: function() {
      this.$store.dispatch('decrementTwo')
    },
    childrenClick: function(id) {
      console.log('点击了childrend的id==>>>' + id)
    },
    // 设置电话号码可见性
    setPhoneVisibility(bool) {
      this.isShowPhoneNumber = bool
    },
    // 加密显示电话号码
    encryptPhone(phone) {
      let arr = phone.toString().split('')
      // 从数组三的位置 删除4个 替换 **** 第二如果是0 就是添加
      arr.splice(3, 4, '****')
      return arr.join('')
    },
    birthDateChange(e) {
      this.birthdayShow = e.mp.detail.value
      // 更改状态
      this.$store.commit(userInfoConstant.SET_BIRTHDAY, this.birthdayShow)
    },
    showTestToast() {
      // this.$mptoast(`请输入正确网址`, 'info',1500)
      wx.showToast({
        title: '测试弹框',
        icon: 'success',
        success: function() {
          wx.showLoading({ title: '玩命加载中...' })
          setTimeout(() => wx.hideLoading(), 1000)
        }
      })
    }
  }
}
