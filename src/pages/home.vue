<template>
	<div class="home">
		<banner :data="banners" collectionName="banner"/>
		<div class="main">
			<red-cell
			 v-for="(item,index) of list"
			 :key="item._id"
			 :data="item"
			 collectionName="home"
			/>
		</div>
	</div>
</template>

<script>
import axios from  'axios'
import banner from '../components/banner/banner.vue'
import RedCell from '../components/cell/cell.vue'
	export default {
		name: 'Home',
		props: {},
		data() {
			return {
               banners:[
				   {_id:1,banner:"/images/a.jpg"},
				   {_id:2,banner:"/images/b.jpg"},
				   {_id:3,banner:"/images/c.jpg"},
				   {_id:4,banner:"/images/d.jpg"},
				   {_id:5,banner:"/images/e.jpg"},
				   {_id:6,banner:"/images/f.jpg"},
			   ],
			   list:[]
			}
		},
		components: {banner,RedCell},
		mounted() {
		    //发送请求
			axios({
				url:'/api/home',
				params:{_limit:10,_page:1}
			}).then(res=>{
				// console.log(res);
				if(res.data.err===0){
				  this.list=res.data.data;
				}
				
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.home{
		background: purple;
	}
	.home .main {
		box-sizing: border-box;
		padding: 0.266667rem;
		overflow: hidden;
		padding-bottom: 2rem;
	}

	/* .home .main .item {
		float: left;
		width: 4.646667rem;
		height: 5.56rem;
		background: url("../assets/img/itembg.png") no-repeat center;
		background-size: contain;
		display: flex;
		justify-items: center;
		align-items: center;
		flex-direction: column;
	}

	.home .main .item h2 {
		font-size: 0.613333rem;
		font-family: YouSheBiaoTiHei;
		font-weight: 400;
		color: white;
		margin-top: 0.44rem;
	}

	.home .main .item .time {
		width: 2.946667rem;
		height: 0.613333rem;
		margin-top: 0.34rem;
		background: #74fbeb;
		border-radius: 23px;
		color: #3F1173;
		font-size: 0.373333rem;
		font-style: italic;
		font-weight: bold;
		text-align: center;
		line-height: 0.613333rem;
		font-family: "microsoft yahei";
	}

	.home .main .item .rate {
		width: 3.48rem;
		height: 0.613333rem;
		margin-top: 0.34rem;
		color: #fff;
		background: linear-gradient(-90deg, #5849b3 0%, #e74983 100%);
		border-radius: 23px;
		font-size: 0.373333rem;
		font-style: italic;
		font-weight: bold;
		text-align: center;
		line-height: 0.613333rem;
		font-family: "microsoft yahei";
	}

	.home .main .item span {
		font-size: 0.32rem;
		font-family: PingFang SC;
		font-weight: 400;
		color: white;
		line-height: 0.64rem;
		opacity: 0.6;
		margin-top: 0.113333rem;
	}

	.home .main .item .btn {
		width: 1.866667rem;
		height: 0.573333rem;
		font-size: 0.373333rem;
		font-style: italic;
		font-weight: bold;
		text-align: center;
		margin-top: 0.186667rem;
		color: #fff;
		text-decoration: none;
		line-height: 0.573333rem;
		font-family: "microsoft yahei";
	} */
</style>
