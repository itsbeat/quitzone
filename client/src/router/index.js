import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';



Vue.use(VueRouter)

const routes = [
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
      path: 'esami',
      name: 'Esami',
      component: StudentsEdit,
      meta:{
        label: "Esami",
      }
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
