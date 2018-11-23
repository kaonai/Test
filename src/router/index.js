import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/Recommend'
import Mine from '../components/mine/Mine'
import Find from '../components/find/Find'
Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/mine', name: 'mine', component: Mine},
    {path: '/recommend', name: 'recommend', component: Recommend},
    {path: '/find', name: 'find', component: Find}
  ]
})

export default router
