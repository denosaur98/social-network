import { createRouter, createWebHistory } from 'vue-router'
import UserPage from './components/UserPage'
const routes = [
  {
    path: '/:username',
    name: 'UserPage',
    component: UserPage
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router