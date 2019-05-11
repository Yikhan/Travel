<template>
 <swiper :options="swiperOption">
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
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
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
        padding-bottom 0.1rem
      .icon-desc
        font-size .1rem
        color $darkTextColor
        text-align center
        ellipsis()
</style>
