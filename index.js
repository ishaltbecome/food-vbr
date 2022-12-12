const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const db = new Sequelize(require('./db.config'));
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

db.authenticate()
    .then(() => {
        console.log('Соединение с базой данных выполнено')
        app.listen(PORT, () => console.log(`Сервер запущен на localhost:${PORT}`));
    })
    .catch((err) => console.error('Ошибка базы данных', err));
