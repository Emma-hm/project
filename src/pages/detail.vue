<template>
  <div class="detail" v-if="detail.title">
		<div class="content">
			<div class="header clear">
				<h2><img :src="detail.detail.auth_icon" /></h2>
				<p>{{detail.detail.auth}}</p>
			</div>
			<div class="cont">
				<h3>{{detail.title}}</h3>
				
				<div class="text-box" v-html="detail.detail.content"></div>
			</div>
		</div>
  </div>
  <FrameScreen v-else></FrameScreen>
</template>


<script>
import FrameScreen from '../components/frame-screen.vue'
import axios from '../plugins/axios.js'
export default {
  name: 'detail',
  props: {  
  },
  data() {
    return {
		detail:{}
	};
  },
  components: {
	  FrameScreen
  },
  mounted() {
	  let collectionName = this.$route.query.collectionName;
	  let _id = this.$route.params._id;
	  console.log(collectionName,_id)
	  
	  axios({
		  url:`/api/${collectionName}/${_id}`
	  }).then(res=>{
		  // console.log(collectionName);
		  // console.log(_id);
		  console.log(res);
		  this.detail = res.data.data
	  })
  },
  updated() {},
  methods: {}
};
</script>

<style scoped>
	.content{max-width:8.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
	.content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
	.header h2{ float:left; margin-right:0.18rem;}
	.header p{ float:left;font-size:0.3rem;margin: 0.79rem 0.5rem 0 0.5rem;}
	
	.content .cont{ padding:0 0.38rem; color:#494d4d;}
	.cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem;padding-top: 0.5rem; border-bottom:1px solid #494d4d;}
	.cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
	.time p{ float:left;position:relative;}
	.time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
	.time span img{width:100%;height:100%;}
	
	.cont .text-box{ font-size:0.25rem;margin-top: 1rem;}
	.text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
</style>
