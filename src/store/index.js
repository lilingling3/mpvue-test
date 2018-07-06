import Vue from 'vue';
import Vuex from 'vuex';
import rootState from './root-state';
import rootActions from './root-actions';
import rootMutations from './root-mutations';

import todayTask from './modules/today-task';
import contact from './modules/contact';
import counter from './modules/counter';
import userInfo from './modules/userInfo'
Vue.use(Vuex);
console.log(window);

// if(!window.s)window.s={};
// window.s.todayTask = todayTask.state;
// window.s.contact = contact.state;
// window.s.counter = counter.state;

export default new Vuex.Store({
  state: rootState,
  actions: rootActions,
  mutations: rootMutations,
  modules: {
    todayTask,
    contact,
    counter,
    userInfo
  },
  strict: false
})