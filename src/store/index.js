import Vue from 'vue'
import Vuex from 'vuex'

import createStore from './common/create.js'
import surveyStore from './common/survey.js'
import answerStore from './common/answer.js'
import profileStore from './common/profile.js'
import userStore from './common/user.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    create: createStore,
    survey: surveyStore,
    answer: answerStore,
    profile: profileStore,
    user: userStore
  },
  state: {
    userToken: {
      username: window.localStorage.getItem('userToken' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('userToken' || '[]')).userToken.username
    }
  },
  mutations: {
    login (state, userToken) {
      console.log(JSON.parse(window.localStorage.getItem('userToken' || '[]')).userToken.username)
      state.userToken = userToken
      console.log(state.userToken)
      window.localStorage.setItem('userToken', JSON.stringify(userToken))
    }
    // logout (state) {
    //   state.user = []
    //   window.localStorage.removeItem('user')
    // }
  }
})
