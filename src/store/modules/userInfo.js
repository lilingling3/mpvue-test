import * as userINfoConstant from '../../base/constants/userinfo'

export const state = {
  userInfo: {
    id: 1,
    name: 'mpVue-tutorials',
    nickname: 'mpVue教程',
    role: 1,
    mobile: 15985817766,
    tel: 15985817766,
    email: '284516433@qqcom',
    avatar: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=2018315',
    sex: 1,
    birthday: '1995-05-06',
    joinTime: '2004-05-06',
    idcard: '350322199505064333',
    scanNum: 99,
    createTime: '2018-03-20',
    modifyTime: '2018-03-25',
    provinceName: '福建',
    cityName: '厦门',
    deviceNum: 9,
    totalEarthworkVolume: 13,
    totalProjectNum: 4,
    driverNum: 1,
    workTime: 107,
    handleDevice: 5,
    totalCommentNum: 2,
    lengthOfService: 5,
  },
  idArray: ['设备老板', '司机', '商家']
};

export const getters = {
  [userINfoConstant.GET_USERINFO](state) {
    return state.userInfo;
  },
  [userINfoConstant.GET_IDENTITY](state) {
    return state.userInfo.role
  },
  [userINfoConstant.GET_IDENTITY_IN_CHINESE](state) {
    let role = state.userInfo.role;
    if (role > 0 && role < 3) {
      return state.idArray[role]
    } else {
      return '未知'
    }
  }
};

export const actions = {};

export const mutations = {
  [userINfoConstant.SET_USERINFO](state, payload) {
    state.userInfo = payload
  },
  [userINfoConstant.SET_IDENTITY](state, payload) {
    state.userInfo.role = payload
  },
  [userINfoConstant.SET_BIRTHDAY](state,payload){
    state.userInfo.birthday = payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
  // namespaced:true
};