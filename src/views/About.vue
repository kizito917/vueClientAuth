<template>
  <div class="about">
    <h1>Welcome to the authenticated page</h1>
    <button v-on:click="logUserOut">logout</button>
    <ul>
    	<li v-for="data in fetchedData">{{ data }}</li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: 'dashboard',
		data() {
			return {
				username: '',
				fetchedData: []
			}
		},
		methods: {
			logUserOut() {
				localStorage.removeItem('userRegisteredData')
				this.$router.push('/')
			}
		},
		created() {
			const gottenData = localStorage.getItem('userRegisteredData')
			this.fetchedData = gottenData.gottenName
			// console.log(gottenData.gottenName)
		}
	}
</script>
