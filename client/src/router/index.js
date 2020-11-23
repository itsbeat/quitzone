import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Its from  '../views/Its.vue'
import ItsView from '../views/ItsView.vue';
import ItsList from '../views/ItsList.vue';
import ItsCreate from '../views/ItsCreate.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/its',
    name: 'ITS',
    component: Its,
    children: [
      {
        path: 'list',
        name: "its_list",
        component: ItsList,
      },
      {
        path: 'view/:id',
        name: 'its_view',
        component: ItsView,
      },
      {
        path: 'create',
        name: 'its_create',
        component: ItsCreate,
      },
      {
        path: '',
        redirect: 'list'
      }
    ]
  },
  {
    path: '',
    redirect: 'about'
  },
  {
    path: '*',
    redirect: 'home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
