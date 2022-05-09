<template>
	<div class="v-catalog-item">

		<v-popup
			:popupTitle="product_data.name"
			v-if="isInfoPopupVisible"
			rigthBtnTitle="Add to cart"
			@closePopup="closeInfoPopup"
			@rightBtnAction="addToCart"

		>
			<img class="v-catalog-item_image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
			<div>
				<p class="v-catalog-item_name">{{product_data.name}}</p>
				<p class="v-catalog-item_price">Price: {{product_data.price}}  $.</p>
				<p class="v-catalog-item_category">Category: {{product_data.category}}</p>
			</div>
		</v-popup>
			
		


		<img class="v-catalog-item_image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
		<p class="v-catalog-item_name">{{product_data.name}}</p>
		<p class="v-catalog-item_price">Price: {{product_data.price}}  $.</p>

		<div class="v-catalog-item-buttons">
			<button
				class="v-catalog-item-show-info"
				@click="showPopupInfo"
			>
				Show info
			</button>

			<button 
				class="v-catalog-item_add_to_cart_btn"
				@click="addToCart"
			>
				Add to cart
			</button>
		</div>
	</div>
</template>


<script>
	import vPopup from '../popup/v-popup'

	export default {
		name: "v-catalog-item",
		components: {
			vPopup
		},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				isInfoPopupVisible: false
			}
		},
		computed: {},
		methods: {
			showPopupInfo () {
				this.isInfoPopupVisible = true
			},
			closeInfoPopup () {
				this.isInfoPopupVisible = false
			},
			addToCart() {
				this.$emit('addToCart',this.product_data)
			}
		},
		mounted() {
			this.$set(this.product_data, 'quantity', 1)
		}
	}

</script>


<style>
	.v-catalog-item {
		flex-basis: 25%;
		box-shadow: 0 0 8px 0 #e0e0e0;
		border-radius: 4px;
		padding: 16px;
		margin-bottom: 16px;
	}
	.v-catalog-item_image {
		width: 120px;
		height: 150px;
	}

	.v-catalog-item-buttons {
		display: flex;
		flex-direction: column;

	}

	.v-catalog-item_add_to_cart_btn {
		padding: 8px 16px;
		background: #26ae68;
		color: #ffffff;
		border-radius: 4px;
		border: none;
	}
</style>