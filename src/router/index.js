import Vue from 'vue'
import Router from 'vue-router'

import Beake from '../components/Beake.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beake',
      component: Beake
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
