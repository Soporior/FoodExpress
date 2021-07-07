<template>
<div id="app">
  <router-view></router-view>
  <FootGuide v-if="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import FootGuide from './components/FooterGuide/FootGuide'
export default {
  name: "App",
  components:{
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
