<template>
  <div class="myorder">
	  <!-- <Nav v-show="$root.bNav"/> -->
	  
	  <Menu />
	  <Order />
  </div>
</template>

<script>
import Nav from '../components/nav/nav.vue'
import Order from '../components/order/order.vue'
import Menu from '../components/menu/menu.vue'
export default {
  name: 'myorder',
  props: {  
  },
  data() {
    return {};
  },
  components: {Nav,Order,Menu},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
	
</style>
