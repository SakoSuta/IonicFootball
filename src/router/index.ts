import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LiguesPage from '../views/LiguesPage.vue';
import ClubsPage from '../views/ClubsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },


  {
    path: '/ligues/:id',
    redirect: '/ligues/:id'
  },
  {
    path: '/ligues/:id',
    name: 'Ligues',
    component: LiguesPage
  },


  {
    path: '/clubs/:id',
    redirect: '/clubs/:id'
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
