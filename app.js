const express = require('express')
const cors = require('cors')
const GameController = require('./controllers/gamesController')
const { sequelize, Game } = require('./models')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Rah Khedam ghir sir T9awed')
})

app.post('/add', GameController.addGame)
app.get('/all', GameController.getAll)
app.get('/game/:id', GameController.getOne)
app.delete('/game/:id', GameController.deleteGame)

app.listen(5000, async () => {
    console.log('Server Running at Port 5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})