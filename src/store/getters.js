/*
* 包含多个state的计算属性的对象getters
* */
export default {
  //计算购物车里商品的数量
  totalCount(state){
    return  state.cartFoods.reduce((proTotal,food)=> proTotal+food.count,0)

  },
//计算购物车里商品的总价格
  totalPrice(state){

    return  state.cartFoods.reduce((proTotal,food)=> proTotal+food.count*food.price,0)
  },
  //计算满意的评价
  positiveCounts(state){
    const {ratings} = state
    return ratings.filter(rating=>rating.rateType===0).length
  },
  //计算不满意的评价
  negativeCounts(state){
    const {ratings} = state
      return ratings.filter(rating=>rating.rateType===1).length
  }

}
