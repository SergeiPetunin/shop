<template>
	<div class="v-carousel-wrapper">
		<router-link 
			:to="{name: 'catalog'}"
			class="routerLink"
		>
			<div
				class="v-carousel" 
				:style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
			>
			
			<v-carousel-item
				v-for="item in carousel_data"
				:key="item.id"
				:item_data="item"
			>	
				<h1>New product</h1>     <!--передаём через slot который в итем -->
			</v-carousel-item>
			</div>
		</router-link>
		<div class="v-carousel-buttons">

			<button>
				<i
					class="material-icons"
					@click="previosSlide"
				>
					arrow_back_ios
				</i>
			</button>

			<button>	
				<i 
					class="material-icons"
					@click="nextSlide"
				>
					arrow_forward_ios
				</i>
			</button>
		</div>
	</div>
</template>

<script>
	import vCarouselItem from './v-carousel-item'

	export default {
		name: "v-carousel",
		components: {
			vCarouselItem
		},
		props: {
			carousel_data: {
				type: Array,
				default: () => []
			},
			interval: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				currentSlideIndex: 0
			}
		},
		methods: {
			previosSlide() {
				if (this.currentSlideIndex > 0) {
					this.currentSlideIndex--
				}
			},
			nextSlide() {
				if (this.currentSlideIndex >= this.carousel_data.length -1) {
					this.currentSlideIndex = 0
				} else {
					this.currentSlideIndex++
				}
				
			}
		},
		mounted() {
			if (this.interval > 0) {
				let vm = this;
				setInterval(function () {
					vm.nextSlide()
				}, vm.interval)
			}
		}
	}
</script>

<style>
	.v-carousel-wrapper {
		width: 230px;
		overflow: hidden;

	}
	.v-carousel {
		display: flex;
		transition: all ease .5s;
		
	}

	.v-carousel-buttons {
		display: flex;
		justify-content: space-between;

	}
	.v-carousel-buttons button {
		border: none;
		background: #ffffff;
	}
	.routerLink {
		text-decoration: none;
	}
	
</style>