import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem
import 'amfe-flexible/index.js'
// vant
import './plugins/vant'
// cookie
import './plugins/cookie'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
