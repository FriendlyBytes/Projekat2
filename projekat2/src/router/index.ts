import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProduct from '@/views/CreateProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },{
      path: '/login',
      name: 'login',
      component: HomeView,
    },{
      path: '/register',
      name: 'register',
      component: HomeView,
    },{
      path: '/products',
      name: 'products',
      component: HomeView,
    },{
      path: '/',
      name: 'product',
      component: HomeView,
    },{
      path: '/createproduct',
      name: 'createproduct',
      component: CreateProduct,
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component:HomeView,
    },
  ],
})

export default router
