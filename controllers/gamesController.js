const {sequelize, Game} = require('../models')

const GameController = {
    addGame: async (req, res) => {
        const{name, description} = req.body
        await Game.create({name, description}).then(result => {
            res.json(result)
        }).catch(err => res.send(err))
    },
    getAll: async (req, res) => {
       const games = await Game.findAll()
       res.json(games)
    },
    getOne: async (req, res) => {
        const {id} = req.params
        const game = await Game.findByPk(id)
        if(!game) res.json({error: "Game Undisponible"})
        else
        res.json({game})
    },
    deleteGame: async (req, res) => {
        const {id} = req.params
        const game = await Game.findByPk(id)
        if(!game) res.json({error: "game n'est pas exist"}) 
        game.destroy().then(reslt => {
            if(reslt) res.json({message: "Succesflly deleted"})
        })
    }
}

module.exports = GameController