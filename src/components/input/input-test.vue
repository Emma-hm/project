<template>
  <div id="app">
	  
     <h4>input测试</h4>
	 <!-- <RedInput/> -->
	 <r-input v-model="op"></r-input>
	
  </div>
</template>

<script>

import Input from '../components/input/input.vue'

export default {
  name: 'App',
  components: {
      Input
  },
  data(){
	  return {
		  op:'123'
	  }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
