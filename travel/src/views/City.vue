<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-abbr></city-abbr>
  </div>
</template>

<script>
import CityHeader from '@/components/City/CityHeader'
import CitySearch from '@/components/City/CitySearch'
import CityList from '@/components/City/CityList'
import CityAbbr from '@/components/City/CityAbbr'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAbbr
  }
}
</script>

<style lang="stylus" scoped>

</style>
