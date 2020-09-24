<template>
  <div class="no-page">
    <h3>404</h3>
    <router-link to="/home" class="back">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'no-page',
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
	.no-page{
		width: 100px;
		height: 100px;
		text-align: center;
		margin:230px auto;
	}
	.no-page h3{
		font-size: 50px;
	}
	.back{
		font-size:16px;
	}
</style>
