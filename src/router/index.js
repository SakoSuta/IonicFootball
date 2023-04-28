import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LiguesPage from '../views/LiguesPage.vue';
import ClubsPage from '../views/ClubsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ligues/:id(\\d+)',
    name: 'Ligues',
    component: LiguesPage
  },
  {
    path: '/clubs/:id',
    name: 'Clubs',
    component: ClubsPage
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
