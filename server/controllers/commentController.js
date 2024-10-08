const { Comment } = require('../models');

// Создание комментария
exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create({ ...req.body, articleId: req.params.id });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Получение всех комментариев к статье
exports.getCommentsByArticleId = async (req, res) => {
    try {
        const comments = await Comment.findAll({ where: { articleId: req.params.id } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получение комментария по ID
exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.commentId);
        if (comment) {
            res.status(200).json(comment);
        } else {
            res.status(404).json({ error: 'Комментарий не найден' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновление комментария
exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.commentId);
        if (comment) {
            await comment.update(req.body);
            res.status(200).json(comment);
        } else {
            res.status(404).json({ error: 'Комментарий не найден' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Удаление комментария
exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.commentId);
        if (comment) {
            await comment.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Комментарий не найден' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
