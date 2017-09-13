import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Home from '@/pages/home';
import VuexR from '@/pages/vuex';
import List from '@/pages/list';
import NodeRequest from '@/pages/noderequest';
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: '/',
      component: List
    },
    {
      path:'/list',
      name:'List',
      component:List,
    }, 
    {
      path: '/index',
      name: 'Index',
      component: Index
    },   
    {
      name:'home',
      path:'/home',
      component:Home
    },
    {
      name:'vueIndex',
      path:'/vuex',
      component:VuexR,
    },
    {
      name:'nodeReq',
      path:'/nodereq',
      component:NodeRequest
    }
  ]
})
