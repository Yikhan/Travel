<template>
  <div class="icons">
    <div class="icon">
      <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
      <p class="icon-text">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
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
        width 80%
        height 80%
      .icon-text
        color $darkTextColor
</style>
