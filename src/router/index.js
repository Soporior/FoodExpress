/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

/*import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'*/
  //实现路由组件的懒加载
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../components/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)
export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/',
      redirect:'/msite',
      meta:{
        isShowFooter:true
      }
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
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/goods',
          component:ShopGoods
        },
        {
          path:'/info',
          component:ShopInfo
        },
        {
          path:'/ratings',
          component:ShopRatings
        },
        {
          path:'',
          redirect:'/goods'
        }
      ]

    }
  ]

})
