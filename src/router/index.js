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
    component: () => import('../views/NewsArticle.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
