import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllList from "../views/myList/AllList.vue";
import EveryList from "../views/AllList/EveryList.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/alllist',
      name: 'alllist',
      component: AllList
    },
    {
      path: '/everylist',
      name: 'everylist',
      component: EveryList
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('vueAuth') == 'true') {
          next();
        }else{
          next('loginpage');
        }
      }
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: LoginPage
    }
  ]
})

export default router
