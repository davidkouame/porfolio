import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Porfolio from '@/views/Porfolio.vue'
import PorfolioDetail from '@/views/PorfolioDetail.vue'
import Services from '@/views/Services.vue'
import Resume from '@/views/Resume.vue'
import Contacts from '@/views/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/porfolio',
      name: 'porfolio',
      component: Porfolio
    },
    {
      path: '/porfolio/1',
      name: 'porfolio-detail',
      component: PorfolioDetail
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ],
})

export default router
