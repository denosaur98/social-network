import { createRouter, createWebHistory } from 'vue-router';
import UsersList from './components/UsersList.vue';
import UserPosts from './components/UserPosts.vue';
import UserAlbums from './components/UserAlbums.vue';

const routes = [
  {
    path: '/',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/posts/:username',
    name: 'UserPosts',
    component: UserPosts
  },
  {
    path: '/albums/:username',
    name: 'UserAlbums',
    component: UserAlbums
  }
]

const router = createRouter({
  history: createWebHistory('/social-network/'),
  routes
})

export default router
