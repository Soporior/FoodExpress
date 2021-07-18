/*
入口Js
**/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif' //引入懒加载时显示的图片
import './filters' //引入自定义过滤器
//配置懒加载
Vue.use(VueLazyload,
  { loading })
import './mock/mockServer'
//注册全局组件
Vue.component(Button.name,Button)//<mt-button>
//图片懒加载
Vue.use(VueLazyload, { loading })
new Vue({
  el:'#app',
  render:h => h(App),
  router,//vue-router
  store//vuex
})
