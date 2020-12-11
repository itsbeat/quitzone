import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Login from '../views/Login.vue';

<<<<<<< HEAD
import Its from  '../views/Its.vue'
import ItsView from '../views/ItsView.vue';
import ItsList from '../views/ItsList.vue';
import ItsCreate from '../views/ItsCreate.vue';
import Esame from '../views/Esame.vue';

=======
>>>>>>> master

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
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '*',
    redirect: 'home'
  },
  {
    path: '/esame',
    name: 'esame',
    component: Esame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
