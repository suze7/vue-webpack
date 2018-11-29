import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/test/index.vue'),
      // children: [
      //   {
      //     path: 'test',
      //     component: () => import('./pages/test/index.vue')
      //   }
      // ]
    }
  ]
})

export default Router;