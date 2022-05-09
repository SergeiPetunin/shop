<template>
	<div class="v-notification">
		<transition-group
			name="v-transiton-animate"
			class="messages-list"
		>
		<div
			class="v-notification-content"
			v-for="message in messages"
			:key="message.id"
			:class="message.icon"
			>
			<div class="content-text">
				<span>{{message.name}}</span>
				<i class="material-icons">{{message.icon}}</i>
			</div>

			<div class="content-buttons">
				<button v-if="leftButton.length">{{leftButton}}</button>
				<button v-if="rightButton.length">{{rightButton}}</button>
				
			</div>
		</div>
		</transition-group>
		
	</div>
</template>

<script>
	export default {
		name: "v-notification",
		props: {
			messages: {
				type: Array,
				default: () => {
					return []
				}
			},
			leftButton: {
				type: String,
				default: ''
			},
			rightButton: {
				type: String,
				default: ''
			},
			timeout: {
				type: Number,
				default: 3000
			}
		},
		data () {
			return {}
		},
		methods: {
			hideNotification() {
				let vm = this;
				if (this.messages.length) {
					setTimeout(function () {
						vm.messages.splice(vm.messages.length - 1, 1)
					}, vm.timeout)
				}
			}
		},
		watch: {
			messages() {
				this.hideNotification()
			}
		},
		mounted() {
			this.hideNotification()
		}
	}
</script>


<style>
	.v-notification {
		position: fixed;
		top: 80px;
		right: 16px;
		z-index: 10;
	}
	.v-notification-content {
		padding: 16px;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		margin-bottom: 16px;
		background-color: green;
		border-radius: 4px;
	}
	.v-notification-content.error {
		background-color: red;
	}
	.v-notification-content.warning {
		background-color: orange;
	}
	.v-notification-content.check_circle {
		background-color: green;
	}
	.content-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.messages-list {
		display: flex;
		flex-direction: column-reverse;
	}

	
</style>