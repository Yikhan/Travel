<template>
 <swiper>
   <swiper-slide v-for="(page, index) of pages" :key="index">
    <div class="icons">
      <div class="icon"  
      v-for="item of page" 
      :key="item.id" 
      >
        <img class="icon-img" :src="item.imgUrl">
        <p class="icon-desc">{{item.desc}}</p>
      </div>     
    </div>
  </swiper-slide>
</swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: '0002',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png",
          desc: "北京一日游"
        },
        {
          id: '0003',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "北京必游"
        },
        {
          id: '0004',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc: "亲子项目"
        },
        {
          id: '0005',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: '0006',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          desc: "北京一日游"
        },
        {
          id: '0007',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "北京一日游"
        },
        {
          id: '0008',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc: "亲子项目"
        },
         {
          id: '0009',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "京城赏花"
        },
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach( (item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item) 
      } )
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons
    display flex
    flex-wrap wrap
    width 100vw
    height 50vw
    .icon
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 25%
      height 50%
      .icon-img
        width 1.1rem
        height 1.1rem
      .icon-desc
        font-size .1rem
        color $darkTextColor
        text-align center
        ellipsis()
        
</style>
