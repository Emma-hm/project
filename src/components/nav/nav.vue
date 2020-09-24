<template>
  <div id="nav">
	  <div class="header">
	      <span @click="$router.go(-1)"><</span>
	      <span>网红传媒</span>
	      <span></span>
	  </div>
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
	.header {
	  box-sizing: border-box;
	  padding: 0.44rem;
	  display: flex;
	  height: 1.173333rem;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 0.5rem;
	  color: #fff;
	}
	#nav{
		background: linear-gradient(264deg,rgba(192, 59, 112, 0.97),rgba(74, 36, 152, 0.97));
	}
</style>
