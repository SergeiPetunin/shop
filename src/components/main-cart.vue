<template>
	<div class="main-cart">
		<h1>Cart</h1>
		<cartItem 
			v-for="(item, index) in cart_data"
			:key="item.article"
			:cart_item_data="item"
			@deleteFromCart="deleteFromCart(index)"
		/>
	</div>
</template>

<script>
	import cartItem from './cart-item.vue'
	import { mapActions } from 'vuex'

	export default {
		name: 'Cart',
		components: {
			cartItem
		},
		props: {
			cart_data: {
				type: Array,
				default() {
					return
				}
			}
		},
		methods: {
			...mapActions([
				'DELETE_FROM_CART'
			]),
			deleteFromCart(index) {
				console.log(index)
				this.DELETE_FROM_CART(index)
			}
		}
	}
</script>

<style>
	.main-cart {
		box-shadow:0 0 8px 0 #e0e0e0;
		border-radius: 4px;
		padding: 10px;
		margin-top: 16px;
	}
</style>