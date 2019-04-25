<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
import HomeRecommend from '@/components/Recommend'
import HomeWeekend from '@/components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      // send ajax request
      axios.get('/api/data.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted() {
    this.getHomeInfo()
  },
}
</script>

<style>

</style>

