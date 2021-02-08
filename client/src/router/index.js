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
import Main from '../views/Main.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:
        {
          label: "Home",
          requiresAuth: false,
        }
      },
      {
        path: '/students',
        name: 'students',
        component: Students,
        meta: {
          label: "Studenti",
          requiresAuth: true,
          roles: ['admin', 'student']
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
        path: '',
        redirect: 'home'
      },
      {
        path: 'esami',
        name: 'Esami',
        component: StudentsEdit,
        meta:{
          label: "Esami",
          requiresAuth: true,
          roles: ['admin', 'teacher', 'student']
        }
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

// Auth based guard
router.beforeEach((to, from, next) => {


  if (to.matched.some(record => record.meta.requiresAuth)) {

    // if route requires auth
    if (localStorage.getItem('user')) {
      
      // if user is logged in
      // console.log('auth: OK, vai pure')
      next()

    } else {
      // if user is not logged in
      // console.log('auth: NO, rilogga')

      router.push({
        name: 'Login',
        query: {
          redirect: to.path,
        }
      });
      next(false);
    }
  } else {
    next();
  }
});

// Role based guard middleware
router.beforeEach((to, from, next) => {

  // Check if there are any meta data inside parent's routes
  if (to.matched.some(record => record.meta.roles)) {
    console.log('ROLES TO CHECK');

    var user = JSON.parse(localStorage.getItem('user'));


    // user check is required in the case requiresAuth is not defined 
    if (!user) {

      // redirect user to login and set the redirect to to.path
      router.push({
        name: 'Login',
        query: {
          redirect: to.path,
        }
      });
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

        let userRole = user.role_id;


        switch(userRole) {
          case 0: userRole = 'admin'; break;
          case 1: userRole = 'student'; break;
          case 2: userRole = 'teacher'; break;
          default: next(false);
        }

        let userHasRole = roleHolder.indexOf(userRole) != -1;

        if (userHasRole) {

          next();

        } else {

           // redirect user to login and set the redirect to to.path
          router.push({
            name: 'Login',
            query: {
              redirect: to.path,
            }
          });
          next(false);
        }
      } else {
      // If no roles are provided, simply let the user in
        next();
      }
    }

  } else {
    next()
  }
})


export default router
