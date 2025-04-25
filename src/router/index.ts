import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Porfolio from '@/views/Porfolio.vue'
import PorfolioDetail from '@/views/PorfolioDetail.vue'
import Services from '@/views/Services.vue'
import Resume from '@/views/Resume.vue'
import Contacts from '@/views/Contacts.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/portfolio/:id',
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  }
})

export default router
