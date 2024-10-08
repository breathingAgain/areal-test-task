const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// CRUD для комментариев
router.post('/', commentController.createComment); // Создание комментария
router.get('/', commentController.getCommentsByArticleId); // Получение всех комментариев к статье
router.get('/:commentId', commentController.getCommentById); // Получение комментария по ID
router.patch('/:commentId', commentController.updateComment); // Обновление комментария
router.delete('/:commentId', commentController.deleteComment); // Удаление комментария

module.exports = router; // Убедитесь, что этот код присутствует
