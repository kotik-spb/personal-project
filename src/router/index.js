import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: Home,
  },
  {
    path: '/budget',
    name: 'budget',
    component: () => import('../views/Budget.vue'),
  },
  {
    path: '/weather',
    name: 'Weather-page',
    component: () => import('../views/Weather-page.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/Error.vue'),
  },
];

const router = new VueRouter({
  linkActiveClass: 'router--active',
  linkExactActiveClass: 'router--active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
