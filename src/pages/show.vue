<template>
  <div class="show">
	  <div class="show1">
		<img src="../../public/images/ewm.png" />  
	  </div>
  </div>
</template>

<script>
export default {
  name: 'show',
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
	.show{
		background: url(../../public/images/bg.png);
		height: 18rem;
		width: 10rem;
		background-size: 100%;
		position: relative;
	}
	.show1{
		position: absolute;
		top: 37%;
		left: 10%;
	}
	.show img{
		width: 8rem;
		height: 8rem;
	}
</style>
