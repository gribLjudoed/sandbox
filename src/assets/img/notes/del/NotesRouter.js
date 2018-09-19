import Vue from 'vue'
import Router from 'vue-router'

import Css from '@/components/notes/Css'
import Js from '@/components/notes/Js'
import VueFramework from '@/components/notes/VueFramework'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/css', name: 'Css', component: Css },
    { path: '/js', name: 'Js', component: Js },
    { path: '/VueFramework', name: 'VueFramework', component: VueFramework }
  ]
})
