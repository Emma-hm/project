import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/reset.css';
//基础样式

import './assets/js/font.js'; 
//字体

import router from './plugins/router.js'
//引入路由
 
import './plugins/axios'; 
//拦截器

import './filters/index.js'  
//全局过滤器

let vm = new Vue({
  render: h => h(App),
  router,
  data:{
	  bLoading:false,
	  bFoot:true,
	  bNav:true
  }
}).$mount('#app')

 export default vm;
