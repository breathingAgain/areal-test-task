const { Article } = require('../models');

// Создание статьи
exports.createArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Получение всех статей
exports.getArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получение статьи по ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ error: 'Статья не найдена' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновление статьи
exports.updateArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            await article.update(req.body);
            res.status(200).json(article);
        } else {
            res.status(404).json({ error: 'Статья не найдена' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Удаление статьи
exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            await article.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Статья не найдена' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
