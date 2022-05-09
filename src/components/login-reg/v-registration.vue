<template>
	<div class="v-registration-wrapper">
		<div class="v-registration">
			<form class="card auth-card">
				<div class="card-header">
					<span class="card-title">Registration</span>
					<i  
						class="material-icons"
						@click="closeReg"
					>
						close
					</i>
				</div>
					<div class="input-field">
						<input
							id="email"
							type="text"
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
					<div class="input-field">
						<input
							id="name"
							type="text"
							class="validate"
							placeholder="Name"
						>
					</div>
					<p>
						<label>
							<input type="checkbox" />
							<span>I agree with the rules</span>
						</label>
					</p>
				
				<div class="card-action">
					<div>
						<button
							class="btn-auth-submit"
							type="submit"
						>
							Register
							<i class="material-icons">send</i>
						</button>
					</div>
					<p class="center">
						Already have an account?
						<button 
							class="v-login-show-login"
							@click="showLogin"
						>
							Sign in!
						</button>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
	export default {
		name: "v-registration",
		props: {},
		data() {
			return{}
		},
		methods: {
			showLogin() {
				this.$emit('showLogin')
			},
			closeReg() {
				this.$emit('closeReg')
			}
		}
	}
</script>


<style>
	.v-registration-wrapper {
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

	.v-registration {
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

	.v-login-show-login {
		border: none;
		background: #26ae68;
		color: #ffffff;
		border-radius: 4px;
	}

</style>