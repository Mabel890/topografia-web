import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/altimetry',
    name: 'Altimetry',
    component: () => import('../views/Altimetry.vue'),
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/planimetry',
    name: 'Planimetry',
    component: () => import('../views/Planimetry.vue'),
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/roles',
    name: 'Roles',
    component: () => import('../views/Roles/Roles.vue'),
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/roles/add',
    name: 'AddRoles',
    component: () => import('../views/Roles/AddRoles.vue'),
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/roles/update/:rolesId',
    name: 'UpdateRoles', 
    component: () => import('../views/Roles/UpdateRole.vue'),
    meta: {
      isPublic: false,
    },
  },
  /*
  {
    path: '/roles/delete/:rolesId',
    name: 'DeleteRoles', 
    component: () => import('../views/Roles/DeleteRoles.vue'),
    meta: {
      isPublic: false,
    },
  },
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userApp");
  if (to.matched.some((record) => !record.meta.isPublic)) {
    if (!token) {
      next({
        path: "/login",
      });
    }
    next();
  }
  next();
});

export default router
