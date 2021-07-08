/*
* 通过mutation间接修改state的actions函数对象
* */
import {
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS
} from './mutation-type'
import {reqFoodTypes,reqAddress,reqShops} from '../api'
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
  }
}
