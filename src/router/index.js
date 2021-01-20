/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/* components */
import Base from '../views/Base/Base.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';
import Dashboard from '../views/Dashboard/Dashboard.vue';
import Realtime from '../views/Realtime/Realtime.vue';
import Settings from '../views/Settings/index.vue';

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/realtime',
        name: 'Realtime',
        component: Realtime,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.SERVER_BASE_URL,
  routes,
});
