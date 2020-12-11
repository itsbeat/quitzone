import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import StudentRegister from '../views/StudentRegister.vue';
import Students from '../views/Students.vue';
import StudentsCreate from '../views/StudentsCreate.vue';
import StudentsList from '../views/StudentsList.vue';
import StudentsEdit from '../views/StudentsEdit.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';


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
    meta: {
      requiresAuth: true,
      roles: ['teacher', 'admin', 'superadmin'],
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
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
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

// Role based auth
  router.beforeEach((to, from, next) => {

    // Check if there are any meta data inside parent's routes
    if (to.matched.some(record => record.meta.roles)) {

      console.log('you tried to enter in a role-based route')
      var user = localStorage.getItem('user');

      if (!user) {
        router.push('/login')
        next(false)
      }

      var roleHolder = null

      // Get the last route role guard
      for (var i in to.matched) {
        var path = to.matched[i]

        if (path.meta && path.meta.roles) {
          roleHolder = path.meta.roles
        }
      }

      if (roleHolder != null && user != null) {
        // TODO: move this where we can access the Vue instance
        let userRole;

        let userHasRole = roleHolder.indexOf(userRole) != -1

        if (userHasRole) {
          next()
        } else {
          router.push('/login')
          next(false)
        }
      } else {
      // If no roles are provided, simply let the user in
        next()
      }
    } else {
      console.log('this is a open route');
      next()
    }
  })

export default router
