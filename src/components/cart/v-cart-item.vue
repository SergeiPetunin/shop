<template>
	<div class="v-cart-item">
		<img class="v-cart-item-image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="img">
		<div class="v-cart-item-info">
			<p>{{cart_item_data.name}}</p>
			<p>{{cart_item_data.price}}</p>
			<p>{{cart_item_data.article}}</p>
		</div>
		<div class="v-cart-item_quantity">
			<p>Qty: </p>
			<span>
				<span class="quantity-btn" @click="decrementItem">-</span>
				{{cart_item_data.quantity}}
				<span class="quantity-btn" @click="incrementItem">+</span>
			</span>
		</div>
		<button @click="deleteFromCart">Delete</button>
	</div>
</template>

<script>
	export default {
		name: "v-cart-item",
		props: {
			cart_item_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return{}
		},
		computed: {},
		methods: {
			decrementItem() {
				this.$emit('decrement')
			},
			incrementItem() {
				this.$emit('increment')
			},
			deleteFromCart() {
				this.$emit('deleteFromCart')
			}
		}
	}
</script>

<style>
	.v-cart-item {
		display: flex;
		flex-wrap: nowrap;
		justify-content:space-between;
		align-items: center;	
		box-shadow: 0 0 8px 0 #e0e0e0;
		border-radius: 4px;
		padding: 16px;
		margin-bottom: 16px;
	}
	.v-cart-item-image {
		max-width: 50px;
	}
	.quantity-btn {
		cursor: pointer;
	}
	
</style>