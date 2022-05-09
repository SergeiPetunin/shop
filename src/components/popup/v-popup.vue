<template>
	<div class="popup-wrapper" ref="popup_wrapper">
		<div class="v-popup">
			<div class="v-popup-header">
				<span>{{popupTitle}}</span>
				<i  
					class="material-icons"
					@click="closePopup"
				>
					close
				</i>
			</div>

			<div class="v-popup-content">
				<slot></slot>
			</div>

			<div class="v-popup-footer">
				<button class="close_modal" @click="closePopup">Close</button>

				<button
					class="submite_btn"
					@click="rightBtnAction"
				>
					{{rigthBtnTitle}}
				</button>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		name: "v-popup",
		props: {
			popupTitle: {
				type: String,
				default: 'Popup name'
			},
			rigthBtnTitle: {
				type: String,
				default: 'Ok'
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {
			rightBtnAction() {
				this.$emit('rightBtnAction')
			},
			closePopup() {
				this.$emit('closePopup')
			}
		},
		mounted() {
			let vm = this;
			document.addEventListener('click', function (item) {
				if (item.target === vm.$refs['popup_wrapper']) {
					vm.closePopup()
				}
			})
		}
	}
</script>

<style>
	.popup-wrapper {
		background: rgba(64,64,64, .4);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 3;
	}

	.v-popup {
		padding: 16px;
		position: fixed;
		top: 100px;
		margin-left: 10px;
		width: 400px;
		border-radius: 4px;
		background: #ffffff;
		box-shadow: 0 0 17px 0 #e0e0e0;
	}

	.v-popup-header, .v-popup-footer{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}

	.v-popup-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.submite_btn {
		border-radius: 4px;
		padding: 8px;
		color: #ffffff;
		background: #26ae68;
	}

	.close_modal {
		border-radius: 4px;
		padding: 8px;
		color: #ffffff;
		background: red;
	}

	
</style>