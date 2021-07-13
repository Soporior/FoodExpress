<template>
<div>goods</div>
</template>

<script>
export default {
mounted() {
  this.$store.dispatch('getShopGoods')
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
