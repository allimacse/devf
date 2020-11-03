const express = require('express')
const router = express.Router()
const { Director } = require('../models/index.js')

router.get('/directors', async (req, res) => {
    try {
        const directors = await Director.find()
        res.json(directors)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/directors/create', async (req, res) => {
    const body = req.body
    const newDirector = new Director(body)
    try {
        const saveddirector = await newDirector.save()
        res
            .status(201)
            .json(
                {
                    message: "Director created on db",
                    payload: saveddirector

                }
            )
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = router