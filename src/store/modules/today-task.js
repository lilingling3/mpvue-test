// import awaitTo from 'async-await-error-handling';

import * as cst from '@src/base/constants/mutation-type';
// import api from '@src/network/api';

const state = {
  readmePic: {
    error: '',
    url: ''
  },
  loading: false
};

const getters = {
  getReadmePic(state) {
    return state.readmePic;
  },

  getLoadingStatus(state) {
    return state.loading;
  }
};

const actions = {
  setLoadingStatus({ commit }, payload) {
    commit({
      type: cst.SET_LOADING_STATUS,
      res: payload
    });
  },

  resetContent({ commit }, payload) {
    commit({
      type: cst.RESET_REPO_CONTENTS,
      res: payload
    });
  },

  async getRepoReadmePic({ commit }, payload) {
    // const [err, res] = await awaitTo(api.getReadmePic(payload));
    // if (!err && res.data.code === 0) {
    //   commit({
    //     type: cst.GET_REPO_CONTENTS,
    //     res: 1,
    //     contents: res.data
    //   });
    // } else {
    //   commit({
    //     type: cst.GET_REPO_CONTENTS,
    //     res: 1,
    //     contents: (res && res.data) || {
    //       error: 'There is no readme file in this repository'
    //     }
    //   });
    // }
    // return res;
  }
};

const mutations = {
  [cst.SET_LOADING_STATUS](state, payload) {
    state.loading = payload.res;
  },

  [cst.RESET_REPO_CONTENTS](state, payload) {
    if (payload.res === 1) {
      state.readmePic = {
        error: '',
        url: ''
      };
    }
  },
  [cst.GET_REPO_CONTENTS](state, payload) {
    if (payload.contents) {
      if (payload.res === 1) {
        state.readmePic = payload.contents;
        state.loading = false;
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};