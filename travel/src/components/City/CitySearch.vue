<template>
<div>
  <div class="search">
    <input 
      v-model="keyword" 
      class="search-input" 
      type="text" 
      placeholder="输入城市名或拼音" 
    />
  </div>
  <div 
    class="search-content" 
    ref="search"
    v-show="keyword"
  >
    <ul>
      <li 
        class="search-item border-bottom" 
        v-for="item of searchResult"
        :key="item.id"
        @click="handleCityClick(item.name)"
      >
        {{item.name}}
      </li>
      <li 
        class="search-item border-bottom"
        v-show="noSearchResult"
      >
        没有匹配的城市
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from "better-scroll"

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },

  data () {
    return {
      keyword: '',
      searchResult: [],
      timer: null
    }
  },

  computed: {
    noSearchResult () {
      return this.searchResult.length === 0
    }
  },

  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCurrentCity', city)
      this.$router.push('/')
    }
  },

  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.searchResult = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let abbr in this.cities) {
          this.cities[abbr].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || 
                value.name.indexOf(this.keyword) > -1) {
                  result.push(value)
                }
          })
        }
        this.searchResult = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      width 100%
      line-height .62rem
      text-align center 
      border-radius .06rem
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    background-color #fff
    color #666
</style>
