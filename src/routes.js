export default [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
    },
    {
      path: '/builder',
      name: 'builder',
      component: () => import(/* webpackChunkName: "Sales" */ './views/Builder.vue'),
      meta:{ requiresAuth: true }
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "Sales" */ './views/NotFound.vue'),      
    }     
  ]