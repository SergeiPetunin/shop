<template>
	<div class="v-category-select">
		<p
			class="title"
			@click="areOptionsVisible = !areOptionsVisible"
		>
			{{selected}}
		</p>
		<div 
			class="options"
			v-if="areOptionsVisible"
			
		>
			<p 
				v-for="option in options"
				:key="options.value"
				@click="selectOption(option)"
			>
				{{option.name}}
			</p>
		</div>
	</div>
</template>


<script>
	export default {
		name: "v-category-select",
		props: {
			options: {
				type: Array,
				default() {
					return []
				}
			},
			selected: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				areOptionsVisible: false
			}
		},
		methods: {
			selectOption(option) {
				this.$emit('select', option)
				this.areOptionsVisible = false
			},
			hideSelect() {
				this.areOptionsVisible = false
			}
		},
		mounted() {
			document.addEventListener('click', this.hideSelect.bind(this), true)
		},
		beforeDestroy() {
			document.removeEventListener('click', this.hideSelect)
		}
	}
</script>


<style>
	.v-category-select {
		

	}
	.v-category-select p {
		cursor: pointer;
	}
	.title {
		border: solid 1px #aeaeae;
		border-radius: 4px;
		width: 130px;
		padding: 8px;
		
		background: #26ae68;
		color: #ffffff;
	}
	.options {
		border: solid 1px #aeaeae;
		border-radius: 4px;
		width: 130px;
		padding: 8px;
		
	}
	.options p:hover {
		background: #e7e7e7;
	}


</style>
