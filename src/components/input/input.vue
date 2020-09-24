<template>
  <div>
		<input class="input"
		:type="type" 
		:value="value" 
		:style="{'padding-left':label?'1.24rem' : '0rem'}"
		@input="$emit('input',$event.target.value)"
		:placeholder="place"
		/>
		<span v-show="label">{{label}}</span>
  </div>
  
</template>

<script>
  export default {
    name:'input',
    props:{
		type:{
          type:String,
		  default:'text',
		},
		label:{
		  type:String,
		  default:''
		},
		value:{
			type:String,
			default:''
		},
		place:{
			type:String,
			default:'输入用户名'
		}
		
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
.input{
     width:8.8rem;
     height: 1.306667rem;
     background-color: rgba(255, 255, 255, 0.4);
     border-radius: 49px;
     margin: 0 auto;
     text-indent: 0.693333rem;
     font-size: 0.466667rem;
     border: 0px;
     outline: none;
     color: #fff;
     margin-top: 0.333333rem;
     margin-bottom: 0.333333rem;
 }
</style>


 
 

