import { createStore } from 'vuex';
import axios from 'axios';

const state = {
  userPosts: []
}

const mutations = {
  setUserPosts(state, posts) {
    state.userPosts = posts
  }
}

const actions = {
  async fetchUserPosts({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('setUserPosts', response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

const getters = {
  getUserPosts(state) {
    return state.userPosts
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})