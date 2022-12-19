require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { Sequelize } = require('sequelize')

const routes = require('./routes')

const PORT = process.env.PORT || 3000
const HOST = process.env.PORT || 'localhost'

const sequelize = new Sequelize(process.env.DB_URI)
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(routes)

sequelize.authenticate()
    .then(() => {
        console.log('Соединение с базой данных выполнено')
        app.listen(PORT, () => console.log(`Сервер запущен на ${HOST}:${PORT}`))
    })
    .catch((err) => console.error('Ошибка базы данных', err))
