import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
//import store from '../store/index'; //para acceder a state para isLogged

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')    
//   }
// ]

// router.beforeEach((to, from, next)=> {
//   const requiresAuth = to.matched.some( record => record.meta.requiresAuth)
//   const isLogged = store.state.auth.isLogged //del store a state modulo auth en la key isLogged
//   if( !requiresAuth && isLogged && to.path === '/login'){
//     next('/sales')
//   } 
//   if( requiresAuth && !isLogged) {
//     next('/login')
//   }else {
//     next()
//   }
// })

export default router
