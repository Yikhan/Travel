import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// 移动端一些机型会有click时间延迟300ms的问题
import fastClick from 'fastclick'

// 多浏览器显示适配，使得效果一致
import 'styles/reset.css'

// 1像素边框问题 手机多倍屏 css的一个px不对应实际的一个像素
import 'styles/border.css'

// icon引入
import 'styles/iconfont/iconfont.css'

// 轮播插件导入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
