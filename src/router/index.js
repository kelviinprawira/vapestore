import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/service',
      name: 'about',
      component: ServiceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }

  ]
})

export default router
