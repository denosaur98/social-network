import { createRouter, createWebHistory } from 'vue-router'
import UserPage from './components/UserPage'
const routes = [
  {
    path: '/:username',
    name: 'UserPage',
    component: UserPage
  }
]
const router = createRouter({
  history: createWebHistory('/social-network/'),
  routes
})
export default router