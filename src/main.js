// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout.vue'
import router from './router/index.js'
////import router from './router'
//import VueRouter from 'vue-router'
//import IndexPage from './pages/index'
//import OrderListPage from './pages/orderList'
//import DetailPage from './pages/detail'
//import DetailAnaPage from './pages/detail/analysis'
//import DetailCouPage from './pages/detail/count'
//import DetailForPage from './pages/detail/forecast'
//import DetailPubPage from './pages/detail/publish'

import VueResource from 'vue-resource'

//Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

//console.log(IndexPage);


//console.log(router.r)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
