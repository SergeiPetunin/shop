<template>
	<div class="v-carousel-item">
		<img :src=" require('../../assets/images/' + item_data.img) " alt="">
		
		<div class="v-carousel-item-content">
			<slot></slot>   <!--получаем из карусели данные -->
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "v-carousel-item",
		props: {
			item_data: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		},
		computed: {}
	}
</script>

<style>
	.v-carousel-item img {
		height: 300px;
		width: 230px;
	}
	.v-carousel-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
</style>