import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';


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
