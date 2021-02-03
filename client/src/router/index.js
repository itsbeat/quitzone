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
    component: Home,
    meta:{
      label: "Home",
    }
  },
  {
    path: '/students',
    name: 'students',
    component: Students,
    meta: {
      requiresAuth: true,
      roles: ['teacher', 'admin', 'superadmin'],
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/esami',
    name: 'Esami',
    component: StudentsEdit,
    meta:{
      label: "Esami",
    }
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

// Auth based guard
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    // if route requires auth
    if (localStorage.getItem('user')) {
      
      // if user is logged in
      console.log('auth: OK, vai pure')
      next()

    } else {
      // if user is not logged in
      console.log('auth: NO, rilogga')

      router.push('/login');
      next(false);
    }
  } else {
    next();
  }
});

// Role based guard
router.beforeEach((to, from, next) => {

  // Check if there are any meta data inside parent's routes
  if (to.matched.some(record => record.meta.roles)) {

    // console.log('you tried to enter in a role-based route: ',to.fullPath)
    var user = localStorage.getItem('user');


    // user check is required in the case requiresAuth is not defined 
    if (!user) {
      router.push('/login')
      next(false)
    } else {
      var roleHolder = null

      // Get the last route role guard
      for (var i in to.matched) {
        var path = to.matched[i]

        if (path.meta && path.meta.roles) {
          roleHolder = path.meta.roles
        }
      }

      if (roleHolder != null && user != null) {

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
    }

      
    } else {
      console.log('this is a open route');
      next()
    }
  })

export default router
