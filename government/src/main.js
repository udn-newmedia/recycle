import Vue from 'vue'
import App from './App.vue'

import store from './store'

import '../public/static/UdnFontSize.css'
import 'intersection-observer'

IntersectionObserver.prototype.POLL_INTERVAL = 10

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
