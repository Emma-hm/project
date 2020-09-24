import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import User from '../pages/user.vue'
import Detail from '../pages/detail.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import NoPage from '../pages/no-page.vue'
import MyOrder from '../pages/myorder.vue'
import Show from '../pages/show.vue'

let routes=[
	{path:'/home',component:Home},
	{path:'/user',component:User},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/myorder',component:MyOrder},
	{path:'/show',component:Show},
	{path:'*',component:NoPage},
	{path:'/',redirect:'/home'},
]

let router=new VueRouter({
	// routes:routes, 键值对
	routes,
	mode:'history'
})

export default router