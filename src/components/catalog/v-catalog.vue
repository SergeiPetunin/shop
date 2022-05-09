<template>
	<div class="v-catalog">

		<v-notification
			:messages="messages"
		/>

		<router-link :to="{name: 'cart',params: {cart_data:CART}}">
			<div class="v-catalog-link_to_cart">Cart: {{CART.length}}</div>
		</router-link>

		<h1>Catalog</h1>
		<button 
			@click="toggleElement()"
			class="hide-show-btn" 
		>
			Show/Hide Filters
		</button>
		<div
			class="filters"
			v-show="isElVisible"
		>

			<v-category-select
				:selected="selected"
				:options="categories"
				@select="sortByCategories"
				:isExpanded="IS_DESKTOP"
			/>

			<div class="range-slider">

				<input
					type="range"
					min="0"
					max="500"
					step="10"
					v-model.number="minPrice"
					@change="setRangeSliders"
				>

				<input
					type="range"
					min="0"
					max="500"
					step="10"
					v-model.number="maxPrice"
					@change="setRangeSliders"
				>

			</div>

			<div class="range-values">
				<p>Price Min: {{minPrice}}</p>
				<p>Price Max: {{maxPrice}}</p>
			</div>
		</div>

		<div class="v-catalog-list">
			<v-catalog-item
				v-for="product in filterPPRODUCTS"
				:key="product.article"
				:product_data="product"
				@addToCart="addToCart"
			/>
		</div>

	</div>
</template>


<script>
	
	import vCatalogItem from './v-catalog-item'
	import {mapActions, mapGetters} from 'vuex'
	import vCategorySelect from '../category/v-category-select'
	import vNotification from '../notifications/v-notification'

	export default {
		name: "v-catalog",
		components: {
			vCatalogItem,
			vCategorySelect,
			vNotification
		},
		props: {},
		data() {
			return {
				categories: [
					{name: 'Все', value: 'ALL'},
					{name: 'Мужские', value: 'м'},
					{name: 'Женские', value: 'ж'}
					
				],
				selected: 'Все',
				sortedProducts: [],
				minPrice: 0,
				maxPrice: 500,
				messages: [],
				isElVisible: false
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS',
				'CART',
				'IS_DESKTOP',
				'IS_MOBILE',
				'SEARCH_VALUE'
			]),
			filterPPRODUCTS() {
				if (this.sortedProducts.length) {
					return this.sortedProducts
				} else {
					return this.PRODUCTS
				}
			}
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			toggleElement() {
				this.isElVisible = !this.isElVisible
			},
			setRangeSliders(){
				if (this.minPrice > this.maxPrice) {
					let tmp = this.maxPrice;
					this.maxPrice = this.minPrice;
					this.minPrice = tmp;
				}
				this.sortByCategories()
			},
			sortByCategories(category) {
				let vm = this;
				this.sortedProducts = [...this.PRODUCTS]
				this.sortedProducts = this.sortedProducts.filter(function (item) {
					return item.price >= vm.minPrice && item.price <= vm.maxPrice
				})
				if (category) {
					this.sortedProducts = this.sortedProducts.filter(function (e) {
						vm.selected = category.name;
						return e.category === category.name
					})
				}
			},
			addToCart(data) {
				this.ADD_TO_CART(data)
				.then(() => {
					let timeStamp = Date.now().toLocaleString();
					this.messages.unshift(
							{name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
						)
				})
			},
			sortProductsBySeachValue(value) {
				this.sortedProducts = [...this.PRODUCTS]
				if (value) {
					this.sortedProducts = this.sortedProducts.filter(function (item) {
						return item.name.toLowerCase().includes(value.toLowerCase())
					})
				} else {
					this.sortedProducts = this.PRODUCTS;
				}
				
			}
		},
		watch:{
			SEARCH_VALUE() {
				this.sortProductsBySeachValue(this.SEARCH_VALUE);
			}
		},
		mounted() {
			this.GET_PRODUCTS_FROM_API()
			.then((response) => {
				if (response.data) {
					console.log('Data arrived!')
					this.sortByCategories()
					this.sortProductsBySeachValue(this.SEARCH_VALUE)
				}
			})
		}
	}

</script>


<style>
	.filters {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.range-slider {
		width: 200px;
		text-align: center;
		position: relative;
	}

	.range-slider svg, .range-slider input[type=range] {
		position: absolute;
		left: 0;
		bottom: 10;
	}

	input[type=range]::-webkit-slider-thumb {
		z-index: 2;
		position: relative;
		top: 2px;
		margin-top: -5px;
	}

	.v-catalog {
		width: 75%;
		margin: 0 auto;
	}

	.v-catalog-link_to_cart {
		position: fixed;
		top: 100px;
		right: 10px;
		padding: 16px;
		border-radius: 4px;
		background: #26ae68;
		color: #ffffff;
		z-index: 7;
	}

	.v-catalog-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin-top: 50px;
	}

	.hide-show-btn {
		border: none;
		background: #26ae68;
		color: #ffffff;
		border-radius: 4px;
	}
	

</style>