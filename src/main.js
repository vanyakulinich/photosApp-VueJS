import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'es6-promise/auto';

import { store } from './store'
import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  base: 'app'
})

Vue
  .use(VueRouter)
  .use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
