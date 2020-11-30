import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';

import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';

import Classrooms from '../views/Classrooms.vue';
import ClassroomsView from '../views/ClassroomsView.vue';
import ClassroomsList from '../views/ClassroomsList.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'students',
    component: Students,    
    children: [
      {
        path: 'list',
        name: "students_list",
        component: StudentsList,
      },
      {
        path: 'create',
        name: 'students_create',
        component: StudentsCreate,
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
    path: '/classrooms',
    name: 'classrooms',
    component: Classrooms,    
    children: [
      {
        path: 'list',
        name: "classrooms_list",
        component: ClassroomsList,
      },
      {
        path: ':id',
        name: "classrooms_view",
        component: ClassroomsView,
      },
      // {
      //   path: 'create',
      //   name: 'classrooms_create',
      //   component: ClassroomsCreate,
      // },
      {
        path: '',
        redirect: 'list'
      }
    ] 
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
