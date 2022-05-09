<template>
	<div class="v-login-wrapper">
		<div class="v-login">
			<form class="card auth-card">
				<div class="card-header">
					<span class="card-title">Autorization</span>
					<i  
						class="material-icons"
						@click="closeLogin"
					>
						close
					</i>
				</div>

				<div class="input-field">
					<input
						id="email"
						type="text"
						class="validate"
						placeholder="Email"
					>
				</div>
					<div class="input-field">
						<input
							id="password"
							type="password"
							class="validate"
							placeholder="Password"
						>
					</div>
				
				<div class="card-action">
					<div>
						<button
							class="btn-auth-submit"
							type="submit"
						>
							Login
							<i class="material-icons">send</i>
						</button>
					</div>
					<p class="center">
						Don't have an account?
						<button 
							class="v-login-show-register"
							@click="showRegistration"
						>
							Register
						</button>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-login",
		props: {},
		data() {
			return{}
		},
		methods: {
			closeLogin() {
				this.$emit('closeLogin')
			},
			showRegistration() {
				this.$emit('showRegistration')
			}
		}
	}
</script>

<style>
	.v-login-wrapper {
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

	.v-login {
		padding: 16px;
		position: fixed;
		top: 200px;
		margin-left: 10px;
		width: 400px;
		border-radius: 4px;
		background: #ffffff;
		box-shadow: 0 0 17px 0 #e0e0e0;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.card-title {
		margin-left: 160px;
	}

	.input-field {
		display: flex;
		justify-content: center;
		margin-bottom: 8px;
	}

	.btn-auth-submit {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #26ae68;
		color: #ffffff;
		border-radius: 4px;
		border: none;
	}
	.v-login-show-register {
		border: none;
		background: #26ae68;
		color: #ffffff;
		border-radius: 4px;
	}

	
</style>