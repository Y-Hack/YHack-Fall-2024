import { createRouter, createWebHistory } from 'vue-router'
import YaleHacks from '../views/YaleHacks.vue'
import ApplyHacks from '../views/ApplyHacks.vue'
import TeamPage from '../views/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: YaleHacks
    },
    {
      path: '/apply',
      name: 'apply',
      component: ApplyHacks
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    }
  ]
})

export default router
