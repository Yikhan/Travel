<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
      :cities="cities" 
      :popularCities="popularCities"
      :abbr="abbr"
      ></city-list>
    <city-abbr 
      :cities="cities"
      @abbrChange="handleAbbrChange"
      ></city-abbr>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      cities: {},
      popularCities: [],
      abbr: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.popularCities = data.hotCities
      }
    },
    handleAbbrChange (abbr) {
      this.abbr = abbr
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
