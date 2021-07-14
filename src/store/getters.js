/*
* 包含多个state的计算属性的对象getters
* */
export default {
  totalCount(state){
    return  state.cartFoods.reduce((proTotal,food)=> proTotal+food.count,0)

  },
  totalPrice(state){
    return  state.cartFoods.reduce((proTotal,food)=> proTotal+food.count*food.price,0)

  },


}
