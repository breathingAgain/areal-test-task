/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from './components/ArticleList.vue';
import ArticleView from './components/ArticleView.vue';
import ArticleForm from './components/ArticleForm.vue';
import CommentList from './components/CommentList.vue';

const routes = [
    {
        path: '/',
        name: 'ArticleList',
        component: ArticleList,
    },
    {
        path: '/article/:id',
        name: 'ArticleView',
        component: ArticleView,
    },
    {
        path: '/article/new',
        name: 'ArticleForm',
        component: ArticleForm,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
