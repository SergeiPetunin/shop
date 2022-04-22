<template>
	<div class="cart-item">
		<img class="cart-item-img" :src=" require('../assets/img/' + cart_item_data.image) " alt="">
		<div class="item_info">
			<p>{{cart_item_data.name}}</p>
			<p>{{cart_item_data.price}} $</p>
			<p>{{cart_item_data.article}}</p>

		</div>
		<div class="item_quantity">
			<p>Qty:</p>
			{{cart_item_data.quantity}}
		</div>
		<button @click="deleteFromCart">Delete</button>
	</div>
</template>

<script>
	export default {
		name: "cartItem",
		props: {
			cart_item_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		computed: {},
		methodts: {
			deleteFromCart() {
				this.$emit('deleteFromCart')
			}
		},
		mounted() {
			this.cart_item_data.quantity= 1;
		}
	}
</script>

<style>
	.cart-item {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-items: center;
		max-width: 700px;
		box-shadow:0 0 8px 0 #e0e0e0;
		border-radius: 4px;
		padding: 10px;
		margin: 10px auto;
	}

	.cart-item-img {
		max-width: 50px;
	}
</style>