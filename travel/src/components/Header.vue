<template>
  <div class="header">
    <div class="header-left">return</div>
    <div class="header-input">City/Tour/Destination</div>
    <div class="header-right">city</div>
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
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      width .64rem
      float left
    .header-right
      width 1.24rem
      float right
      text-align center
    .header-input
      flex 1
      margin-top  .12rem
      margin-left .2rem
      line-height .64rem
      height .64rem
      background  #fff
      border-radius  .1rem
      color #ccc
</style>