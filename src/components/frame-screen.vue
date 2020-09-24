<template>
	<div class="frame-screen-list" id="top" v-if="type==='list'">
	</div>
	
	<div class="frame-screen-detail" v-else>
	  <div class="nav">
		  <div class="nav1"></div>
		  <div class="nav2"></div>
	  </div>
	  <div class="user">
	    <div class="user1"></div>
	  </div>
	  <div class="title">
		  <div class="tit"></div>
	  </div>
	</div>
</template>

<script>
	export default{
		props:{
			type:String
		}
	}
</script>

<style scoped>
	.nav{
		width: 300px;
		height: 60px;
		border: 1px solid #ccc;
		margin:50px auto;
		border-radius: 10px;
		position: relative;
	}
	.nav1{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 5px;
		left: 50px;
		background-color:#ccc ;
	}
	.nav2{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 5px;
		right: 50px;
		background-color:#ccc ;
	}
	.user{
		width: 300px;
		height: 100px;
		border: 1px solid #ccc;
		margin:50px auto;
		border-radius: 10px;
	}
	.user1{
		width: 200px;
		height: 80px;
		background-color: #ccc;
		margin: 10px auto;
	}
	.title{
		width: 300px;
		height: 200px;
		border: 1px solid #ccc;
		margin: auto;
		border-radius: 10px;
	}
	.tit{
		border-bottom: 10px solid #ccc;
		width: 180px;
		margin:100px auto;
	}
</style>
