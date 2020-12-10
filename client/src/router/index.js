import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      avaiableTo: 'any',
    },
  },
  {
    path: '/students',
    name: 'students',
    component: Students,
    meta: {
      avaiableTo: 'teacher',
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
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      avaiableTo: 'any',
    },
  },
  {
    path: '*',
    redirect: 'home',
    meta: {
      avaiableTo: 'any',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if(to.matched[0].meta.avaiableTo === 'any'){
    console.log('ALLOWED!')
    next();
  } else {
    console.log(to.name + ' ==> ACCES DENIED, this page is not public');
    next({name: 'Home'});
  }
  
})

export default router
