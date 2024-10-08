const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// CRUD для статей
router.post('/', articleController.createArticle); // Создание статьи
router.get('/', articleController.getArticles); // Получение всех статей
router.get('/:id', articleController.getArticleById); // Получение статьи по ID
router.patch('/:id', articleController.updateArticle); // Обновление статьи
router.delete('/:id', articleController.deleteArticle); // Удаление статьи

module.exports = router; // Убедитесь, что этот код присутствует
