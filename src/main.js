// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false

var axios = require('axios')
axios.defaults.baseURL = 'http://192.168.196.131:8433/api'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userToken.userToken.username != null) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
