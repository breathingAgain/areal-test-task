import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        articles: [],
        comments: [],
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },
        ADD_ARTICLE(state, article) {
            state.articles.push(article);
        },
        SET_COMMENTS(state, comments) {
            state.comments = comments;
        },
    },
    actions: {
        async fetchArticles({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/article');
                console.log('Fetched articles:', response.data); // Логируем ответ
                commit('SET_ARTICLES', response.data);
            } catch (error) {
                console.error('Error fetching articles:', error); // Логируем ошибку
            }
        },
        
        async createArticle({ commit }, article) {
            const response = await axios.post('http://localhost:3000/article', article);
            commit('ADD_ARTICLE', response.data);
        },
        async fetchComments({ commit }, articleId) {
            const response = await axios.get(`http://localhost:3000/article/${articleId}/comments`);
            commit('SET_COMMENTS', response.data);
        },
    },
    getters: {
        allArticles: (state) => state.articles,
        allComments: (state) => state.comments,
    },
});

export default store;
