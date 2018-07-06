

export default {
  addOne: ({ commit }) => {
    commit('ADD_ONE', { value: 1 })
  },
  getWXUserInfo: ({ commit }) => {
    commit('ADD_ONE', { value: 1 })
  },
  decrementTwo:({commit}) => {
    commit('decrement',2)
  },
  incrementOne:({commit}) =>{
    commit('increment')
  }

}