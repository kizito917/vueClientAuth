<template>
  <div class="about">
    <h3>{{ registerTitle }}</h3>
    <form v-on:submit.prevent="registerUser">
    	<div class="form-area">
    		<div class="form-group">
    			<label>Name:</label>
    			<input type="text" name="" v-model="name" placeholder="Enter Name">
    		</div><br>
    		<div class="form-group">
    			<label>Email Address:</label>
    			<input type="email" name="" v-model="emailAddress" placeholder="Enter Email Address">
    		</div><br>
    		<div class="form-group">
    			<label>Password:</label>
    			<input type="password" name="" v-model="password" placeholder="Choose Password">
    		</div><br>
    		<div class="form-group">
    			<label>Confirm Password:</label>
    			<input type="password" name="" v-model="confirmPassword" placeholder="Confirm Password">
    		</div><br>
    		<div class="form-group">
    			<input type="submit" value="Register Account">
    		</div><br>
    	</div>
    </form>
  </div>
</template>


<script>
	// import { REGISTER_USER } from '../mutation-types' 
	export default {
		name: 'register',
		data() {
			return {
				registerTitle: this.$store.state.registerTitle,
				name: '',
				emailAddress: '',
				password: '',
				confirmPassword: ''
			}
		},
		methods: {
			registerUser () {
				const data = [
						{gottenName: this.name,
						gottenEmail: this.emailAddress,
						gottenPassword: this.password,
						gottenConfirmPassword: this.confirmPassword
						}]

						if (data[0].gottenPassword == data[0].gottenConfirmPassword) {
							localStorage.setItem('userRegisteredData', JSON.stringify({gottenName: this.name, 
																				gottenEmail: this.emailAddress,
																				gottenPassword: this.password,
																				gottenConfirmPassword: this.confirmPassword
																			}))
							this.$router.push('/')
						} else {
							alert('incorrect password combination!!!, please type passwords correctly')
						}
			}
		}
	}
</script>