<template>
    <div>
        <h1>{{ article.title }}</h1>
        <p>{{ article.text }}</p>
        <router-link :to="'/article/' + article.id + '/comments'">Комментарии</router-link>
        <router-link :to="'/article/'">Назад</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            article: {},
        };
    },
    computed: {
        ...mapGetters(['allArticles']),
    },
    created() {
        const articleId = this.$route.params.id;
        this.article = this.allArticles.find(article => article.id === parseInt(articleId));
    },
};
</script>
