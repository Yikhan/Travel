<template>
 <ul class="list">
   <li 
    class="item"
    v-for="item of abbrs" 
    :key="item"
    :ref="item" 
    @click="handleAbbrClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
 </ul>
</template>

<script>
export default {
  name: 'CityAbbr',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    abbrs () { // 首字母列表
      const abbrs = []
      for (let i in this.cities) {
        abbrs.push(i)
      }
      return abbrs
    }
  },
  methods: {
    handleAbbrClick (e) { // 点击首字母后跳转到相应的城市名字区域
      this.$emit('abbrChange', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 先获得字母A到所在div顶部的距离
        const startY = this.$refs['A'][0].offsetTop
        // 当前用户触碰位置距离屏幕顶端的距离
        // 79是上方绿色部分div的高度，需要减掉
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && this.abbrs.length) {
          this.$emit('abbrChange', this.abbrs[index])
        }
      }
    },
    handleTouchEnd () {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>