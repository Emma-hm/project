<template>
  <div class="menu">
  	<ul class="menu1">
		<router-link
			class="menu2"
			tag="li"
			to="/user"
			>
			<div>全 部</div>
		</router-link>
		<router-link
			tag="li"
			to="/user"
			>
			<div>待付款</div>
		</router-link>
		<router-link
			tag="li"
			to="/user"
			>
			<div>待发货</div>
		</router-link>
		<router-link
			tag="li"
			to="/user"
			>
			<div>待收货</div>
		</router-link>
		<router-link
			tag="li"
			to="/user"
			>
			<div>已完成</div>
		</router-link>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {  
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
	.menu{
		width: 100%;
		height: 1.17rem;
		border-bottom: 1px solid #ccc;
	}
	.menu1 li{
		float: left;
		font-size: 0.4rem;
		padding: 0 0.4rem;
		line-height: 1.17rem;
	}
	.menu2{
		color: purple;
		border-bottom: 1px solid purple;
	}
</style>
