<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
          <div class="current-city-list">
            <div class="current-city">
              {{this.currentCity}}
            </div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="popular-city-list">
            <div 
              class="popular-city" 
              v-for="item of popularCities" 
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              {{item.name}}
            </div>
          </div>
      </div>
      <div class="area" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">
          {{key}}
        </div>
          <div class="city-item-list">
            <div 
              class="city-item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    popularCities: Array,
    cities: Object,
    abbr: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 不使用mapMutations的原始写法
      // this.$store.commit('changeCurrentCity', city)
      this.changeCurrentCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCurrentCity'])
  },
  watch: {
    abbr () {
      if (this.abbr) {
        const element = this.$refs[this.abbr][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background-color #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .current-city-list
      padding .1rem .6rem .1rem .1rem
      display flex
      flex-wrap wrap
      .current-city
        width 30%
        text-align center
        margin .1rem
        padding .1rem 0
        border .02rem solid #ccc
        border-radius .06rem
    .popular-city-list
      padding .1rem .6rem .1rem .1rem
      display flex
      flex-wrap wrap
      .popular-city
        width 30%
        text-align center
        margin .1rem
        padding .1rem 0
        border .02rem solid #ccc
        border-radius .06rem
    .city-item-list
      .city-item
        line-height .76rem
        color #666
        padding-left .2rem
</style>