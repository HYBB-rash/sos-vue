import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import Index from '../components/AppIndex/Index'
import Home from '../components/Home'
import Create from '../components/AppIndex/Create'
import Answer from '../components/AppIndex/Answer'
import Profile from '../components/AppIndex/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: ['/index'],
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/create',
          name: 'Create',
          component: Create
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ans/:id',
      name: 'Answer',
      component: Answer
    }
  ]
})
