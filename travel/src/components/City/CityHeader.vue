<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont icon-return icon-return-adjust"></div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .icon-return-adjust
      position absolute
      margin-left .1rem
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>