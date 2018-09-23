import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import { default as routes } from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
