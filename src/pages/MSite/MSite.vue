<template>
  <div class="msite">
    <!--首页头部-->
    <HeadTop class="header" :title="address.name">
          <span class="header_search" slot="left">
            <i  class="iconfont icon-sousuo"></i>
          </span>

      <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
    </HeadTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="BASE_URL+category.image_url">
              </div>
              <span>{{ category.title }}</span>
            </a>

          </div>

        </div>

        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
         <ShopList/>
    </div>
  </div>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop'
import "swiper/swiper.min.css"
import Swiper from 'swiper'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'


export default {
  data(){
    return{
    BASE_URL:'http://fuss10.elemecdn.com'
    }
  },
watch:{

    categorys(value){
    //在categorys变换之后立即执行
      this.$nextTick(()=>{
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          }
        })
      })
    }
  },
  computed:{
      ...mapState(['address','categorys']),
    /*
    * 根据categorys一维数组生成一个二维数组
    * 小数组中的元素个数最大是8
    * */
    categorysArr(){
      const {categorys} = this
      //准备一个空的二维数组
      const arr = []
      //准备一个小数组,最大长度为8
      let minArr = []
      //遍历categorys
      categorys.forEach(item=>{
        //如果当前的小数组已经满了，创建一个新的
        if (minArr.length===8){
          minArr =[]
        }
        if(minArr.length===0){
          arr.push(minArr)
        }
        //将当前分类保存到小数组中
        minArr.push(item)

      })
      return arr
    }
  },
  components:{
   HeadTop,
    ShopList
 }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
