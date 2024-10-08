<template>
    <div>
        <h2>Комментарии</h2>
        <ul>
            <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            articleId: this.$route.params.id,
        };
    },
    computed: {
        ...mapGetters(['allComments']),
    },
    created() {
        this.$store.dispatch('fetchComments', this.articleId);
    },
};
</script>
