<template>
    <v-container>
        <v-row>
            <v-col v-for="article in allArticles" :key="article.id" cols="12" md="4">
                <v-card>
                    <v-card-title>
                        <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
                    </v-card-title>
                    <v-card-text>
                        <p>{{ article.text }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="editArticle(article.id)">Редактировать</v-btn>
                        <v-btn color="red" @click="deleteArticle(article.id)">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allArticles']),
    },
    created() {
        this.$store.dispatch('fetchArticles');
    },
    methods: {
        editArticle(id) {
            this.$router.push(`/article/${id}/edit`);
        },
        deleteArticle(id) {
            // Логика удаления статьи
            console.log('Delete article with id:', id);
            // Добавьте ваш код для удаления статьи
        },
    },
};
</script>

<style scoped>
/* Ваши стили, если нужны */
</style>
