<template>
<div class="main1">
		<div class="item" v-for="(item,index) of list" :key="item._id">
		    <div class="item-t">
		            <img :src="item.detail.auth_icon" />
		            <div class="info">
		                <h2>网红签约: {{item.detail.auth}}</h2>
		                <p>签约时间：{{item.date1}} 时 {{item.date2}} 分</p>
		                <p>期限：5 年</p>
		            </div>
		    </div>
		    <div class="btn" @click="payment">
		        代付款
		    </div>
		</div>
</div>
  
</template>

<script>
export default {
  name: 'App',
  props: {  
  },
  data() {
    return {
		list:[
		]
	};
  },
  components: {},
  mounted() {
	  this.$axios({
		  url:'/api/home',
		  params:{_limit:10,_page:1}
	  }).then(res=>{
		  console.log(res)
		  this.list=res.data.data;
	  })
  },
  updated() {},
  methods: {
	payment(){
		this.$router.push('/user');
	}  
  }
};
</script>

<style scoped>
	.main1{
		background-color: #D6D2DE;
		min-height: 20rem;
	}
	.item {
		    overflow: hidden;
		    width: 9.146667rem;
		    margin: 0 auto 0.5rem;
		    background: #fff;
		    height: 4rem;
		    border-radius: 0.16rem;
		    padding-top: 0.4rem;
	}
	.item .item-t {
	     box-sizing: border-box;
	     padding: 0.346667rem;
	     overflow: hidden;
	}
	.item .item-t img {
	  width: 1.813333rem;
	  height: 1.813333rem;
	  float: left;
	  margin-right: 0.28rem;
	}
	.item .item-t .info {
	  float: left;
	  height: 1.813333rem;
	}
	.item .item-t .info h2 {
	  font-size: 0.4rem;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: #333333;
	}
	.item .item-t .info p {
	  font-size: 0.346667rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: #999999;
	  margin-top: 0.266667rem;
	}
	.item .btn {
	  background: #e8c756;
	  border-radius: 0.386667rem;
	  text-align: center;
	  width: 2.133333rem;
	  float: right;
	  margin-right: 0.4rem;
	  height: 0.773333rem;
	  line-height: 0.773333rem;
	  font-size: 0.346667rem;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: #333333;
	  margin-bottom: 0.133333rem;
	}
	.item .shipment {
	  background: #fff;
	  border: 1px solid #ccc;
	}
	/* .item span{
		    background: url(../../../public/images/headerimg.png);
		    background-size: 100%;
		    display: block;
		    width: 2rem;
		    height: 2rem;
		    float: left;
			margin-right: 1rem;
	} */
</style>
