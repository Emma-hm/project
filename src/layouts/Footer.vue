<template>
 	<div class="footer">
 		<ul>
 			<router-link class="home" tag="li" to="/home" active-class="active">
 				<i />
 				<span>HOME</span>
 			</router-link>
			<i class="love" @click="show"></i>
 			<router-link class="my" tag="li" to="/user" active-class="active">
 				<i />
 				<span>MY</span>
 			</router-link>
 		</ul>
 	</div>
 </template>
 
 <script>
 	export default {
 		name: 'Footer',
 		props: {},
 		data() {
 			return {
 
 			}
 		},
 
 		components: {},
 		mounted() {},
 		updated() {},
 		methods: {
			show(){
				this.$router.push('/show');
			}
		}
 	}
 </script>
	
<style scoped>
	.footer {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  height: 1.6rem;
	  background: linear-gradient(264deg, rgba(192, 59, 112, 0.97), rgba(74, 36, 152, 0.97));
	}
	.footer ul {
	  height: 100%;
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	}
	.footer li {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	}
	.footer li img {
	  width: 0.48rem;
	  height: 0.48rem;
	}
	.footer li span {
	  font-size: 0.266667rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: white;
	  line-height: 0.64rem;
	  opacity: 0.5;
	}
	.footer ul .home i{
		background: url(../assets/img/index2.png) no-repeat;
		background-size: 100%;
		width: 0.75rem;
		height:0.75rem;
	}
	.footer ul .my i{
		
		background: url(../assets/img/my.png) no-repeat;
		background-size: 100%;
		width: 0.75rem;
		height:0.75rem;
		
	}
	.footer ul .home.active i{
		background: url(../assets/img/index-checked.png) no-repeat;
		/* src:'../assets/img/首页-选中(2).png'; */
		background-size: 100%;
		width: 0.75rem;
		height: 0.75rem;
	}
	.footer ul .my.active i{
		background: url(../assets/img/my2.png) no-repeat;
		background-size: 100%;
		width: 0.75rem;
		height:0.75rem;
	}
	.love{
		background: url(../../public/images/xing.png) no-repeat;
		width: 1.2rem;
		height: 1.2rem;
	}
</style>