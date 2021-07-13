/*
* 这是vuex的核心管理对象store
* */
import {
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  DELETE_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-type'
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [DELETE_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  }, [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  }, [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

}
