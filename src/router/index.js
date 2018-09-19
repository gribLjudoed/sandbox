import Vue from 'vue'
import Router from 'vue-router'

import HtmlCss from '@/components/HtmlCss'
import Js from '@/components/Js'
import VueJs from '@/components/VueJs'
import Error404 from '@/components/Error404'



/*import('assets/css/bootstrap.css')
import('assets/css/ionicons.css')
import('assets/css/font-awesome.css')
import('assets/js/source/jquery.fancybox.css')
import('assets/css/animations.min.css')
import('assets/css/style-green.css')
import('@/assets/css/resetCss.css')*/
import('@/assets/css/bootstrap-grid.css')
import('@/assets/style.css')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '/', component: Js },
    { path: '/Js', name: 'Js', component: Js },
    { path: '/HtmlCss', name: 'HtmlCss', component: HtmlCss },
    { path: '/VueJs', name: 'VueJs', component: VueJs },
    { path: '*', name: 'Error404', component: Error404 },
  ]
})
