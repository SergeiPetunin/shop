<template>
	<div class="main-catalog">
		<CatalogItem 
			v-for="product in this.$store.state.products"
			:key="product.article"
			:product_data="product"
			@addToCart="addToCart"
		/>
	</div>

</template>

export default {
  
}


<script>
import CatalogItem from './main-catalog-item.vue'
import { mapActions } from 'vuex'
import { useStore } from 'vuex'

export default {
  name: 'Catalog',
  components: {
  	CatalogItem
  },
  props: {},
  data() {
  	return {
  		
  	}
  },
  methods: {
  	...mapActions ([
  		'GET_PRODUCTS_FROM_API',
  		'ADD_TO_CART'
  		]),
  	addToCart(data) {
  		this.ADD_TO_CART(data)

  	}
  },
  mounted() {
  	this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style>
	.main-catalog {
		box-shadow:0 0 8px 0 #e0e0e0;
		border-radius: 4px;
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	
</style>