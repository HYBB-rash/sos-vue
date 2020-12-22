import Vue from 'vue'
import Vuex from 'vuex'

import createStore from './common/create.js'
import surveyStore from './common/survey.js'
import answerStore from './common/answer.js'
import profileStore from './common/profile.js'
import userStore from './common/user.js'
import analyzeStore from './common/analyze.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    create: createStore,
    survey: surveyStore,
    answer: answerStore,
    profile: profileStore,
    user: userStore,
    analyze: analyzeStore
  },
  state: {
    userToken: {
      id: window.localStorage.getItem('userToken' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('userToken' || '[]')).id,
      username: window.localStorage.getItem('userToken' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('userToken' || '[]')).username
    }
  },
  mutations: {
    login (state, playLoad) {
      state.userToken = playLoad.userToken
      window.localStorage.setItem('userToken', JSON.stringify(playLoad.userToken))
    },
    logout (state) {
      state.userToken = []
      window.localStorage.removeItem('userToken')
    },
    setStatus (state, playLoad) {
      state.id = playLoad.id
    }
  }
})
