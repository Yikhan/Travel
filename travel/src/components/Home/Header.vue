<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-return icon-return-adjust"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      城市/景点/行程
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="iconfont icon-arrow-down icon-arrow-down-adjust"></span>
        {{
          // 从store里面读取当前city
          // this.$store.state.city
          
          // 使用mapState映射后
          this.city
        }}
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'home',
  props: {
  },
  components: {
  
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display flex
    line-height $headerHeight
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
      min-width 1.04rem // 根据城市名字长度自动调整宽度
      padding 0 .1rem
      float right
      text-align center
      color #fff
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