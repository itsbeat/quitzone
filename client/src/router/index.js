import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';

import Students from '../views/Students.vue';
import StudentsAdd from '../views/StudentsAdd.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';


import Classrooms from '../views/Classrooms.vue';
import ClassroomsView from '../views/ClassroomsView.vue';
import ClassroomsList from '../views/ClassroomsList.vue';
import ClassroomsAdd from '../views/ClassroomsAdd.vue';
import ClassroomsEdit from '../views/ClassroomsEdit.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    name: "main",
    path: "/",
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta:{
          label: "Home",
        }
      },
      {
        path: 'students',
        name: 'students',
        component: Students,
        meta: {
          label: "Studenti",
        },
        children: [
          {
            path: 'add',
            name: 'students_add',
            component: StudentsAdd,
          },
          {
            path: 'edit/:id',
            name: 'students_edit',
            component: StudentsEdit,
          },
          {
            path: '',
            redirect: 'list'
          }
        ]
      },
      {
        path: 'esami',
        name: 'Esami',
        component: StudentsEdit,
        meta:{
          label: "Esami",
        }
      },
      {
        path: 'classrooms',
        name: 'classrooms',
        component: Classrooms,
        meta: {
          label: "Classi",
        },
        children: [
          {
            path: 'list',
            name: "classrooms_list",
            component: ClassroomsList,
          },
          {
            path: 'view/:id',
            name: "classrooms_view",
            component: ClassroomsView,
          },
          {
            path: 'add',
            name: 'classrooms_add',
            component: ClassroomsAdd,
          },
          {
            path: 'edit/:id',
            name: 'classrooms_edit',
            component: ClassroomsEdit,
          },
          {
            path: '',
            redirect: 'list'
          }
        ]
      },
      {
        path: '',
        redirect: 'home'
      },
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
