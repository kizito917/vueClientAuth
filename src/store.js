import Vue from 'vue'
import Vuex from 'vuex'
import { SAVE_FORM_DATA, REGISTER_USER } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	names: ['Adebayo', 'Kizito', 'Demola'],
  	username: 'kizito917',
  	email: 'johnkingsley917@gmail.com',
  	registerTitle: 'Register an account'
  }, 
  getters: {
  	storeName: (state) => {
  		return console.log(state.username)
  	}
  },
  mutations: {
  	[SAVE_FORM_DATA] (state) {
  		console.log('name: ' + state.username + ' email: ' + state.email)
  		localStorage.setItem('userdata', JSON.stringify({username: state.username , email: state.email}))
  		state.username = '',
  		state.email = ''
  	}
  }
})

// store.commit('increment')
// console.log(store.state.count)
