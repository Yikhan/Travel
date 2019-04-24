<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园一期景观由七大温室和十五个花园广场组成。'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园一期景观由七大温室和十五个花园广场组成。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园一期景观由七大温室和十五个花园广场组成。'
        },
      ]
    }
    
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item-img
    width 100%
    height 38.9%
    // padding .1rem
  .item-info
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
</style>
