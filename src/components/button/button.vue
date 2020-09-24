<template>
  <div>
  		<button class="login-btn" :style="{background: bgColor}" @click="$emit('click',$event)">
  		 <template v-if =" text !== '按钮'">
  			 {{text}}
  		 </template>
  		 <slot v-if =" text === '按钮' ">按钮</slot>
		 <!-- 插槽 slot -->
  		 </button>
  </div>
</template>


<script>
  export default {
    name:'button',
    props:{
		text:{
			type:String,
			default:'按钮'
		},
		bgColor:{
			type:String,
			default:'#E8C756'
		},
		
	},
	data(){
		return {}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
 .login-btn{
	 width: 8.986667rem;
     height: 1.306667rem;
     background: #e8c756;
     border-radius: 0.653333rem;                                                  
     font-size: 0.453333rem;
     font-family: PingFang SC;
     font-weight: 500;
     color: #a0347a;
     text-align: center;
     line-height: 1.306667rem;
     margin-top: 1rem;
	 outline: none;
	 border: none;
 }
</style>

