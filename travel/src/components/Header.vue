<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-return icon-return-adjust"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      City/Tour/Destination
    </div>
    <div class="header-right">
      <span class="iconfont icon-arrow-down icon-arrow-down-adjust"></span>
      City
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      margin-left .1rem
      .icon-return-adjust
        text-align center
        font-size .4rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .icon-arrow-down-adjust
        font-size .24rem
    .header-input
      flex 1
      margin-top  .12rem
      margin-left .2rem
      padding-left .2rem
      line-height .64rem
      height .64rem
      background  #fff
      border-radius  .1rem
      color #ccc
</style>