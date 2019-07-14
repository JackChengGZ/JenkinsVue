import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



//import Vue from 'vue'
import App from '../App'
//import Layout from '../components/layout.vue'
//import router from './router'
import VueRouter from 'vue-router'
import IndexPage from '@/pages/index'
import OrderListPage from '@/pages/orderList'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
Vue.use(Router)

//export default new Router({
//  routes: [
//    {
//      path: '/',
//      name: 'Hello',
//      component: HelloWorld
//    }
//  ]
//})
//console.log(IndexPage);
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:IndexPage,
            //redirect: ''
        },
        {
            path: '/orderList',
            component: OrderListPage
        },
        {
            path:'/detail',
            component:DetailPage,
            redirect: '/detail/analysis',
            children: [
                {
                    path: 'analysis',
                    component: DetailAnaPage
                },
                {
                    path: 'count',
                    component: DetailCouPage
                },
                {
                    path: 'forecast',
                    component: DetailForPage
                },
                {
                    path: 'publish',
                    component: DetailPubPage
                }
            ]
        }
    ]
})