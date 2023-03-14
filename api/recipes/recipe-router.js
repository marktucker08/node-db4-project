const express = require('express')
const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            res.json({ message: err.message })
        })
})

module.exports = router;