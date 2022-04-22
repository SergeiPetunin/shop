<template>
	<div class="main-catalog-item">
		<img class="item-img" :src=" require('../assets/img/' + product_data.image) " alt="img">
		<p class="item-name">{{product_data.name}}</p>
		<p class="item-price">Price: {{product_data.price}} $.</p>
		<button class="item_add btn" @click="addToCart">Add to cart</button>
	</div>

</template>

<script>


export default {
  name: 'CatalogItem',
  components: {
  	
  },
  props: {
  	product_data: {
  		type: Object,
  		default() {
  			return {}
  		}
  	}
  },
  methods: {
  	addToCart() {
  		this.$emit('addToCart',this.product_data)
  	}
  }
}
</script>

<style>
	.main-catalog-item {
		box-shadow:0 0 8px 0 #e0e0e0;
		width: 200px;
		padding: 8px;
		margin: 8px;
		border-radius: 4px;
	}

	.item-img {
		width: 100px;
	}

</style>