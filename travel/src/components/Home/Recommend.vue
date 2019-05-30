<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
        <router-link 
          tag="li" 
          class="item border-bottom" 
          v-for="item of recommendList" 
          :key="item.id"
          :to="'/detail'"
        >
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      display flex
      flex-direction column
      justify-content space-between
      flex 1 1 auto
      min-width 0 //需要指定最小宽度 否则下面的省略号模式不起作用
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .6rem
        color #ccc
        ellipsis() 
      .item-button
        background-color orange
        width 30%
        border-radius .06rem
        color: #fff
        ellipsis()
</style>
