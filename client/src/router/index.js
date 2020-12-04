import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Teachers from '../views/Teachers.vue';
import StudentsDetailsExams from '../views/StudentsDetailsExams';
import StudentsDetailsQuizzes from '../views/StudentsDetailsQuizzes';



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
      { // Qua ci andrebbe l'id singolo -> details_exams/:id
        path: 'details_exams',
        name: "students_details_exams",
        component: StudentsDetailsExams,
      },
      { // Qua ci andrebbe l'id singolo -> details_quizzes/:id
        path: 'details_quizzes',
        name: "students_details_quizzes",
        component: StudentsDetailsQuizzes,
      },
      {
        path: '',
        redirect: 'list'
      }
    ] 
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers,    
    children: [
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
