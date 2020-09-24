<template>
  <div id="app">
	<Nav v-show="$root.bNav"/>
	<loading v-show="$root.bLoading"/>
	<router-view/>
	<Footer v-show="$root.bFoot"/>
     
  </div>
</template>

<script>
import loading from '../components/loading.vue'
import Nav from '../components/nav/nav.vue'
import Footer  from './Footer.vue'

export default {
  name: 'App',
  data(){
    return {}
  },
  mounted(){
  },
  components: {
     loading,Footer,Nav
  },
  methods:{
  },
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|user|detile|myorder|show/.test(path)){
          this.$root.bFoot=true;
		  this.$root.bNav=true
        }
        if(/login|reg/.test(path)){
          this.$root.bFoot=false;
		  this.$root.bNav=false;
        }
		// if(/detile/.test(path)){
		// 	this.$root.bFoot=true;
		// 	this.$root.bNav=true;
		// }
      },
      immediate:true
    }
  },
}
</script>

<style scoped>
</style>

