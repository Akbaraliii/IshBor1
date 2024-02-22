import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/ProductsView.vue'
import LoginView from '@/views/ContactView.vue'
import FamousOnes from '@/views/FamousOnes.vue'
import AboutCompany from '@/views/AboutCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/famous',
      name: 'famousOnes',
      component: FamousOnes
    },
    {
      path: '/about',
      name: 'aboutCompany',
      component: AboutCompany
    }
  ]
})

export default router
