import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsHeadlines from '../views/NewsHeadlines.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: NewsHeadlines,
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import(/* webpackChunkName: NewsArticle */
      '../views/NewsArticle.vue'
    ),
    props: true,
  },
  {
    path: '/404',
    name: 'notFound',
    alias: '*',
    component: () => import(/* webpackChunkName: NotFound */
      '../views/NotFound.vue'
    ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
