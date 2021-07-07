/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../components/Login/Login'

Vue.use(VueRouter)
export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/',
      redirect:MSite
    },
    {
      path:'/msite',
      component:MSite,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    }
  ]

})
