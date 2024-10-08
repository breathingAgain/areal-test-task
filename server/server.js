const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных PostgreSQL
const sequelize = new Sequelize('arealDB', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

// Проверка соединения с базой данных
sequelize.authenticate()
    .then(() => console.log('Соединение с базой данных успешно установлено.'))
    .catch(err => console.error('Невозможно подключиться к базе данных:', err));

// Подключение маршрутов
app.use('/article', articleRoutes);
app.use('/article/:id/comment', commentRoutes); // Убедитесь, что этот маршрут определен после articleRoutes

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
