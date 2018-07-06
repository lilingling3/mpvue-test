export const state = {
  count: 0,
};

export const getters = {};

export const actions = {};

export const mutations = {
  increment: (state) => {
    const obj = state;
    console.log('obj.count :', obj.count);
    obj.count += 1;
  },
  decrement: (state) => {
    const obj = state;
    obj.count -= 1;
  },
};

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations,
};