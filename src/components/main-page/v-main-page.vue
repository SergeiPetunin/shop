<template>
	<div class="v-main-page">
		<h1>Online-shop</h1>
		<p>
			<router-link :to="{name: 'catalog'}">
				to Catalog
			</router-link>
		</p>
		<div class="v-main-carousel">
			<v-carousel
				:carousel_data="sliderItems"
				:interval="2000"
			/>
		</div>
	</div>
</template>

<script>
	import vCarousel from '../carousel/v-carousel'

	export default {
		name: "v-main-page",
		components: {
			vCarousel
		},
		props: {},
		data() {
			return {
				sliderItems: [
				{ id: 1, name: 'img1', img: '1.jpg'},
				{ id: 2, name: 'img2', img: '2.jpg'},
				{ id: 3, name: 'img3', img: '3.jpg'},
				{ id: 4, name: 'img4', img: '4.jpg'},
				{ id: 5, name: 'img5', img: '5.jpg'},
				]
			}
		},
		computed: {}
	}
</script>

<style>
	.v-main-page {
		display: flex;
		flex-direction: column;
		align-items: center;

	}
</style>