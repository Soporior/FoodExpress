/*
* 这是vuex的核心管理对象store
* */
import {
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS
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
  }
}
