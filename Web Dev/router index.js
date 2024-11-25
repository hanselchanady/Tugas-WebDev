import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: {
      template: '<h2>Dashboard</h2>'
    },
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/');
      }
    }
  }
];

export default new Router({
  mode: 'history',
  routes
});