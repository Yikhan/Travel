<template>
  <div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt=""/>
    <div class="banner-info">
      <div class="banner-title">
        大连圣亚海洋世界(AAAA景区)
      </div>
      <div class="banner-number">
        <span class="iconfont icon-picture banner-icon"></span>
        39
      </div>
    </div>
  </div>
  <common-gallery :imgs="imgs" v-show="showGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'Banner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: [
        "https://img1.qunarzz.com/vs_ceph_vs_tts/9e97bc50-6943-4f68-b972-b9a306c8ba96.jpg_r_1280x840x90_84ed4680.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/c61a36d2-7e92-47cf-a861-c0ea1e1f751d.jpg_r_1280x840x90_f2838aea.jpg"
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 4.56rem
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem

</style>
