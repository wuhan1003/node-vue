// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';
import axios from 'axios';
Vue.config.productionTip = false
import './css/common.scss';

/**
 * axios 请求拦截器( 发出请求之前处理 )
 * 
 * axios.interceptors.request.use(( config) =>{
 *    return config ;
 * },(err) =>{
 *    return Promise().reject(err)
 * })
 * 
 */



//axios 响应拦截器( 返回数据之前处理)
axios.interceptors.response.use((data) =>{
  console.log('axios拦截器',data);
  return data;
},(err)=>{
   return Promise().reject(err)
})
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
