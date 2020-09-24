<template>
	<div class="login">
	      <h3>登录</h3>
	      <div class="main">
	        <div class="form-input">
			    <RedInput v-model="username"></RedInput>
				<RedInput type="password" v-model="password" place="请输入密码"></RedInput>
	        </div>
	        <RedButton @click="login" bgColor="#e8c756" >登录</RedButton>
			<p class="p1">{{msg}}</p>
	        <div class="tips" style="display: flex; justify-content: space-between;">
	            <div class="goLogin" style="text-align: center;" @click="$router.push('/reg')">
	              我要注册
	              <i>></i>
	            </div>
	        </div>
	      </div>
	</div>
</template>

<script>
	import RedButton from '../components/button/button.vue'
	import RedInput  from '../components/input/input.vue'
	export default{
		name:'login',
		components:{
			RedButton,RedInput
		},
		data(){
			return{
				username:'',
				password:'',
				msg:''
			}
		},
		methods:{
			login(){
				this.$axios({
				  url:'/api/login',
				  method:'post',
				  data:{
				    username:this.username,
				    password:this.password
				  }
				}).then(
				  res=>{
					  // console.log(res)
					  if(res.data.err===0){
						  //存token
						  window.localStorage.setItem('user',JSON.stringify(res.data));
						  //跳转到之前页面  没有的话跳user页面
						  // console.log(this.$route.query.p)
						  if(!this.$route.query.p){
							  this.$router.push('/user');
						  }else{
							  this.$router.push(this.$route.query.p);
						  }
					  }else{
						  this.msg=res.data.msg
					  }
				  }
				)
			}
		}
	}
</script>

<style scoped>
	.login {
	  width: 100%;
	  height: 100vh;
	  box-sizing: border-box;
	  padding: 0.52rem;
	  background: linear-gradient(251deg, rgba(192, 59, 112, 0.97), rgba(26, 26, 168, 0.97));
	}
	.login h3 {
	  font-size: 0.693333rem;
	  font-family: Alibaba PuHuiTi;
	  font-weight: bold;
	  color: white;
	  margin-bottom: 0.72rem;
	  line-height: 0.733333rem;
	  margin-top: 1.586667rem;
	}
	
	.login ::-webkit-input-placeholder {
	  /* WebKit, Blink, Edge */
	  color: rgba(255, 255, 255, 0.4);
	}
	.login :-moz-placeholder {
	  /* Mozilla Firefox 4 to 18 */
	  color: rgba(255, 255, 255, 0.4);
	}
	.login ::-moz-placeholder {
	  /* Mozilla Firefox 19+ */
	  color: rgba(255, 255, 255, 0.4);
	}
	.login :-ms-input-placeholder {
	  /* Internet Explorer 10-11 */
	  color: rgba(255, 255, 255, 0.4);
	}
	.login .goLogin {
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
		margin-left: 10xxxx0px;
		color: red;
	}
</style>

