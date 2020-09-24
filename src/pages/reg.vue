<template>
	<div class="reg">
	      <h3>注册</h3>
	      <div class="main">
	        <div class="form-input">
	          <RedInput v-model="username"></RedInput>
			  <RedInput type="password" v-model="password" place="请输入密码"></RedInput>  
	        </div>
			<RedButton @click="reg" bgColor="#e8c756">注册</RedButton>
			<p class="p1">{{msg}}</p>
	        <div class="goLogin" @click="$router.push('/login')">
	          去登录
	          <i>></i>
	        </div>
	      </div>
	</div>
</template>

<script>
	import RedButton from '../components/button/button.vue'
	import RedInput from '../components/input/input.vue'
	export default {
		name:'register',
		data(){
			return {
				username:'',
				password:'',
				msg:''
			}
		},
		components:{
			RedButton,RedInput
		},
		methods:{
			reg(){
				this.$axios({
					url:'/api/reg',
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(res=>{
					// console.log(res);
					if(res.data.err===0){
						//注册成功 跳登录页
						this.$router.push('/login')
					}else{
						this.msg=res.data.msg
					}
				})
			}
		}
	}
</script>

<style scoped>
	.reg {
	  width: 100%;
	  height: 100vh;
	  box-sizing: border-box;
	  padding: 0.52rem;
	  background: linear-gradient(251deg, rgba(192, 59, 112, 0.97), rgba(26, 26, 168, 0.97));
	}
	.reg h3 {
	  font-size: 0.693333rem;
	  font-family: Alibaba PuHuiTi;
	  font-weight: bold;
	  color: white;
	  margin-bottom: 0.72rem;
	  line-height: 0.733333rem;
	  margin-top: 1.586667rem;
	}
	
	.reg ::-webkit-input-placeholder {
	  /* WebKit, Blink, Edge */
	  color: rgba(255, 255, 255, 0.4);
	}
	.reg :-moz-placeholder {
	  /* Mozilla Firefox 4 to 18 */
	  color: rgba(255, 255, 255, 0.4);
	}
	.reg ::-moz-placeholder {
	  /* Mozilla Firefox 19+ */
	  color: rgba(255, 255, 255, 0.4);
	}
	.reg :-ms-input-placeholder {
	  /* Internet Explorer 10-11 */
	  color: rgba(255, 255, 255, 0.4);
	}

	.reg .goLogin {
	  font-size: 0.4rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: white;
	  width: 100%;
	  text-align: center;
	  margin-top: 0.746667rem;
	}
	.p1{
		margin-top: 20px;
		font-size: 20px;
		margin-left: 120px;
		color: red;
	}
	
</style>
