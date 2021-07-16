/*
* 通过mutation间接修改state的actions函数对象
* */
import {
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  DELETE_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-type'
import {reqFoodTypes,reqAddress,reqShops,reqUserInfo,reqLogout,reqShopGoods,reqShopInfo,reqShopRatings} from '../api'
export default {
  //异步获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude+','+state.longitude
    const result = await reqAddress(geohash)
    if (result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食物分类列表
  async getCategorys({commit}){

    const result = await reqFoodTypes()
    if (result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops({latitude,longitude})
    if (result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if (result.code===0){
     const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  async logout({commit}) {
    const result = await reqLogout()
  if(result.code===0)
  {
    commit(DELETE_USER_INFO)
  }
  },
  // 异步获取商家信息
 async getShopInfo({commit}, cb) {
  const result = await reqShopInfo()
  if(result.code===0) {
   const info = result.data
   info.score = 3.5
 commit(RECEIVE_INFO, {info})
  cb && cb()
  }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

    }
      },
  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      callback && callback()
    }
    },
  updateFoodCount({commit},{flag,food}){
    if (flag){
    commit(DECREMENT_FOOD_COUNT, {food})

    }else {
      commit(INCREMENT_FOOD_COUNT, {food})
    }

  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }

}
