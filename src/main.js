import Vue from 'vue'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.css"



import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import '../node_modules/swiper/swiper-bundle.min.css'
// import '../node_modules/swiper/swiper.scss'

// import style (<= Swiper 5.x)
// import '../node_modules/swiper/swiper.css'
import '../node_modules/swiper/css/swiper.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



