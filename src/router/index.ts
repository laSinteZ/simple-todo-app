import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

  ]
})

router.beforeEach((to, _from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('username')) next({ name: 'login' });
  else next();
});

export default router
