import { createStore } from 'vuex';
import axios from 'axios';

const state = {
  userPosts: [],
  userAlbums: []
}

const mutations = {
  setUserPosts(state, posts) {
    state.userPosts = posts
  },
  setUserAlbums(state, albums) {
    state.userAlbums = albums
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
  },
  async fetchUserAlbums({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      commit('setUserAlbums', response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

const getters = {
  getUserPosts(state) {
    return state.userPosts
  },
  getUserAlbums(state) {
    return state.userAlbums
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})