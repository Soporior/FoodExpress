/*
* 这是vuex的核心管理对象store
* */
import Vue from 'vue'
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
  },[INCREMENT_FOOD_COUNT](state,{food}){
    if (!food.count){//第一次点击
     //food.count = 1
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food,'count',1)//让新增属性也有数据绑定
      //让新添加的food放进购物车里
      state.cartFoods.push(food)
    }else {
      food.count++
    }
  },[DECREMENT_FOOD_COUNT](state,{food}){
    if (food.count){
      food.count--
      if (food.count===0){
        //删除数量为0的food
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state) {
    //清空前把count都清0否则无法从新加入购物车（由加入购物车的条件决定）
    state.cartFoods.forEach(food=>food.count=0)
    //清空购物车所有food
    state.cartFoods = []
  }
}
