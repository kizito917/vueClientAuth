<template>
  <div class="home">
    <h4>Login Page</h4>
    <h5><HelloWorld msg="Vue Client Authentication using VUEX and Local Storage"/></h5>
    <form v-on:submit.prevent="saveFormData">
      <div class="form-area">
        <div class="form-group">
          <input type="text" placeholder="enter username" v-model="username">
        </div><br>
        <div class="form-group">
          <input type="password" placeholder="Enter Password" v-model="password">
        </div><br>
        <div class="form-group">
          <input type="submit" value="Login">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { SAVE_FORM_DATA } from '../mutation-types'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
        username: '',
        password: ''
    }
  },
  computed: {
    storeName() {
        this.$store.getters.storeName
    }
  },
  methods : {
    saveFormData() {
      if (localStorage.getItem('userRegisteredData')) {
        this.$router.push('/about')
      } else {
        alert("Login details Doesn't exist")
      }
    }

  }
}
</script>
