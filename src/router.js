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
    path: '/posts/:userId/:username',
    name: 'UserPosts',
    component: UserPosts,
    props: (route) => ({ userId: route.params.userId, username: route.params.username })
  },  
  {
    path: '/albums/:userId/:username',
    name: 'UserAlbums',
    component: UserAlbums,
    props: (route) => ({ userId: route.params.userId, username: route.params.username })
  }
]

const router = createRouter({
  history: createWebHistory('/social-network/'),
  routes
})

export default router