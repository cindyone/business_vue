import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/home/index'
import login from '../components/home/login'
import searchResult from '../components/home/searchResult'
import search from '../components/home/search'
import addCompany from '../components/page/addCompany'
import loginIndex from '../components/page/loginIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path: '/index',
      component: index,
      children: [{
        path: '/search',
        component: search
      },{
        path: '/login',
        component: login
      },{
        path: '/searchResult',
        component: searchResult
      }]
    },{
      path: '/addCompany',
      component: addCompany
    },{
      path: '/loginIndex',
      component: loginIndex
    }
  ]
})
