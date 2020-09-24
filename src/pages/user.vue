<template>
	    <div class="my" v-if="$route.query.user.icon">
	        <div class="header">
	            <div class="icons">
	                <img src="/images/msg.png" alt=""><img src="/images/set.png" alt="">
	            </div>
	            <div class="avator">
	                <img :src="$route.query.user.icon" alt="">
	                <div class="info">
	                    <span>{{$route.query.user.nikename}}</span>
	                    <span class="rank">普通会员</span>
	                    <p class="tel">{{$route.query.user.tel}}</p>
	                </div>
					 <span class="loginout" @click="exit">注销</span>
	            </div>
	        </div>
	        <div class="main">
	            <div class="asset">
	                <ul>
	                    <li>
	                        <p><span>¥</span>{{$route.query.user.money | currency}}</p>
	                        <p>可取资产</p>
	                    </li>
	                    <li>
	                        <p><span>¥</span>{{$route.query.user.moneys |currency}}</p>
	                        <p>网红基金</p>
	                    </li>
	                    <li>
	                        <p><span>¥</span>{{$route.query.user.money+$route.query.user.moneys |currency}}</p>
	                        <p>总资产</p>
	                    </li>
	                </ul>
	            </div>
	            <div class="menu">
	                <ul>
	                    <li v-for="(item,index) of list" :key="item._id" @click="toMyorder">
	                        <div class="menu-l">
	                            <img :src="item.imgs" alt="">
	                            <span>{{item.title}}</span>
	                        </div>
	                       <img :src="item.imgs2" alt="" class="icon-r">
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </div>       
	        
	    <FrameScreen v-else/> 
</template>

<script>
import FrameScreen from '../components/frame-screen.vue'
import axios from '../plugins/axios.js'
	export default {
		name:'user',
		data(){
			return {
				list:[
					{_id:1,title:'我的订单',imgs:"/images/ticket.png",imgs2:'./images/icon-r.png'},
				    {_id:2,title:'收货地址',imgs:'/images/postion.png',imgs2:'/images/icon-r.png'},
					{_id:3,title:'签约信息',imgs:'/images/ticket.png',imgs2:'/images/icon-r.png'},
					{_id:4,title:'钱包充值',imgs:'/images/wallet.png',imgs2:'/images/icon-r.png'},
					{_id:5,title:'账单明细',imgs:'/images/account.png',imgs2:'/images/icon-r.png'},
					{_id:6,title:'个人信息',imgs:'/images/personalinfo.png',imgs2:'/images/icon-r.png'},
					{_id:7,title:'我的团队',imgs:'/images/team.png',imgs2:'/images/icon-r.png'},
					{_id:8,title:'邀请好友',imgs:'/images/invite.png',imgs2:'/images/icon-r.png'},
					
				]
			}
		},
		components:{FrameScreen},
		mounted(){
		},
		beforeRouteEnter(to,from,next){
		  axios({
		    url:'/api/user'
		  }).then(
			res => {
				// console.log(res)
		      if(res.data.err === 0) {
		        to.query.user = res.data.data
		        next()
		      }else{
		        next('/login')
		      }
		    }
		  )
		},
		beforeRouteUpdate(to,from,next){
			axios({
			  url:'/api/user'
			}).then(
				res => {
			    if(res.data.err === 0) {
			      to.query.user = res.data.data
			      next()
			    }else{
			      next('/login')
			    }
			  }
			)
		},
		methods:{
			exit(){
				window.localStorage.removeItem('user');
				
			},
			toMyorder(){
				this.$router.push('/myorder');
			}
		},
	}
</script>

<style scoped>
.my {
  background: #f6f4f9;
}
.my .header {
  height: 5.213333rem;
  width: 100%;
  color: #fff;
  line-height: 1.6rem;
  font-size: 0.453333rem;
  text-align: center;
  background: url(../assets/img/header-bg.png);
  background-size: contain;
}
.my .header .icons {
  text-align: right;
}
.my .header .icons img {
  width: 0.493333rem;
  height: 0.52rem;
  margin-right: 0.693333rem;
}
.my .header .avator {
  text-align: left;
  float: left;
}
.my .header .avator img {
  float: left;
  width: 1.44rem;
  height: 1.44rem;
  margin-left: 0.426667rem;
  margin-right: 0.333333rem;
}
.my .header .avator .info {
  float: left;
  margin-top: -0.4rem;
}
.my .header .avator .info span {
  font-size: 0.426667rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #f6f4f9;
}
.my .header .avator .info .rank {
  text-align: center;
  display: inline-block;
  width: 1.706667rem;
  height: 0.506667rem;
  background: #e8c756;
  border-radius: 19px;
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #98337d;
  line-height: 0.506667rem;
}
.my .header .avator .info .tel {
  height: 0.293333rem;
  font-size: 0.373333rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #f6f4f9;
  line-height: 0.64rem;
  opacity: 0.6;
  margin-top: -0.4rem;
}
.my .main {
  box-sizing: border-box;
  padding: 0.44rem;
}
.my .main .asset {
  height: 1.4rem;
  background: #fff;
  border-radius: 0.16rem;
  padding-top: 0.666667rem;
  text-align: center;
  margin-top: -2rem;
}
.my .main .asset ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.my .main .asset ul li p {
  font-size: 0.48rem;
  font-family: DIN Alternate;
  font-weight: bold;
  color: #222222;
}
.my .main .asset ul li p span {
  font-size: 0.373333rem;
}
.my .main .asset ul li p:last-child {
  margin-top: 0.506667rem;
  font-size: 0.346667rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
}
.my .main .menu {
  box-sizing: border-box;
  padding: 0.44rem;
  width: 9.146667rem;
  height: 11.333333rem;
  background: white;
  border-radius: 0.16rem;
  margin-top: 0.4rem;
}
.my .main .menu ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.333333rem;
}
.my .main .menu ul li .menu-l {
  display: flex;
  justify-content: center;
  align-items: center;
}
.my .main .menu ul li .menu-l img {
  width: 0.4rem;
  height: 0.466667rem;
  margin-right: 0.4rem;
}
.my .main .menu ul li .menu-l span {
  font-size: 0.426667rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #222222;
}
.my .main .menu ul li .icon-r {
  width: 0.16rem;
  height: 0.28rem;
}
.loginout{
 		margin-left: 3.5rem;
 	}
</style>

 
