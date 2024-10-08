<template>
    <div>
        <h1>Добавить новую статью</h1>
        <form @submit.prevent="submitArticle">
            <input v-model="title" placeholder="Название статьи" required />
            <textarea v-model="text" placeholder="Текст статьи" required></textarea>
            <button type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            text: '',
        };
    },
    methods: {
        async submitArticle() {
            await this.$store.dispatch('createArticle', {
                title: this.title,
                text: this.text,
            });
            this.$router.push('/');
        },
    },
};
</script>
