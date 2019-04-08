<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img 
          class="swiper-img" 
          :src="item.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: require("images/swiper-1.jpg")
        },
        {
          id: '0002',
          imgUrl: require("images/swiper-2.jpg")
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透 wrapper里面的子组件也变化 
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 27vw
    background #eee
    .swiper-img
      width 100%

</style>
