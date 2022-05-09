<template>
	<div class="v-header">
		<v-login 
			v-if="isLoginVisible"
			@closeLogin="closeLoginCart"
			@showRegistration="showRegistrationCart"
		/>

		<v-registration 
			v-if="isRegistrationVisible"
			@closeReg="closeRegCart"
			@showLogin="showLoginCart"
		/>

		<router-link 
			:to="{name: 'mainPage'}"
			class="router-link"
		>
			<div class="v-header-links">
				<img src="../../assets/logo.png" title="to Main">
				<h3> to Main</h3>
			</div>
		</router-link>
		
		<div class="search-field">
			<input
				type="text"
				v-model="searchValue"
			>
			<button class="search-btn">
				<i
					class="material-icons"
					@click="search(searchValue)"
				>
					search
				</i>
			</button>
			<button  class="search-btn">
				<i
					class="material-icons"
					@click="clearSearchField"
				>
					cancel
				</i>
			</button>
			
		</div>

		<div 
			class="login-wrapper"
			
		>
			<button 
				class="v-header-showLogin"
				@click="showLogin"
			>
				<i class="material-icons">login</i>
					<p>LogIn/Registration</p>
			</button>
		</div>

	</div>
</template>

<script>
	import vLogin from '../login-reg/v-login'
	import vRegistration from '../login-reg/v-registration'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "v-header",
		components: {
			vLogin,
			vRegistration
		},
		props: {},
		data() {
			return {
				searchValue: '',
				isLoginVisible: false,
				isRegistrationVisible: false
			}
		},
		computed: {
			...mapGetters ([
			'SEARCH_VALUE'
			])
		},
		methods: {
			...mapActions ([
				'GET_SEARCH_VALUE_TO_VUEX'
			]),
			showLoginCart() {
				this.isRegistrationVisible = false;
				this.isLoginVisible = true;
			},
			showRegistrationCart() {
				this.isRegistrationVisible = true;
				this.isLoginVisible = false;
			},
			showLogin() {
				this.isLoginVisible = true;
			},
			closeRegCart() {
				this.isRegistrationVisible = false;
			},
			closeLoginCart() {
				this.isLoginVisible = false;
			},
			search(value) {
				this.GET_SEARCH_VALUE_TO_VUEX(value);
				if (this.$route.path !== '/catalog') {
					this.$router.push('/catalog')
				}
			},
			clearSearchField() {
				this.searchValue = '';
				this.GET_SEARCH_VALUE_TO_VUEX();
				if (this.$route.path !== '/catalog') {
					this.$router.push('/catalog')
				}
			}
		}
		
	}
</script>

<style>
	.v-header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #26ae68;
		padding: 16px;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 6;
	}
	.v-header img {
		width: 60px;
	}
	.v-header-links{
		display: flex;
	}
	.v-header-links h3{
		color: white;
	}
	.router-link {
		text-decoration: none;
	}
	.search-field {
		padding: 16xp;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search-btn {
		margin-left: 16px;
		background: transparent;
		border: none;

	}

	.login-wrapper button {
		background: none;
		display: flex;
		align-items: center;
		
	}

	.v-header-showLogin {
		border: none;
	}
	.v-header-showLogin p {
		color: white;
	}
	.material-icons {
		color: white;
		background: #26ae68;
		border-radius: 4px;
	}


</style>